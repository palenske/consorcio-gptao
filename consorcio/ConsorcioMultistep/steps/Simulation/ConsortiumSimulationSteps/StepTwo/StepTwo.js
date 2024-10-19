import { useEffect, useState } from "react";
import { Col, Row, Card, Pagination, Image, Select } from "antd";
import { useMediaQuery } from "react-responsive";
import { RightOutlined } from "@ant-design/icons";
import { Text } from "@labsmaisdigital/dsmaisevo";



import {
  ExternalStepContainer,
  GoodsCard,
} from "../../../../../Consorcio.style";


import { updateAttempt } from "../../integrations/requests/attempts";
import { consortiumBens } from "../../integrations/requests/consortium";
import { hasError } from "../../lib/requests";
import { showError } from "../../lib/toast";


const defaultFilterConfig = {
  min: 1,
  max: 999999,
  valueRange: [1, 999999],
};

const defaultPaginateConfig = {
  totalPage: 0,
  current: 1,
  minIndex: 0,
  maxIndex: 0,
};

const onlyChoosedSegments = {
  AI: {
    codigoGrupo: "AI",
    numeroConvenio: 97,
    dataInicioVigencia: "01.08.2022",
    dataFimVigencia: "",
    textoDescricaoGrupo: "AUTOMOVEL IPCA",
  },
  AU: {
    codigoGrupo: "AU",
    numeroConvenio: 97,
    dataInicioVigencia: "01.08.2022",
    dataFimVigencia: "",
    textoDescricaoGrupo: "AUTOMOVEIS",
  },
};

