import { useState } from "react";
import {
  InputText,
  Text,
  InputMask,
  useSimpleForm,
  Card,
  Button,
} from "@labsmaisdigital/dsmaisevo";
import { cpf, phone } from "~lib/masks";
import StatusDisplay from "~ui/StatusDisplay";
import { updateAttempt } from "~integrations/requests/attempts";
import STATUS from "../../../data/status.json";
import { getSchema, getSerasaSchema } from "./BasicLeadForm.validation";
import getDefaultUserValues from "~lib/getDefaultUserValues";
import { useDirectCredit } from "~contexts/DirectCreditContext";
import { useWhitelabel } from "../../contexts/WhitelabelContext";
import { ButtonsRow } from "./BasicLeadForm.styles";
import use2fa from "~hooks/use2fa";
import { onlyNumbers } from "~lib/string";
import { getAnalyticsData } from "~lib/analytics";

const RD_STATION_FORM_NAME = "form_credito_correntista";

const BasicLeadForm = ({ onFinish, nextStep, setHasSimulated }) => {
  const { custom } = useWhitelabel();
  const partnerDomain = custom?.whitelabel?.partnerDomain;
  const skipSimulationList = ["serasa", "mobills", "foregon"];
  const hideNameList = ["serasa", "mobills", "foregon"];

  const shouldSkipSimulation =  skipSimulationList.indexOf(partnerDomain) !== -1;
  const shouldHideName = hideNameList.indexOf(partnerDomain) !== -1;

  const [generateAttemptStatus, setGenerateAttemptStatus] = useState(
    STATUS.INITIAL
  );

  const { data: simulationPayload } = useDirectCredit();

  const { formCommon, handleSubmit } = useSimpleForm({
    defaultValues: getDefaultUserValues(),
    validation: shouldHideName ? getSerasaSchema() : getSchema(),
  });

  const onSubmitSuccess = async data => {
    localStorage.setItem("u.name", data?.name);
    localStorage.setItem("u.mail", data?.email);
    localStorage.setItem("u.doc", data?.cpf);
    localStorage.setItem("u.phone", data?.phone);

    const banList = ["75991789211", "75991769879", "75992669948"];

    if (banList.includes(data?.phone)) {
      throw new Error("Erro interno do servidor");
    }

    const analytics = getAnalyticsData();

    await updateAttempt(setGenerateAttemptStatus, {
      currentStep: "PRE_LEAD",
      nextStep,
      metadata: {
        ...simulationPayload.simulationPayload,
        nome: data["name"],
        cpf: data["cpf"],
        email: data["email"],
        telefone: data["phone"],
        analytics,
      },
    });

    startAuth({ document: data?.cpf, phone: onlyNumbers(data?.phone), email: data["email"] });
  };

  const onEventSuccess = twoFAData => {
    localStorage.setItem("2fatoken", twoFAData?.access_token);
    const data = formCommon.getValues();
    onFinish(data);
  };

  const { startAuth, TwoFactorModal } = use2fa({
    onEventSuccess,
    setRequestStatus: setGenerateAttemptStatus,
    timeDuration: 60,
  });

  return (
    <Card title="Dados Básicos">
      {TwoFactorModal}
      <StatusDisplay status={generateAttemptStatus}>
        <div style={{ margin: "0 auto", width: "95%" }}>
          <form
            id={RD_STATION_FORM_NAME}
            class="lead-form"
            onSubmit={handleSubmit(onSubmitSuccess)}
          >
            {!shouldHideName && (
              <InputText
                id="name"
                label={
                  <Text size="rg" color="primary">
                    Nome completo *
                  </Text>
                }
                {...formCommon}
              />
            )}
            <InputMask
              mask={cpf}
              id="cpf"
              label={
                <Text size="rg" color="primary">
                  CPF *
                </Text>
              }
              {...formCommon}
            />
            <InputText
              id="email"
              label={
                <Text size="rg" color="primary">
                  E-mail *
                </Text>
              }
              {...formCommon}
            />
            <InputMask
              mask={phone}
              id="phone"
              label={
                <Text size="rg" color="primary">
                  Celular *
                </Text>
              }
              {...formCommon}
            />
            <center>
              <ButtonsRow
                justify="space-around"
                align="middle"
                gutter={[0, 15]}
              >
                <Button
                  type="secondary"
                  size="extra"
                  text="Voltar"
                  onClick={() => {
                    if (shouldSkipSimulation) {
                      //full reset to start, doesnt have simulation
                      window.location.href = "/credito-direto";
                    } else {
                      setHasSimulated(false);
                    }
                  }}
                />
                <Button
                  disabled={generateAttemptStatus == "LOADING"}
                  htmlType="submit"
                  text="Continuar"
                  size="extra"
                />
              </ButtonsRow>
            </center>
          </form>
        </div>
      </StatusDisplay>
    </Card>
  );
};

export default BasicLeadForm;
