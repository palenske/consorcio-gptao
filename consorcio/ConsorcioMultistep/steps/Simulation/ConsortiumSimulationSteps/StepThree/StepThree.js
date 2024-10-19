import { useEffect, useState } from "react";
import { Card } from "antd";


import {
  consortiumPlano,
  consortiumPrazo,
} from "~integrations/requests/consortium";
import { hasError } from "../../lib/requests";
import { showError } from "../../lib/toast";

import { Text, Button } from "@labsmaisdigital/dsmaisevo";

import ListOptions from "./components/ListOptions";
import {
  ExternalStepContainer,
  FilterTabs,
  HeroStepTitle,
} from "../../../../../Consorcio.style";


const StepThree = ({ nextStep }) => {
  const {
    data: { leadCreditLine, simulation },
    incrementData,
  } = useConsortium();
  const [requestState, setRequestState] = useState(STATUS.INITIAL);
  const [list, setList] = useState([]);
  const [filterConfig, setFilterConfig] = useState();
  const [filterBase, setFilterBase] = useState("parcela");
  const [goodChosen, setGoodChosen] = useState();
  const [showChosen, setShowChosen] = useState(false);
  const [hasValidOptions, setHasValidOptions] = useState(true);
  const [reloadRequest, setReloadRequest] = useState(false);

  const sorterList = (a, b) => {
    return filterBase == "lance"
      ? b.menorLanceContemplacao.percentual -
          a.menorLanceContemplacao.percentual
      : b.grupo.valorParcela - a.grupo.valorParcela;
  };

  const handleFilter = value => {
    setFilterConfig({ ...filterConfig, valueRange: value });
  };

  const getPrazo = async () => {
    const { data: responseData } = await consortiumPrazo(setRequestState, {
      tipoGrupo: simulation?.stepTwo?.codigoGrupo,
    });
    const [prazo] = responseData?.lista;

    incrementData({ simulation: { prazo } });
    return prazo;
  };
  const getOptions = async () => {
    try {
      const prazo = simulation?.prazo ?? (await getPrazo());
      const params = {
        tipoGrupo: simulation?.stepTwo?.codigoGrupo,
        codigoProdutor: simulation?.stepTwo?.codigoProdutor,
        codigoBem: simulation?.stepTwo?.codigoBem,
        valorBem: simulation?.stepTwo?.valorBem,
        convenio: simulation?.stepTwo?.numeroConvenio,
        mesPlanoInicio: prazo?.mesPlanoInicio,
        mesPlanoFim: prazo?.mesPlanoFim,
      };
      const response = await consortiumPlano(setRequestState, params);

      if (hasError(response)) {
        showError(response);
      } else {
        const maxAcceptedPrice = leadCreditLine?.valorParcelaAdmitido;
        const preparedList = response.data
          .filter(
            ({ grupo: { valorParcela } }) => valorParcela <= maxAcceptedPrice
          )
          .sort((a, b) => sorterList(a, b));

        setHasValidOptions(preparedList?.length > 0);
        setList(preparedList);
      }
    } catch (err) {
      console.info(err);
    }
  };
  const fetchFilter = () => {
    if (filterBase === "parcela") {
      const values = list?.map(({ grupo: { valorParcela } }) => valorParcela);
      if (values) {
        const max = Math.ceil(Math.max(...values));
        const min = Math.floor(Math.min(...values));
        setFilterConfig({ min, max, valueRange: [min, max] });
      }
    } else if (filterBase === "lance") {
      setFilterConfig({ min: 10, max: 100, valueRange: [10, 100] });
    }
  };

  useEffect(() => {
    getOptions();
  }, [reloadRequest]);

  useEffect(() => {
    fetchFilter();
  }, [list, filterBase]);

  return (
    <ExternalStepContainer>
      <StatusDisplay status={requestState} omitResponse spin>
        {hasValidOptions && (
          <>
            <HeroStepTitle id="hero.title">
              Selecione uma <b>parcela ou lance que caiba no seu bolso</b>
            </HeroStepTitle>
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <Text size="ms" weight="light">
                Escolha a opção que mais combina com seus objetivos e conte com
                condições exclusivas.
              </Text>
            </div>
            {showChosen ? (
              <ShowChosen
                setRequestState={setRequestState}
                goodChosen={goodChosen}
                handleChosen={setShowChosen}
                nextStep={nextStep}
              />
            ) : (
              <>
                <Card
                  bodyStyle={{ padding: "0px" }}
                  headStyle={{ borderBottom: "2px solid #e2dcdc" }}
                  style={{
                    border: "2px solid #e2dcdc",
                    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.10))",
                  }}
                  title={
                    <center>
                      <Text color="grey">
                        {simulation?.stepTwo?.textoBem ?? "-"}
                      </Text>
                      <br />
                      <Text weight="bolder">
                        {(simulation?.stepTwo?.valorBem ?? "0").toLocaleString(
                          "pt-br",
                          {
                            style: "currency",
                            currency: "BRL",
                          }
                        )}
                      </Text>
                    </center>
                  }
                >
                  {requestState == STATUS.SUCCESS && (
                    <>
                      <FilterTabs
                        centered
                        defaultActiveKey={filterBase}
                        onChange={key => setFilterBase(key)}
                        items={[
                          {
                            key: "parcela",
                            label: (
                              <Text weight="bolder" size="md">
                                Parcela
                              </Text>
                            ),
                          },
                          {
                            key: "lance",
                            label: (
                              <Text weight="bolder" size="md">
                                Lance
                              </Text>
                            ),
                          },
                        ]}
                      ></FilterTabs>
                      {filterConfig && (
                        <SliderFilter
                          filterBase={filterBase}
                          valueRange={filterConfig.valueRange}
                          min={filterConfig.min}
                          max={filterConfig.max}
                          handleFilter={handleFilter}
                        />
                      )}
                    </>
                  )}
                </Card>
                {requestState == STATUS.SUCCESS ? (
                  <ListOptions
                    list={list}
                    setShowChosen={setShowChosen}
                    setGoodChosen={setGoodChosen}
                    filterBase={filterBase}
                    filterConfig={filterConfig}
                  />
                ) : (
                  <center style={{ marginTop: "2rem" }}>
                    <Button
                      size="extra"
                      text={
                        <Text color="white" size="md">
                          Recarregar informações
                        </Text>
                      }
                      onClick={() => setReloadRequest(!reloadRequest)}
                    />
                  </center>
                )}
              </>
            )}
          </>
        )}
        {!hasValidOptions && (
          <center
            style={{
              margin: "0 auto",
              maxWidth: "700px",
              padding: "30px 30px",
            }}
          >
            <HeroStepTitle id="hero.title">Atenção</HeroStepTitle>
            <Text size="ms" weight="light">
              Infelizmente nosso sistema não encontrou grupos com parcelas
              disponíveis para você para o bem selecionado. Tente novamente
              selecionando outro bem na seção anterior.
            </Text>
          </center>
        )}
      </StatusDisplay>
    </ExternalStepContainer>
  );
};

export default StepThree;
