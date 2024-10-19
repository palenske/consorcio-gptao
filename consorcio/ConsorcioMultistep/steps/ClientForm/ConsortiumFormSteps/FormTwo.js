import {
  useSimpleForm,
  InputMask,
  InputText,
  InputCurrency,
  InputAutocomplete,
  Text,
} from "@labsmaisdigital/dsmaisevo";
import { date } from "../../lib/masks";
import { Col, Row } from "antd";
import { FormTwoSchema as getSchema } from "./ConsortiumForm.validations";

import {
  CardForm,
  ExternalStepContainer,
  Spacer,
  StyledButton as Button,
} from "../../../../Consorcio.style";
import cities from "../../../../../data/cities";
import emissores from "../../../../../data/emissores";
import { updateAttempt } from "../../integrations/requests/attempts";

const FormTwo = ({ nextStep, backStep, setRequestState }) => {
  const { data, incrementData } = useConsortium();
  const { formCommon, handleSubmit, DebugArea } = useSimpleForm({
    defaultValues: {
      codigoNacionalidade: 1,
      ...data?.clientData?.stepTwo,
    },
    validation: getSchema(),
  });

  const onFormSubmit = async formData => {
    incrementData({
      clientData: {
        stepTwo: formData,
      },
    });
    await updateAttempt(setRequestState, {
      currentStep: "DADOS_USUARIO",
      nextStep: "IDWALL",
      metadata: { clientInputData: formData },
    });
    nextStep();
  };

  return (
    <ExternalStepContainer>
      <center>
        <Text color="primary" size="md">
          Preencha os <b>dados</b>
        </Text>
      </center>
      <CardForm
        title={
          <Text weight="bold" color="primary">
            Dados pessoais
          </Text>
        }
      >
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <Row gutter={32}>
            <Col xs={24} md={24} lg={12}>
              <InputAutocomplete
                id="tipoDocumento"
                label={<Text color="primary">Documento escolhido *</Text>}
                placeholder="Escolha o seu tipo de documento"
                options={[
                  { value: 20, label: "CARTEIRA DE IDENTIDADE (RG)" },
                  { value: 31, label: "CARTEIRA NACIONAL HABILITAÇÃO (CNH)" },
                ]}
                {...formCommon}
              />
            </Col>
            <Col xs={24} md={24} lg={12}>
              <InputText
                inputMode="numeric"
                id="numeroDocumento"
                label={<Text color="primary">Número do documento *</Text>}
                placeholder="Qual o número do documento?"
                {...formCommon}
              />
            </Col>
            <Col xs={24} md={24} lg={12}>
              <InputAutocomplete
                id="nomeOrgaoEmitente"
                label={<Text color="primary">Orgão Emissor *</Text>}
                placeholder="Qual o órgão emissor do seu documento?"
                options={emissores}
                {...formCommon}
              />
            </Col>
            <Col xs={24} md={24} lg={12}>
              <InputAutocomplete
                id="cidadeNatal"
                label={<Text color="primary">Naturalidade (Cidade) *</Text>}
                placeholder="Cidade onde você nasceu"
                options={cities}
                {...formCommon}
              />
            </Col>
            <Col xs={24} md={24} lg={12}>
              <InputMask
                id="dataNascimento"
                label={<Text color="primary">Data de nascimento *</Text>}
                placeholder="Qual é a sua data de nascimento?"
                mask={date}
                {...formCommon}
              />
            </Col>
            <Col xs={24} md={24} lg={12}>
              <InputAutocomplete
                id="situacaoCivil"
                label={<Text color="primary">Situação civil *</Text>}
                placeholder="Selecione o seu situação civil"
                options={[
                  { value: "S", label: "Solteiro" },
                  { value: "C", label: "Casado" },
                  { value: "V", label: "Viúvo" },
                  { value: "D", label: "Divorciado" },
                  { value: "O", label: "Outro" },
                ]}
                {...formCommon}
              />
            </Col>
            <Col xs={24} md={24} lg={12}>
              <InputAutocomplete
                id="codigoSexo"
                label={<Text color="primary">Sexo *</Text>}
                placeholder="Selecione o seu sexo"
                options={[
                  { value: "M", label: "Masculino" },
                  { value: "F", label: "Feminino" },
                ]}
                {...formCommon}
              />
            </Col>
            <Col xs={24} md={24} lg={12}>
              <InputAutocomplete
                id="codigoNacionalidade"
                label={<Text color="primary">Nacionalidade *</Text>}
                placeholder="Qual seu país de origem?"
                options={[
                  { value: 1, label: "BRASILEIRO(A)" },
                  { value: 2, label: "ESTRANGEIRO VISTO PERMANENTE " },
                  { value: 3, label: "ESTRANGEIRO VISTO TEMPORARIO " },
                  { value: 4, label: "NATURALIZADO(A) " },
                  {
                    value: 5,
                    label: "PORTUGUÊS COM RESIDÊNCIA PERMANENTE NO PAÍS",
                  },
                ]}
                {...formCommon}
              />
            </Col>
            <Col xs={24} md={24} lg={12}>
              <InputCurrency
                id="valorRendaMensal"
                label={<Text color="primary">Valor da Renda Mensal *</Text>}
                placeholder="Qual a sua renda mensal (R$)?"
                {...formCommon}
              />
            </Col>
            <Col xs={24} md={24} lg={12}>
              <InputText
                id="ocupacao"
                label={<Text color="primary">Ocupação *</Text>}
                placeholder="Qual o nome da sua profissão?"
                {...formCommon}
              />
            </Col>
            <Col xs={24} md={24} lg={12}>
              <InputAutocomplete
                id="codigoInstrucao"
                label={
                  <Text color="primary">Qual seu nível de escolaridade? *</Text>
                }
                placeholder="Qual seu nível de escolaridade?"
                options={[
                  { value: 1, label: "ANALFABETO" },
                  { value: 2, label: "PRIMEIRO GRAU" },
                  { value: 3, label: "SEGUNDO GRAU" },
                  { value: 4, label: "SUPERIOR INCOMPLETO" },
                  { value: 5, label: "SUPERIOR COMPLETO" },
                  { value: 6, label: "POS GRADUADO" },
                  { value: 7, label: "MESTRADO" },
                  { value: 8, label: "DOUTORADO" },
                  { value: 9, label: "SUPERIOR EM ANDAMENTO" },
                ]}
                {...formCommon}
              />
            </Col>
          </Row>
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
                htmlType="submit"
                iconPosition="right"
                icon="angle-right"
                text="Avançar"
              />
            </Col>
          </Row>
        </form>
      </CardForm>
    </ExternalStepContainer>
  );
};

export default FormTwo;
