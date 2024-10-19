
import { Card, Col, Row, Table } from "antd";
import { Text } from "@labsmaisdigital/dsmaisevo";
import { Spacer, StyledButton as Button } from "../../../../Consorcio.style";
import { consortiumEnd } from "../../integrations/requests/consortium";
import { onlyNumbers } from "../../lib/string";
import { hasError } from "../../lib/requests";
import { showError, showSuccess } from "../../lib/toast";
import { useMediaQuery } from "react-responsive";
import { updateAttempt } from "../../integrations/requests/attempts";

const typesOfInfo = {
  atividadeEconomica: "string",
  bairro: "string",
  cep: "string-cep",
  cidade: "string",
  codigoAgencia: "string",
  codigoSexo: "sex",
  dataNascimento: "date",
  ddd: "string",
  email: "string",
  endereco: "string",
  name: "string",
  naturalidade: "string",
  nome: "string",
  nomeEmpregador: "string",
  nomeOrgaoEmitente: "string",
  numeroContaCorrente: "string",
  numeroDocumento: "string",
  numeroInscricaoCliente: "string",
  ocupacao: "string",
  quantidadeMesesPrazo: "times",
  phone: "string",
  uf: "string",
  valorBem: "brl",
  valorParcela: "brl",
};

const formatedKeys = {
  cep: "CEP",
  codigoAgencia: "Agência",
  codigoSexo: "Sexo",
  dataNascimento: "Data de nascimento",
  endereco: "Endereço",
  nomeOrgaoEmitente: "Orgão emitente",
  numeroContaCorrente: "Número da conta",
  numeroDocumento: "Número do documento",
  numeroInscricaoCliente: "CPF",
  ocupacao: "Ocupação",
  quantidadeMesesPrazo: "Número de parcelas escolhidas",
  uf: "UF",
  valorBem: "Valor do bem",
  valorParcela: "Valor da parcela",
  phone: "Telefone",
  name: "Nome",
  email: "E-mail",
};

