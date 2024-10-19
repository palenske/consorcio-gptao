import { useState, useEffect } from "react";
import {
  useSimpleForm,
  Text,
  InputText,
  InputMask,
  InputAutocomplete,
} from "@labsmaisdigital/dsmaisevo";
import axios from "axios";
import { Col, Row } from "antd";
import { onlyNumbers } from "../../lib/string";
import { cep } from "../../lib/masks";
import { FormOneSchema as getSchema } from "./ConsortiumForm.validations";

import {
  ExternalStepContainer,
  CardForm,
  Spacer,
  StyledButton as Button,
} from "../../../../Consorcio.style";
import { updateAttempt } from "../../integrations/requests/attempts";

const FormOne = ({ backStep, nextStep, setRequestState }) => {
  const [isReady, setReady] = useState(false);
  const { data, incrementData } = useConsortium();
  const { formCommon, handleSubmit, DebugArea } = useSimpleForm({
    defaultValues: { tipoEndereco: "R", ...data?.clientData?.stepOne },
    validation: getSchema(),
  });

  const watchedCep = formCommon.watch("cep");

  const refreshCep = async () => {
    try {
      const clearedCep = onlyNumbers(watchedCep);

      if (clearedCep.length === 8) {
        const { data } = await axios.get(
          `https://viacep.com.br/ws/${watchedCep}/json`
        );

        formCommon.setValue("endereco", data?.logradouro);
        formCommon.setValue("bairro", data?.bairro);
        formCommon.setValue("cidade", data?.localidade);
        formCommon.setValue("uf", data?.uf);
        formCommon.setValue("complementoEndereco", data?.complemento);

        setReady(true);
      }
    } catch (error) {
      console.info(error);
    }
  };

  useEffect(() => {
    refreshCep();
  }, [watchedCep]);

  const onFormSubmit = async formData => {
    incrementData({
      clientData: {
        stepOne: formData,
      },
    });
    await updateAttempt(setRequestState, {
      currentStep: "ENDERECO_USUARIO",
      nextStep: "DADOS_USUARIO",
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
        <form autoComplete="off" onSubmit={handleSubmit(onFormSubmit)}>
          <Row gutter={32}>
            <Col xs={24} md={24} lg={12}>
              <InputMask
                mask={cep}
                id="cep"
                label={<Text color="primary">CEP *</Text>}
                placeholder="Qual é o seu CEP?"
                {...formCommon}
              />
            </Col>
            <Col xs={24} md={24} lg={12}>
              <InputAutocomplete
                id="tipoEndereco"
                label={<Text color="primary">Tipo do endereço *</Text>}
                placeholder="Selecione o tipo"
                options={[
                  { value: "R", label: "Residencial" },
                  { value: "C", label: "Comercial " },
                  { value: "O", label: "Outros" },
                ]}
                {...formCommon}
              />
            </Col>
          </Row>
          <Row gutter={32} style={!isReady ? { display: "none" } : {}}>
            <Col xs={24} md={24} lg={12}>
              <InputText
                id="endereco"
                placeholder="Qual o seu endereço?"
                label={<Text color="primary">Endereço *</Text>}
                {...formCommon}
              />
            </Col>
            <Col xs={24} md={24} lg={12}>
              <InputText
                id="bairro"
                placeholder="Qual é o seu bairro?"
                label={<Text color="primary">Bairro *</Text>}
                {...formCommon}
              />
            </Col>
            <Col xs={24} md={24} lg={12}>
              <InputText
                id="cidade"
                placeholder="Qual a sua cidade?"
                label={<Text color="primary">Cidade *</Text>}
                {...formCommon}
              />
            </Col>
            <Col xs={24} md={24} lg={12}>
              <InputText
                id="complementoEndereco"
                placeholder="ex: Casa, Apartamento, Condomínio"
                label={<Text color="primary">Complemento</Text>}
                {...formCommon}
              />
            </Col>
            <Col xs={24} md={24} lg={12}>
              <InputText
                id="uf"
                placeholder="UF"
                label={<Text color="primary">UF *</Text>}
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
                disabled={!isReady}
              />
            </Col>
          </Row>
        </form>
      </CardForm>
    </ExternalStepContainer>
  );
};

export default FormOne;
