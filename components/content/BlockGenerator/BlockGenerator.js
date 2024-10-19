import {
  Text,
  ContentAndImage,
  MainContainer,
} from "@labsmaisdigital/dsmaisevo";
import useWidget from "~hooks/useWidget";
import { useWhitelabel } from "../../contexts/WhitelabelContext";
import { BusinessPartners } from "./BlockGenerator.style";

const BlockGenerator = () => {
  const { custom } = useWhitelabel();
  const { isWidget } = useWidget();

  const isMainPortal = custom?.whitelabel?.accountKey === "cobanmaisdigital";

  if (isWidget) {
    return null;
  }

  const mainPortalContent = (
    <>
      <ContentAndImage
        color="lightgray"
        reverse
        src={"/static/img/home/home2.png"}
        alt="Homem pensativo utilizando um notebook"
      >
        <div style={{ marginBottom: "0px" }}>
          <Text size="rg" color="primary">
            <b>PARA O SEU NEGÓCIO</b>
          </Text>
        </div>
        <div style={{ marginBottom: "30px", maxWidth: "450px" }}>
          <Text size="xl" color="regular">
            <b>Lucre mais com a sua empresa</b>
          </Text>
        </div>
        <Text size="rg" color="regular">
          Aqui disponibilizamos uma plataforma de serviços bancários
          personalizada para os seus parceiros. Assim, a cada contratação feita
          por essa ferramenta, eles são comissionados. Com inúmeros produtos
          para a venda, a possibilidade de grandes lucros só cresce.
        </Text>
      </ContentAndImage>
      <ContentAndImage
        color="primary"
        src={"/static/img/home/home1.png"}
        alt="Homem pensativo utilizando um notebook"
      >
        <div style={{ marginBottom: "0px" }}>
          <Text size="rg" color="#FFEC41">
            <b>AGILIDADE</b>
          </Text>
        </div>
        <div style={{ marginBottom: "30px", maxWidth: "450px" }}>
          <Text size="xl" color="white">
            <b>Empréstimo rápido e fácil, na sua mão em 10 minutos</b>
          </Text>
        </div>
        <Text size="rg" color="white">
          Com o Coban Mais Digital é possível ter o seu empréstimo em 10
          minutos, basta logar com a sua conta do Banco do Brasil. Para quem não
          é cliente, solicitamos validação por meio de documentos de identidade.
        </Text>
      </ContentAndImage>
      <ContentAndImage
        color="lightgray"
        src={"/static/img/home/home3.png"}
        alt="Homem pensativo utilizando um notebook"
      >
        <div style={{ marginBottom: "0px" }}>
          <Text size="rg" color="primary">
            <b>SEGURANÇA</b>
          </Text>
        </div>
        <div style={{ marginBottom: "30px", maxWidth: "450px" }}>
          <Text size="xl" color="regular">
            <b>O braço digital e parceiro do Banco do Brasil</b>
          </Text>
        </div>
        <Text size="rg" color="regular">
          Nós somos correspondentes autorizados do BB. Nossa função é
          simplificar a forma de contratação dos produtos do banco, de forma
          100% digital e para todos.
        </Text>
      </ContentAndImage>
      <MainContainer color="white" src={"/static/img/home/home3.png"}>
        <div style={{ marginBottom: "0px" }}>
          <Text size="rg" color="primary">
            <b>CONFIANÇA</b>
          </Text>
        </div>
        <div style={{ marginBottom: "30px" }}>
          <Text size="xl" color="regular">
            <b>Parceiros Coban Mais Digital</b>
          </Text>
        </div>
        <Text size="rg" color="regular">
          Confira nossos parceiros
        </Text>
        <div style={{ display: "block", width: "100%" }}>
          <BusinessPartners>
            <div>
              <a href="https://www.bb.com.br/">
                <img
                  src="/static/img/business/1.png"
                  style={{ display: "flex", flex: "1", width: "100%" }}
                />
              </a>
            </div>
            <div>
              <a href="https://serasa.cobanmaisdigital.com.br">
                <img
                  src="/static/img/business/2.png"
                  style={{ display: "flex", flex: "1", width: "100%" }}
                />
              </a>
            </div>
            <div>
              <a href="https://ciclic.cobanmaisdigital.com.br">
                <img
                  src="/static/img/business/3.png"
                  style={{ display: "flex", flex: "1", width: "100%" }}
                />
              </a>
            </div>
          </BusinessPartners>
          <BusinessPartners style={{ marginBottom: "30px" }}>
            <div>
              <a href="https://idinheiro.cobanmaisdigital.com.br">
                <img
                  src="/static/img/business/4.png"
                  style={{ display: "flex", flex: "1", width: "100%" }}
                />
              </a>
            </div>
            <div>
              <a href="https://melhorplano.cobanmaisdigital.com.br">
                <img
                  src="/static/img/business/5.png"
                  style={{ display: "flex", flex: "1", width: "100%" }}
                />
              </a>
            </div>
            <div>
              <a href="https://mobills.cobanmaisdigital.com.br">
                <img
                  src="/static/img/business/6.jpg"
                  style={{ display: "flex", flex: "1", width: "100%" }}
                />
              </a>
            </div>
          </BusinessPartners>
        </div>
      </MainContainer>
    </>
  );

  return isMainPortal? (
    <div
      id={"descricao-imagem"}
      style={{ scrollMarginTop: "70px", overflow: "hidden" }}
    >
      { mainPortalContent }
    </div>
  ) : null;
};

export default BlockGenerator;
