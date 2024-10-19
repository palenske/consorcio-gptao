import { useState } from "react";
import { Image } from "antd";


import { getSchema } from "./ConsortiumLeadForm.validation";

import { useWhitelabel } from "../../../components/contexts/WhitelabelContext";
import { consortiumCheckCreditLine } from "../../integrations/requests/consortium";
import { onlyNumbers } from "../../lib/string";
import { hasError } from "../../lib/requests";
import { showError } from "../../lib/toast";
import {
  generateAttempt,
  updateAttempt,
} from "~integrations/requests/attempts";
import { CardBB } from "../../Consorcio.style";
import { createRDStationLead } from "../../integrations/requests/rd-station";
import { Text, useSimpleForm, use2fa } from "@labsmaisdigital/dsmaisevo";
import { getAnalyticsData } from "../../lib/analytics";
import ConsortiumForm from "./ConsortiumForm";

const RD_STATION_FORM_NAME = "form_consorcio";

const Form = ({ setIsOnFlow, setLocator, setIsSolicitationSuccess }) => {
  const { custom } = useWhitelabel();
  const [agreeWithTerms, setAgreeWithTerms] = useState(true);
  const [agreeWithBBTerms, setAgreeWithBBTerms] = useState(true);
  const [requestStatus, setRequestStatus] = useState(STATUS.INITIAL);
  const { data, setData, incrementData } = useConsortium();
  const { formCommon, handleSubmit } = useSimpleForm({
    validation: getSchema(),
  });

  const onEventSuccess = async () => {
    const analytics = getAnalyticsData();
    const result = await generateAttempt(setRequestStatus, {
      service: "CONSORCIO",
      firstStep: "DADOS_BASICOS",
      metadata: {
        cpf: formCommon.getValues("cpf"),
        email: formCommon.getValues("email"),
        nome: formCommon.getValues("name"),
        telefone: formCommon.getValues("phone"),
        analytics,
      },
    });
    await setData({ ...data, leadForm: formCommon.getValues() });
    localStorage.setItem("cdc-locator", result.data.sessionId);
    await updateAttempt(setRequestStatus, {
      currentStep: "DADOS_BASICOS",
      nextStep: "ANALISE_CREDITO",
    });

    setIsOnFlow(true);
    await verifyLeadCreditLine();
  };

  const verifyLeadCreditLine = async () => {
    const leadForm = formCommon.getValues();
    const response = await consortiumCheckCreditLine(() => {}, {
      numeroInscricaoCliente: Number(onlyNumbers(leadForm.cpf)),
      valorParcelaInicio: 0,
      codigoTipoAnalise: 1,
      tipoInscricao: "F",
    });

    if (hasError(response)) {
      showError(response);
      await updateAttempt(setRequestStatus, {
        currentStep: "ANALISE_CREDITO",
        nextStep: "ERRO_ANALISE_CREDITO",
        metadata: response.data,
      });
      return false;
    } else {
      await incrementData({
        leadCreditInfo: response.data,
      });
      if (
        response.data?.valorParcelaAdmitido &&
        response.data?.valorParcelaAdmitido > 0
      ) {
        await updateAttempt(setRequestStatus, {
          currentStep: "ANALISE_CREDITO",
          nextStep: "BEM_REFERENCIA",
          metadata: response.data,
        });
      } else {
        await updateAttempt(setRequestStatus, {
          currentStep: "ANALISE_CREDITO",
          nextStep: "SEM_LINHA_CREDITO_CONSORCIO",
          metadata: response.data,
        });
      }
      return true;
    }
  };

  const { TwoFactorModal, startAuth } = use2fa({
    onEventSuccess,
  });

  const onSubmitSuccess = async formInput => {
    localStorage.setItem("u.mail", formInput?.email);
    localStorage.setItem("u.name", formInput?.name);
    localStorage.setItem("u.doc", formInput?.cpf);
    localStorage.setItem("u.phone", formInput?.phone);
    await setData({
      ...data,
      leadForm: formInput,
    });

    // send info to RD Station
    if (window.location.href.indexOf("cobanmaisdigital.com.br") !== -1) {
      function getRefQueryParam(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
        var results = regex.exec(location.search);
        return results === null
          ? ""
          : decodeURIComponent(results[1].replace(/\+/g, " "));
      }

      await createRDStationLead(() => {}, {
        email: formInput?.email,
        name: formInput?.name,
        phone: formInput?.phone,
        conversion_identifier: RD_STATION_FORM_NAME,
        cf_pf_ou_pj: "Para mim",
        cf_cpf: formInput?.cpf,
        cf_parceiro: custom?.whitelabel?.partnerDomain,
        traffic_source: getRefQueryParam("utm_source") || document.referrer,
        traffic_medium: getRefQueryParam("utm_medium"),
        traffic_campaign: getRefQueryParam("utm_campaign"),
        traffic_value: getRefQueryParam("utm_content"),
      });
    }

    startAuth({
      document: onlyNumbers(formInput?.cpf),
      phone: formInput?.phone,
      email: formInput?.email,
    });
  };

  return (
    <StatusDisplay status={requestStatus} spin>
      <ConsortiumForm
        setIsOnFlow={setIsOnFlow}
        setIsSolicitationSuccess={setIsSolicitationSuccess}
        setLocator={setLocator}
        setRequestStatus={setRequestStatus}
      />
    </StatusDisplay>
  );
};

export default function ConsortiumLeadForm({
  setIsOnFlow,
  setIsSolicitationSuccess,
  setLocator,
}) {
  return (
    <CardBB
      title={
        <>
          <div style={{ textAlign: "center" }}>
            <Text size="sm" weight="bold" color="#465eff">
              Representante autorizado
            </Text>
          </div>
          <Image
            preview={false}
            alt="logo BB consorcios"
            src={"/static/img/consorcio/logos/BBC_inline_blue.png"}
            width={"50%"}
          />
        </>
      }
      headStyle={{
        backgroundColor: "#FCFC30",
        textAlign: "center",
        padding: 0,
      }}
      style={{ margin: "0 auto 50px" }}
    >
      <Form
        setIsOnFlow={setIsOnFlow}
        setIsSolicitationSuccess={setIsSolicitationSuccess}
        setLocator={setLocator}
      />
    </CardBB>
  );
}
