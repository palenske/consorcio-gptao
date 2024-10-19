import { useEffect, useState } from "react";
import { Text, ContentAndImage } from "@labsmaisdigital/dsmaisevo";
import { useWhitelabel } from "../../contexts/WhitelabelContext";

const Contact = () => {
  const { custom } = useWhitelabel();
  const [isWidget, setIsWidget] = useState();
  const isSheBank = custom?.whitelabel?.partnerDomain === "shebank";
  const isVamosParcelar = custom?.whitelabel?.partnerDomain == "vamosparcelar";

  useEffect(() => {
    setIsWidget(sessionStorage.getItem("widget"));
  }, [isWidget]);

  if (isVamosParcelar) return null;

  if (isWidget == "true") {
    return false;
  }

  return (
    <div id={"contact"} style={{ scrollMarginTop: "70px", overflow: "hidden" }}>
      <ContentAndImage
        color="white"
        src={
          isSheBank
            ? "/static/shebank-custom/atendimento.jpg"
            : "/static/img/covers/atendente.png"
        }
        alt="Homem pensativo utilizando um notebook"
        addImageBoundaries={false}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div style={{ marginBottom: "0px" }}>
            <Text size="rg" color="primary">
              <b>DÚVIDAS</b>
            </Text>
          </div>
          <div style={{ marginBottom: "30px", maxWidth: "450px" }}>
            <Text size="xl" color="regular">
              <b>Atendimento</b>
            </Text>
          </div>
          <Text size="rg" color="regular">
            Nossa equipe está pronta para atender você.
            <br />
            Entre em contato agora.
            <a
              style={{
                padding: "20px",
                borderRadius: "10px",
                marginBottom: "60px",
                marginTop: "30px",
                display: "flex",
                flexDirection: "row",
                maxWidth: "fit-content",
                justifyContent: "center",
                alignItems: "center",
                background: "#27AE60",
                color: "white",
              }}
              href="https://api.whatsapp.com/send?phone=5561996479344&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Acessei%20o%20portal%20e%20gostaria%20de%20tirar%20d%C3%BAvidas%20com%20um%20atendente."
            >
              <img
                width="25px"
                src="/static/img/icons/whatsapp.svg"
                alt="Logo ver do Whatsapp pulsando"
                style={{
                  display: "inline-block",
                  marginRight: "20px",
                  paddingBottom: 0,
                }}
              />
              <Text size="rg" color="white" weight="bolder">
                Atendimento pelo Whatsapp
              </Text>
            </a>
          </Text>
        </div>
      </ContentAndImage>
    </div>
  );
};

export default Contact;
