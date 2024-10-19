import {
  StyledContainerWithBackground,
  StyledCardContainer,
  StyledCardContent,
  ContentGray,
  IconRow,
} from "./SuccessPage.styles";
import { Text }  from "@labsmaisdigital/dsmaisevo";
import Contact from "~content/Contact";
import { Row } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import { useWhitelabel } from "~contexts/WhitelabelContext";

export const SuccessPage = ({ locator }) => {
  const { custom } = useWhitelabel();
  const isSerasa = custom?.whitelabel?.partnerDomain === "serasa";
  return (
    <StyledContainerWithBackground>
      <StyledCardContainer>
        <img src="/static/img/icons/pasta-lupa.png" style={{ marginTop: "1.5rem"}}/>
        <StyledCardContent>
          <Text size="xl" weight="bold" color="primary">
            Seus dados foram para análise
          </Text>
          <br />
          {locator && (
            <Row align="middle" justify="center" gutter={24}>
              <Text size="xl" weight="bolder">
                Protocolo: {locator}
              </Text>
            </Row>
          )}
          <br />
          <Text size="rg">
            Isso pode levar algum tempo. Após análise, entraremos em contato com
            você por Whatsapp para completar o seu pedido
          </Text>
          <br />
          <ContentGray>
            <ClockCircleOutlined
              color="#000"
              style={{ fontSize: "30px", marginRight: "20px" }}
            />
            <Text size="md">
              O prazo de atendimento é<br /> <b>de até 48 horas úteis.</b>
            </Text>
          </ContentGray>
          <br />
          <Text size="md">
            <i>Qualquer dúvida entre em contato por um dos nossos canais</i>
          </Text>
          <IconRow>
            <img
              width="30px"
              src="/static/img/redes-sociais/whatsapp.png"
              style={{ marginRight: "10px" }}
            />
            <Text size="md" color="primary">
              61 99849-0195
            </Text>
          </IconRow>
          <IconRow>
            <img
              width="30px"
              src="/static/img/doadin/mail_2fa.png"
              style={{ marginRight: "10px" }}
            />
            <Text size="rg" color="primary">
              contato@cobanmaisdigital.com.br
            </Text>
          </IconRow>
        </StyledCardContent>
      </StyledCardContainer>
      <br />
      <br />
      <Contact />
    </StyledContainerWithBackground>
  );
};

export default SuccessPage;