const StepTwo = ({ nextStep }) => {
  const { incrementData } = useConsortium();
  const [requestState, setRequestState] = useState(STATUS.INITIAL);
  const [list, setList] = useState([]);
  const [filteredList, setFiltredList] = useState([]);
  const [filterConfig, setFilterConfig] = useState(defaultFilterConfig);
  const [paginateConfig, setPaginateConfig] = useState(defaultPaginateConfig);
  const [choosedSegment, setChoosedSegment] = useState("AU");
  const isMobile = useMediaQuery({ maxWidth: "576px" });
  const pageSize = 6;

  const fetchPaginate = list => {
    setPaginateConfig({
      ...paginateConfig,
      totalPage: Math.floor(list.length / pageSize),
      maxIndex: pageSize,
    });
  };

  const handlePaginate = page => {
    setPaginateConfig({
      ...paginateConfig,
      current: page,
      minIndex: (page - 1) * pageSize,
      maxIndex: page * pageSize,
    });
  };

  const fetchFilter = list => {
    if (!list.length) return;
    const values = list?.map(({ valorBem }) => valorBem);
    const min = Math.min(...values);
    const max = Math.max(...values);
    setFilterConfig({ min, max, valueRange: [min, max] });
  };

  const handleFilter = value => {
    setFilterConfig({ ...filterConfig, valueRange: value });
    handlePaginate(1);
  };

  const getList = async () => {
    let consortiumItems = [];
    const consortiumData = onlyChoosedSegments[choosedSegment];
    const response = await consortiumBens(setRequestState, {
      tipoGrupo: consortiumData?.codigoGrupo,
      convenio: consortiumData?.numeroConvenio,
    });

    if (hasError(response)) {
      showError(response);
    } else {
      consortiumItems = response?.data?.lista;
    }

    fetchFilter(consortiumItems);
    fetchPaginate(consortiumItems);
    setList(consortiumItems);
  };

  useEffect(() => {
    getList();
  }, [choosedSegment]);

  useEffect(() => {
    const filtered = list
      .filter(
        ({ valorBem }) =>
          valorBem >= filterConfig.valueRange[0] &&
          valorBem <= filterConfig.valueRange[1]
      )
      .sort((a, b) => b.valorBem - a.valorBem);

    setFiltredList(filtered);
    fetchPaginate(filtered);
  }, [filterConfig]);

  const saveAndNext = async item => {
    incrementData({
      simulation: {
        stepTwo: { ...item, ...onlyChoosedSegments[choosedSegment] },
      },
    });
    await updateAttempt(setRequestState, {
      currentStep: "BEM_REFERENCIA",
      nextStep: "SELECIONAR_GRUPO",
      metadata: { selectedItems: item },
    });
    nextStep();
  };

  return (
    <ExternalStepContainer>
      <center>
        <Text color="primary" size="md">
          Qual o <b>valor do bem</b> que você quer comprar?
        </Text>
      </center>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Text size="sm" weight="light">
          O bem de referência é apenas uma base para o cálculo do consórcio, não
          necessariamente é o bem que você precisa comprar.
        </Text>
      </div>
      <Card
        headStyle={{ borderBottom: "2px solid #e2dcdc" }}
        title={
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "nowrap",
            }}
          >
            <Text size={isMobile ? "rg" : "md"} weight="bold" color="primary">
              Bem de referência
            </Text>
            <Select
              size={isMobile ? "middle" : "large"}
              defaultValue={choosedSegment}
              onChange={value => setChoosedSegment(value)}
              options={[
                {
                  label: <Text color="primary">IPCA</Text>,
                  value: "AI",
                },
                {
                  label: <Text color="primary">FIPE</Text>,
                  value: "AU",
                },
              ]}
            />
          </div>
        }
        bodyStyle={{ padding: "0" }}
        style={{ width: "100%", border: "2px solid #e2dcdc" }}
      >
        <StatusDisplay pageSize="30rem" status={requestState} omitResponse spin>
          {!list.length ? (
            <SadMessageScreen
              inFlow
              title={
                <Text color="primary" weight="bold" size="xl">
                  Nenhum item encontrado.
                </Text>
              }
              message={
                <Text size="md">
                  Não há bens disponiveis para
                  <br />
                  este <b>segmento de consórcio</b>.
                </Text>
              }
            />
          ) : (
            <SliderFilter
              valueRange={filterConfig.valueRange}
              min={filterConfig.min}
              max={filterConfig.max}
              handleFilter={handleFilter}
            />
          )}
          <Row
            id="goods-box"
            gutter={[15, 60]}
            style={{ padding: "30px 10px" }}
          >
            {filteredList.map(
              (item, index) =>
                index >= paginateConfig.minIndex &&
                index < paginateConfig.maxIndex && (
                  <Col
                    key={`${item.textoProdutor}${index}`}
                    xs={24}
                    md={12}
                    xl={8}
                  >
                    <GoodsCard id={index} onClick={() => saveAndNext(item)}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          height: "100%",
                        }}
                      >
                        {(() => {
                          const foundCar = carsStockPhotos.find(
                            carName =>
                              (item?.textoBem ?? "")
                                .toUpperCase()
                                .split(" ")
                                .join("")
                                .split("-")
                                .join("")
                                .indexOf(carName) !== -1
                          );

                          return (
                            <Image
                              preview={false}
                              height={150}
                              alt={item.textoProdutor + " " + item.textoBem}
                              src={
                                foundCar
                                  ? `/static/cars/${foundCar}.jpg`
                                  : "/static/img/consorcio/sample-car.png"
                              }
                            />
                          );
                        })()}
                      </div>
                      <div
                        style={{
                          width: "100%",
                          textAlign: "start",
                          padding: "7.5px 15px",
                        }}
                      >
                        <Text size="sm">{item.textoBem}</Text>
                        <br />
                        <Text size="md" weight="bold">
                          {item.valorBem.toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </Text>
                      </div>
                      <Row
                        align="middle"
                        justify="space-between"
                        style={{
                          background: "var(--primary)",
                          width: "100%",
                          padding: "5px 10px 5px 15px",
                          gap: "5px",
                          borderRadius: "0 0 5px 5px",
                          cursor: "pointer",
                        }}
                      >
                        <Text size="sm" color="white" weight="bold">
                          SELECIONAR
                        </Text>
                        <RightOutlined
                          style={{
                            fontSize: "22px",
                            strokeWidth: "40",
                            stroke: "white",
                            color: "white",
                          }}
                        />
                      </Row>
                    </GoodsCard>
                  </Col>
                )
            )}
          </Row>
        </StatusDisplay>
      </Card>
      <Pagination
        size="small"
        style={{
          paddingTop: "1rem",
          gap: "20px",
        }}
        hideOnSinglePage
        pageSize={pageSize}
        current={paginateConfig.current}
        total={filteredList.length}
        onChange={handlePaginate}
      />
    </ExternalStepContainer>
  );
};

export default StepTwo;
