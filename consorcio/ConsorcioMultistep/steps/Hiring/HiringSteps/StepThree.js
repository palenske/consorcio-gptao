import { ArrowLeftOutlined } from "@ant-design/icons";
import { Text } from "@labsmaisdigital/dsmaisevo";

const links = {
  desktop: "https://www2.bancobrasil.com.br/aapf",
  mobile: "https://www49.bb.com.br/m/home/cm49eyJvcHIiOiJIT01FIn0",
};

const StepThree = ({ backStep }) => {
  const isMobile = window.navigator.userAgentData.mobile;

  const onSubmit = async () => {
    await updateAttempt(setRequestState, {
      currentStep: "CONCLUIDO",
      nextStep: "PAGAMENTO_APP_BB",
      metadata: { hiringData: formData },
    });
  };

  return (
    <>
      <ArrowLeftOutlined
        style={{
          position: "absolute",
          top: "6rem",
          color: "var(--primary)",
          fontSize: "30px",
        }}
        onClick={() => backStep()}
      />
      <form>
        <center>
          <div
            style={{
              width: "95%",
              maxWidth: "790px",
              background: "#FFFFFF",
              boxShadow: "0px 9px 28px 8px rgba(0, 0, 0, 0.05)",
              borderRadius: "2px",
              marginBottom: "50px",
              textAlign: "left",
            }}
          >
            <div style={{ padding: "10px 20px" }}>
              <Text color="var(--primary)" size="xl">
                Autorize no seu aplicativo Banco do Brasil
              </Text>
            </div>
            <hr />
            <div style={{ padding: "10px 20px", marginBottom: "20px" }}>
              <Text color="black" size="lg">
                Para realizar a inclusão de débito em conta corrente, você
                precisa{" "}
                <b>autorizar a operação no seu aplicativo Banco do Brasil</b>.
              </Text>
              <Text color="var(--primary)" size="sm">
                Passo a passo: Acesse o aplicativo do Banco do Brasil {">"}{" "}
                Notificações {">"} Pendências de confirmação {">"} Confirmação
                de Consórcio {">"} Confirma
              </Text>
            </div>
            <center>
              <img
                style={{ marginBottom: "20px" }}
                loading="lazy"
                src="/static/img/consorcio/agree-app-contract.png"
                width="90%"
              />

              <div style={{ width: "100%", padding: "30px" }}>
                {isMobile ? (
                  <>
                    <a style={{ fontSize: "20px" }} href={links.mobile}>
                      <b>Clique aqui</b> para abrir o aplicativo
                    </a>
                  </>
                ) : (
                  <>
                    <a
                      style={{
                        fontSize: "20px",
                        fontSize: "20px",
                        backgroundColor: "var(--primary)",
                        padding: "17px 28px",
                        color: "white",
                        borderRadius: "5px",
                      }}
                      href={links.desktop}
                      target="_blank"
                      rel="noreferrer"
                      onClick={onSubmit}
                    >
                      <b>Clique aqui</b> para abrir o portal do BB
                    </a>
                  </>
                )}
              </div>
            </center>
          </div>
        </center>
      </form>
    </>
  );
};

export default StepThree;
