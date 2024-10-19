import { Icon } from "@iconify/react";
import { Col, Image, Row } from "antd";
import { useState } from "react";
import { useEffect } from "react";

// import { consortiumList } from "../../integrations/requests/consortium";

import { ExternalStepContainer, HeroStepTitle } from "../../../../Consorcio.style";
// import { hasError } from "../../lib/requests";
// import { showError } from "../../lib/toast";


const onlyChoosedSegments = [
  {
    codigoGrupo: "AI",
    numeroConvenio: 97,
    dataInicioVigencia: "01.08.2022",
    dataFimVigencia: "",
    textoDescricaoGrupo: "AUTOMOVEL IPCA",
  },
  {
    codigoGrupo: "AU",
    numeroConvenio: 97,
    dataInicioVigencia: "01.08.2022",
    dataFimVigencia: "",
    textoDescricaoGrupo: "AUTOMOVEIS",
  },
];

const CodeToIcon = code =>
  ({
    AI: <Icon fontSize={"90px"} icon="bx:car" />,
    AU: <Icon fontSize={"90px"} icon="bxs:car" />,
    TC: <Icon fontSize={"90px"} icon="icon-park-outline:truck" />,
    MO: <Icon fontSize={"90px"} icon="ri:motorbike-line" />,
    IM: <Icon fontSize={"90px"} icon="cil:house" />,
    EE: <Icon fontSize={"90px"} icon="ic:round-phonelink" />,
    SV: <Icon fontSize={"90px"} icon="la:tools" />,
    VB: (
      <Icon
        fontSize={"90px"}
        icon="material-symbols:agriculture-outline-rounded"
      />
    ),
  }?.[code] ?? "");

const codeToLabel = {
  AI: "Automóveis (variação IPCA)",
  AU: "Automóveis (variação FIPE)",
  TC: "Tratores e Caminhões",
  MO: "Motocicletas",
  IM: "Imóveis",
  EE: "Eletro Eletrônicos",
  SV: "Serviços",
  VB: "Agro / Outros Bens",
};

const ConsortiumBankLabelCard = ({ children }) => {
  return (
    <div
      style={{
        margin: "auto",
        background: "#FFFFFF",
        boxShadow: "0px 9px 28px 8px rgba(0, 0, 0, 0.05)",
        borderRadius: "2px",
        width: "90%",
      }}
    >
      <div
        style={{
          backgroundColor: "#FCFC30",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <Image
          preview={false}
          src={"/static/img/bb-consorcios-logo.png"}
          alt="consorcio bb logo"
          width={190}
        />
      </div>
      <center style={{ padding: "40px" }}>{children}</center>
    </div>
  );
};

const StepOne = ({ nextStep, updateAttemptStep }) => {
  const { incrementData } = useConsortium();
  const [requestState, setRequestState] = useState(STATUS.INITIAL);
  const [list, setList] = useState([]);

  // const getConsortiumList = async () => {
  //   const response = await consortiumList(setRequestState);
  //   await updateAttemptStep({ fetchApi: response });
  //   hasError(response)
  //     ? (showError(response), setList(segmentos))
  //     : setList(response.data);
  // };

  useEffect(() => {
    // getConsortiumList();
    // setList(segmentos)
    setList(onlyChoosedSegments);
  }, []);

  const saveAndNext = async item => {
    await incrementData({ consortiumData: item });
    await updateAttemptStep(
      { selectedItems: item },
      "BEM_REFERENCIA",
      "SELECIONAR_GRUPO"
    );
    nextStep();
  };

  return (
    <ExternalStepContainer>
      <StatusDisplay status={requestState} omitResponse spin>
        <HeroStepTitle>
          Escolha a <b>categoria</b> do <b>consórcio</b>
        </HeroStepTitle>
        <ConsortiumBankLabelCard>
          <Row gutter={[30, 50]} style={{ marginBottom: "1rem" }}>
            {(list ?? []).map((item, index) => (
              <Col key={item.codigoGrupo} xs={24} md={12} xl={6}>
                <button
                  id={index}
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "var(--primary)",
                    borderRadius: "4px",
                    color: "white",
                    border: "none",
                    padding: "20px 0px",
                  }}
                  onClick={() => saveAndNext(item)}
                >
                  {CodeToIcon(item.codigoGrupo)}
                </button>
                <center
                  style={{
                    color: "#3b3b3b",
                    padding: "5px",
                  }}
                >
                  {codeToLabel?.[item.codigoGrupo]}
                </center>
              </Col>
            ))}
          </Row>
        </ConsortiumBankLabelCard>
      </StatusDisplay>
    </ExternalStepContainer>
  );
};

export default StepOne;
