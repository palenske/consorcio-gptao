import {
  useSimpleForm,
  Text,
  InputText,
  Button,
} from "@labsmaisdigital/dsmaisevo";
import { Col, Row } from "antd";
import { toast } from "react-toastify";

import { ExternalStepContainer, CardForm } from "../../../../Consorcio.style";
import { StepOneSchema as getSchema } from "./Hiring.validations";
import { updateAttempt } from "../../integrations/requests/attempts";

const StepOne = ({ nextStep, setRequestState }) => {
  const { data, incrementData } = useConsortium();
  const { formCommon, handleSubmit, DebugArea } = useSimpleForm({
    defaultValues: data?.hiringData?.stepOne,
    validation: getSchema(),
  });

  const onFormSubmit = async formData => {
    try {
      incrementData({ hiringData: { stepOne: formData } });
      await updateAttempt(setRequestState, {
        currentStep: "DADOS_BANCARIOS",
        nextStep: "REVISAO_CONTRATO",
        metadata: { hiringData: formData },
      });
      nextStep();
    } catch (err) {
      toast.warn(err.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <ExternalStepContainer>
      <CardForm
        title={
          <Text color="primary" size="md">
            Insira os seus dados bancários
          </Text>
        }
      >
        <form class="consortium-form" onSubmit={handleSubmit(onFormSubmit)}>
          <center>
            <div style={{ padding: "0 20px 20px 20px" }}>
              <Text color="black" size="lg">
                Insira sua agência e conta do <strong>Banco do Brasil</strong>
              </Text>
              <br />
              <Text color="black" size="lg">
                para incluir o <strong>débito em conta corrente</strong>
              </Text>
            </div>
          </center>
          <div style={{ margin: "0.5rem auto", width: "90%" }}>
            <Text color="gray" size="sm">
              1. Não inserir 0 à esquerda nos campos de Agência, Conta Corrente
              e CPF.
            </Text>
            <Text color="gray" size="sm" weight="light">
              &nbsp;&nbsp;Exemplo: Agência 00123 fica apenas <b>123</b>. Conta
              Corrente 000644 fica <b>644</b>.
            </Text>
            <br />
            <Text color="gray" size="sm">
              2. Inserir apenas números.
            </Text>
            <br />
            <Text color="gray" size="sm">
              3. Dígitos são opcionais.
            </Text>
          </div>
          <Row
            justify="center"
            style={{ margin: "20px auto" }}
            gutter={[0, 10]}
          >
            <Col xs={24} lg={12}>
              <Row justify="center" align="bottom" wrap={false}>
                <Col xs={14} lg={14}>
                  <InputText
                    inputMode="numeric"
                    id="codigoAgencia"
                    placeholder="Agência"
                    label={<Text color="primary">Agência *</Text>}
                    {...formCommon}
                  />
                </Col>
                <Col xs={7} lg={4}>
                  <InputText
                    inputMode="numeric"
                    id="not_used_info"
                    placeholder="Dígito"
                    {...formCommon}
                  />
                </Col>
              </Row>
            </Col>
            <Col xs={24} lg={12}>
              <Row justify="center" align="bottom" wrap={false}>
                <Col xs={14} lg={14}>
                  <InputText
                    inputMode="numeric"
                    id="numeroContaCorrente"
                    placeholder="Conta Corrente"
                    label={<Text color="primary">Conta Corrente *</Text>}
                    {...formCommon}
                  />
                </Col>
                <Col xs={7} lg={4}>
                  <InputText
                    inputMode="numeric"
                    id="not_used_info_2"
                    placeholder="Dígito"
                    {...formCommon}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <center>
            <Button htmlType="submit" text="Revisar Contratação" size="large" />
          </center>
        </form>
      </CardForm>
    </ExternalStepContainer>
  );
};

export default StepOne;
