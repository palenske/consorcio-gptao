import { useEffect } from "react";
import {
  CaretDownFilled,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Col, Collapse, Image, Row, Space } from "antd";
import { Text } from "@labsmaisdigital/dsmaisevo";
import { useMediaQuery } from "react-responsive";


import {
  CollapseInfo,
  CollapseItem,
  CustomSwitch,
  PanelInfo,
} from "../../Consorcio.style";
import ShowPlan from "./ShowPlan";
import scrollToTop from "../scrollToTop";
import { updateAttempt } from "../../integrations/requests/attempts";

const ShowChosen = ({
  setRequestState,
  goodChosen,
  handleChosen,
  nextStep,
}) => {
  const {
    data: { simulation },
    incrementData,
  } = useConsortium();
  const { Panel } = Collapse;
  const isMobile = useMediaQuery({ maxWidth: "500px" });
  const toCentralize = useMediaQuery({ maxWidth: "767px" });
  const toTopValue = isMobile ? 320 : 280;

  useEffect(() => scrollToTop(toTopValue), []);

  const saveAndNext = async item => {
    incrementData({
      simulation: {
        stepThree: item,
      },
    });
    await updateAttempt(setRequestState, {
      currentStep: "SELECIONAR_GRUPO",
      nextStep: "ENDERECO_USUARIO",
      metadata: { selectedItems: item },
    });
    nextStep();
  };

  const getNextWork = d => {
    d.setDate(d.getDate()); // today
    if (d.getDay() == 0) d.setDate(d.getDate() + 1);
    else if (d.getDay() == 6) d.setDate(d.getDate() + 2);
    return d;
  };

  const ButtonRow = () => (
    <Row
      align="middle"
      justify="space-between"
      style={{
        zIndex: 2,
        position: "sticky",
        top: "70px",
        background: "#fcfc30",
        borderLeft: "2px solid #e2dcdc",
        borderRight: "2px solid #e2dcdc",
      }}
    >
      <Col>
        <Row
          align="middle"
          style={{
            gap: "5px",
            padding: "5px 18px",
            cursor: "pointer",
          }}
          onClick={() => {
            handleChosen(false);
            scrollToTop(150);
          }}
        >
          <Col>
            <LeftOutlined
              style={{
                fontSize: "16px",
                color: "var(--primary)",
              }}
            />
          </Col>
          <Col>
            <Text weight="bold" color="var(--primary)">
              Voltar
            </Text>
          </Col>
        </Row>
      </Col>
      <Col>
        <Row
          align="middle"
          style={{
            display: isMobile && "none",
            gap: "5px",
            cursor: "pointer",
            padding: "5px 12px 5px 18px",
            background: "var(--primary)",
            boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.15)",
            borderLeft: "2px solid #e2dcdc",
          }}
          onClick={() => saveAndNext(goodChosen)}
        >
          <Col>
            <Text weight="bold" color="white">
              Selecionar
            </Text>
          </Col>
          <Col>
            <RightOutlined
              style={{
                fontSize: "16px",
                color: "white",
              }}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );

  return (
    <>
      <div
        style={{
          borderBottom: "1px solid var(--primary)",
          maxWidth: isMobile ? "" : "39%",
          textAlign: isMobile ? "center" : "start",
        }}
      >
        <Text size="md" weight="bold" color="var(--primary)">
          Parcelas e grupos
        </Text>
      </div>
      <br />
      <div
        style={{
          width: "100%",
          borderRadius: 2,
          border: "2px solid #e2dcdc",
          borderBottom: isMobile ? "" : "2px solid #e2dcdc",
          background: "white",
          padding: "0",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {(() => {
            const foundLogo = logo.find(
              logo => simulation?.stepTwo?.textoProdutor === logo.name
            );
            const foundCar = carsStockPhotos.find(
              carName =>
                (simulation?.stepTwo?.textoBem ?? "")
                  .toUpperCase()
                  .indexOf(carName) !== -1
            );
            return (
              <Image
                preview={false}
                height={"100%"}
                alt={
                  simulation?.stepTwo?.textoProdutor +
                  " " +
                  simulation?.stepTwo?.textoBem
                }
                src={foundCar ? `/static/cars/${foundCar}.jpg` : foundLogo?.url}
              />
            );
          })()}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            background: "white",
            padding: "0.8rem 0",
            textAlign: "center",
          }}
        >
          <Text size="rg" weight="bold" color="grey">
            {simulation?.stepTwo?.textoBem}
          </Text>
          <Text size="md" lineHeight="md" weight="bold">
            {(simulation?.stepTwo?.valorBem ?? "0").toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </Text>
        </div>
      </div>
      {!isMobile && ButtonRow(true)}
      <ShowPlan goodChosen={goodChosen} saveAndNext={saveAndNext} />
      <div
        style={{
          padding: isMobile ? "0 1rem" : "0 2rem",
          marginTop: isMobile && "-30px",
          background: "#fafafa",
          paddingBottom: "2rem",
          border: "2px solid #e2dcdc",
          borderTop: "",
        }}
      >
        <CollapseItem borderBottom>
          <div
            style={{
              width: "100%",
              margin: isMobile && "auto",
              textAlign: isMobile && "center",
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Text>Débito da 1ª parcela</Text>
              <br />
              {!isMobile && (
                <Text size="sm" color="grey">
                  As demais parcelas serão debitadas dia 10
                </Text>
              )}
            </div>
            <div>
              <Text weight="bolder">
                {(() => {
                  var d = getNextWork(new Date());
                  return (
                    (d.getDate() < 10 ? `0${d.getDate()}` : d.getDate()) +
                    "/" +
                    (d.getMonth() + 1) +
                    "/" +
                    d.getFullYear()
                  );
                })()}
              </Text>
            </div>
            {isMobile && (
              <Text size="sm" color="grey">
                As demais parcelas serão debitadas dia 10
              </Text>
            )}
          </div>
        </CollapseItem>
        <CollapseItem borderBottom style={{ alignItems: "center" }}>
          <Text>Permito divulgar{isMobile && <br />} meu cadastro</Text>
          <CustomSwitch checked bgColor={"var(--primary)"} />
        </CollapseItem>
        <CollapseInfo bordered={false} borderBottom>
          <Panel key="1" header={<Text>Detalhar custo de participação</Text>}>
            <Space
              size={40}
              direction="vertical"
              style={{ width: "100%", marginBottom: "40px" }}
            >
              <div>
                <Text>Mensalmente</Text>
                <Row justify="space-between">
                  <Text size="sm">Taxa de admnistração</Text>
                  <Text size="sm">
                    {goodChosen?.taxaAdministracao?.percentualMensal} %
                  </Text>
                </Row>
                <Row justify="space-between" style={{ marginTop: "5px" }}>
                  <Text size="sm">Fundo de reserva</Text>
                  <Text size="sm">
                    {goodChosen?.fundoReserva?.percentualMensal} %
                  </Text>
                </Row>
              </div>
              <div>
                <Text>TOTAL</Text>
                <Row justify="space-between" style={{ marginTop: "5px" }}>
                  <Text size="sm">Taxa de admnistração</Text>
                  <Text size="sm">
                    {goodChosen?.taxaAdministracao?.percentual} %
                  </Text>
                </Row>
                <Row justify="space-between">
                  <Text size="sm">Fundo de reserva</Text>
                  <Text size="sm">
                    {goodChosen?.fundoReserva?.percentual} %
                  </Text>
                </Row>
                <Row justify="space-between">
                  <Text size="sm">Percentual total</Text>
                  <Text size="sm">{goodChosen?.custoTotal?.percentual} %</Text>
                </Row>
              </div>
            </Space>
          </Panel>
        </CollapseInfo>
        <CollapseInfo bordered={false}>
          <PanelInfo key="3" header={<Text>Informações da Assembleia</Text>}>
            <div
              style={{
                display: goodChosen?.grupo?.quantidadeVagas == 0 ? "" : "none",
                marginBottom: "40px",
                padding: "0 16px",
                textAlign: "justify",
              }}
            >
              <Text>
                A primeira assembleia será realizada na data de formação do
                grupo. A administradora tem o prazo de 90 dias para formar o
                grupo. Caso o grupo não seja constituído nesse prazo, a
                administradora devolverá a importância paga, acrescida dos
                rendimentos líquidos provenientes da sua aplicação financeira.
              </Text>
            </div>
            <Row
              align="top"
              style={{
                padding: "0 1rem",
                textAlign: toCentralize && "center",
              }}
              gutter={[0, 20]}
            >
              <Col xs={24} sm={12} md={6}>
                <div style={{ margin: "auto", width: "fit-content" }}>
                  <Text size="sm" weight="bolder">
                    Data da Primeira Assembleia
                  </Text>
                  <br />
                  <center>
                    <Text size="md" weight="bold">
                      {goodChosen?.grupo?.dataPrimeiraAssembleiaParticipacao}
                    </Text>
                  </center>
                </div>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <div style={{ margin: "auto", width: "fit-content" }}>
                  <Text weight="bolder" size="sm">
                    {goodChosen?.grupo?.quantidadeAssembleiasRealizadas}{" "}
                    Assembleias
                  </Text>
                  <br />
                  <Text size="sm" weight="bold">
                    Realizadas
                  </Text>
                </div>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <div style={{ margin: "auto", width: "fit-content" }}>
                  <Text weight="bolder" size="sm">
                    Menor lance
                  </Text>
                  <br />
                  <Row align="middle" style={{ gap: "5px" }}>
                    <CaretDownFilled style={{ color: "red" }} />
                    <Text size="sm">
                      {goodChosen?.menorLanceContemplacao?.percentual} %
                    </Text>
                  </Row>
                </div>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <div style={{ margin: "auto", width: "fit-content" }}>
                  <Text weight="bolder" size="sm">
                    Grupo
                  </Text>
                  <br />
                  <Text weight="bold" color="primary">
                    {goodChosen?.grupo?.codigoGrupo}
                  </Text>
                </div>
              </Col>
            </Row>
          </PanelInfo>
        </CollapseInfo>
        <div style={{ marginBottom: "20px" }} />
      </div>
    </>
  );
};

export default ShowChosen;
