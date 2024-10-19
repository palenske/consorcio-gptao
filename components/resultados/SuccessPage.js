import { Col, Collapse, Row } from "antd";
import { Text } from "@labsmaisdigital/dsmaisevo";
import { CDCCollapse, ConfirmationButton } from "~forms/CDC/CDC.style";
import { ReceiptPaper } from "~forms/CDC/components/ReceiptPaper";
import { useRouter } from "next/router";
import {
  ContactContent,
  DescriptionContainer,
  ExternalContainer,
  MainIcon,
  SuccessAlertContainer,
  TitleContainer,
} from "./resultPage.style";

export const SuccessPage = ({ contractResponse }) => {
  const router = useRouter();
  return (
    <ExternalContainer>
      <MainIcon color="#4aaa4e">
        <i class="las la-check-circle" />
      </MainIcon>
      <Text weight="bolder" color="primary" size="lg">
        Seu empréstimo foi concluído com sucesso!
      </Text>
      <TitleContainer>
        <Text>O dinheiro será depositado na sua conta do Banco do Brasil</Text>
      </TitleContainer>
      <DescriptionContainer>
        <CDCCollapse bordered={false}>
          <Collapse.Panel
            showArrow={false}
            key="terms"
            header={
              <center>
                <Text weight="bold">Recibo da contratação</Text>{" "}
                <i class={"las la-angle-down"} />
              </center>
            }
          >
            <ReceiptPaper content={contractResponse?.listaTextoComprovante} />
          </Collapse.Panel>
        </CDCCollapse>
      </DescriptionContainer>
      <SuccessAlertContainer>
        <Row wrap={false} gutter={5}>
          <Col span={3}>
            <center>
              <i
                style={{ fontSize: "28px", color: "#969696" }}
                class="las la-exclamation-circle"
              />
            </center>
          </Col>
          <Col span={20}>
            <Text weight="bolder">
              Atenção! Não solicitamos pix ou outras transferências através de
              nenhum canal ou correspondente.
            </Text>
            <br />
            <Text>
              Fique atento a esta prática e denúncie através dos nossos canais
              de atendimento oficiais encontrados abaixo.
            </Text>
          </Col>
        </Row>
        <ContactContent>
          <i class="lab la-whatsapp" />
          <Text weight="bolder">61 99647-9344</Text>
        </ContactContent>
      </SuccessAlertContainer>
      <ConfirmationButton
        fullWidth
        onClick={() => router.push("/")}
        text={
          <Text color="white" weight="bolder">
            FECHAR
          </Text>
        }
      />
    </ExternalContainer>
  );
};