const formatRevisionData = obj => {
  switch (typesOfInfo[obj.name]) {
    case "percentual":
      return (
        <Text size="rg" weight="bold">
          {obj.value + " %"}
        </Text>
      );
    case "string":
      return (
        <Text size="rg" weight="bold">
          {obj.value}
        </Text>
      );
    case "string-cep":
      return (
        <Text size="rg" weight="bold">
          {obj.value.replace(/(\d{5})(\d{3})/, "$1-$2")}
        </Text>
      );
    case "date":
      return (
        <Text size="rg" weight="bold">
          {obj.value.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3")}
        </Text>
      );
    case "times":
      return (
        <Text size="rg" weight="bold">
          {obj.value + " vezes"}
        </Text>
      );
    case "sex":
      return (
        <Text size="rg" weight="bold">
          {obj.value == "F" ? "Feminino" : "Masculino"}
        </Text>
      );
    case "brl":
      return (
        <Text size="rg" weight="bold">
          {obj.value.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </Text>
      );
    default:
      return <Text size="rg">{typesOfInfo[obj.name] + obj.value}</Text>;
  }
};

const scrollToTop = () => {
  window.scrollTo({
    behavior: "smooth",
    top: 150,
  });
};

const StepTwo = ({ backStep, nextStep, setRequestState }) => {
  const { data } = useConsortium();
  const isMobile = useMediaQuery({ maxWidth: "500px" });
  const showInfo = JSON.parse(
    JSON.stringify({
      ...data.simulation.stepTwo,
      ...data.simulation.stepThree,
      ...data.simulation.stepThree.grupo,
      ...data.clientData.stepOne,
      ...data.clientData.stepTwo,
      ...data.hiringData.stepOne,
      ...data.bankData,
    })
  );

  const buildPayload = allInputInfo => {
    const { clientData, leadForm, simulation, hiringData } = allInputInfo;
    const isCompany = clientData.type === "pessoa-juridica";
    const moneyAttribute = isCompany
      ? "valorFaturamentoMensal"
      : "valorRendaMensal";
    const newShape = JSON.parse(
      JSON.stringify({
        dadosCliente: {
          ...clientData?.stepOne,
          codigoNacionalidade: 1,
          tipoDocumento: clientData?.stepTwo?.tipoDocumento,
          numeroDocumento: clientData?.stepTwo?.numeroDocumento,
          nomeOrgaoEmitente: clientData?.stepTwo?.nomeOrgaoEmitente,
          naturalidade: clientData?.stepTwo?.cidadeNatal,
          dataNascimento: clientData?.stepTwo?.dataNascimento,
          estadoCivil: clientData?.stepTwo?.situacaoCivil,
          codigoSexo: clientData?.stepTwo?.codigoSexo,
          valorRendaMensal: clientData?.stepTwo?.valorRendaMensal,
          ocupacao: clientData?.stepTwo?.ocupacao,
          codigoInstrucao: clientData?.stepTwo?.codigoInstrucao,
          tipoInscricaoCliente: isCompany ? "J" : "F",
          dataNascimento: clientData?.stepTwo?.dataNascimento?.replace(
            /(\d{2})(\d{2})(\d{4})/,
            "$1.$2.$3"
          ),
          [moneyAttribute]: clientData?.stepTwo?.valorRendaMensal,
          cep: Number(clientData?.stepOne?.cep),
          ddd: Number(onlyNumbers(leadForm?.phone).slice(0, 2)),
          telefone: Number(onlyNumbers(leadForm?.phone).slice(2)),
          numeroInscricaoCliente: Number(onlyNumbers(leadForm?.cpf)),
          email: leadForm?.email,
          codigoAgencia: Number(hiringData?.stepOne?.codigoAgencia),
          numeroContaCorrente: Number(hiringData?.stepOne?.numeroContaCorrente),
        },
        dadosConsorcio: {
          tipoGrupo: simulation?.stepTwo?.codigoGrupo,
          codigoBem: simulation?.stepTwo?.codigoBem,
          codigoProdutor: simulation?.stepTwo?.codigoProdutor,
          convenio: simulation?.stepThree?.grupo?.convenio,
          codigoGrupo: simulation?.stepThree?.grupo?.codigoGrupo,
          planoConsorcio: simulation?.stepThree?.grupo?.planoConsorcio,
          valorBem: simulation?.stepThree?.grupo?.valorBem,
          formaPagamento: 1,
        },
      })
    );

    return newShape;
  };

  const onSubmit = async () => {
    scrollToTop();
    const payload = buildPayload(data);
    const response = await consortiumEnd(setRequestState, payload);

    if (hasError(response)) {
      showError(
        response?.response?.data?.friendlyMessage ??
          "Ocorreu um erro inesperado ao comunicar com nosso servidor."
      );
      await updateAttempt(setRequestState, {
        currentStep: "REVISAO_CONTRATO",
        nextStep: "ERRO_CONTRATO",
        metadata: { hiringData: response },
      });
    } else {
      if (response?.data?.textoRetornoProcessamento) {
        showSuccess(response?.data?.textoRetornoProcessamento);
      }
      await updateAttempt(setRequestState, {
        currentStep: "REVISAO_CONTRATO",
        nextStep: "CONCLUIDO",
        metadata: { hiringData: response },
      });
      nextStep();
    }
  };

  return (
    <Card
      bodyStyle={{ padding: isMobile && "inherit 0" }}
      style={{ marginBottom: "40px", maxWidth: "800px", margin: "auto" }}
      title={
        <Text
          color="var(--primary)"
          weight="bold"
          size={isMobile ? "md" : "lg"}
        >
          Revisão do consórcio
        </Text>
      }
    >
      <Table
        size="small"
        pagination={false}
        showHeader={false}
        columns={[
          {
            title: <Text weight="bolder">Descrição</Text>,
            dataIndex: "description",
            key: "description",
          },
          {
            title: <Text weight="bolder">Valor</Text>,
            dataIndex: "value",
            key: "value",
            align: "right",
          },
        ]}
        dataSource={Object.keys(showInfo)
          .filter(propertyName =>
            Object.keys(typesOfInfo).includes(propertyName)
          )
          .reduce(
            (prev, curr) => [
              ...prev,
              {
                name: curr,
                value: showInfo[curr],
              },
            ],
            []
          )
          .map((row, index) => {
            return {
              key: index,
              description: (
                <Text size="rg">
                  {formatedKeys[row.name] ||
                    row.name
                      .replace(/([A-Z])/g, " $1")
                      .replace(/^./, function (str) {
                        return str.toUpperCase();
                      })}
                </Text>
              ),
              value: formatRevisionData(row),
            };
          })}
      />
      <Spacer size="sm" />
      <Row justify="space-between" align="middle">
        <Col>
          <Button
            type="link"
            iconColor="var(--primary)"
            icon="angle-left"
            text="Voltar"
            onClick={() => backStep()}
          />
        </Col>
        <Col>
          <Button
            onClick={() => onSubmit()}
            iconPosition="right"
            icon="angle-right"
            text="Contratar"
          />
        </Col>
      </Row>
    </Card>
  );
};

export default StepTwo;
