import { Image } from "antd";
import { Text } from "@labsmaisdigital/dsmaisevo";
import { useMediaQuery } from "react-responsive";

import {
  CardBB,
  ExternalStepContainer,
} from "~forms/maisbbcredito/Consorcio/Consorcio.style";


const FormThree = ({ resetStep, nextStep, setRequestState }) => {
  const isMobile = useMediaQuery({ maxWidth: "500px" });
  const { incrementData } = useConsortium();
  const onSuccess = async response => {
    incrementData({ clientData: { stepThree: { idWall: response } } });
    await updateAttempt(setRequestState, {
      currentStep: "IDWALL",
      nextStep: "DADOS_BANCARIOS",
      metadata: { clientInputData: response },
    });
    nextStep();
  };

  return (
    <>
      <ExternalStepContainer>
        <center>
          <Text color="primary" size="md">
            Realize a <b>confirmação de identidade</b>
          </Text>
        </center>
        <div style={{ width: isMobile ? "95%" : "70%", margin: "0 auto 30px" }}>
          <Text size="ms" weight="light">
            Para confirmar a seu consórcio é necessário a confirmação da sua
            identidade, por meio de selfie e envio de documentos!
          </Text>
        </div>
        <CardBB
          title={
            <>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                <Text size="md" weight="bold" lineHeight="ms" color="#465eff">
                  Representante autorizado
                </Text>
              </div>
              <Image
                preview={false}
                alt="logo BB consorcios"
                src={"/static/img/consorcio/logos/BBC_inline_blue.png"}
                width={"50%"}
              />
            </>
          }
          headStyle={{
            backgroundColor: "#FCFC30",
            textAlign: "center",
            padding: 0,
          }}
          bodyStyle={{
            marginTop: "-2rem",
            padding: 0,
            minHeight: "630px",
          }}
          style={{
            margin: "0 auto",
            maxWidth: "530px",
            maxHeight: "fit-content",
          }}
        >
          <IdWall onSuccess={onSuccess} resetStep={resetStep} />
        </CardBB>
      </ExternalStepContainer>
    </>
  );
};

export default FormThree;
