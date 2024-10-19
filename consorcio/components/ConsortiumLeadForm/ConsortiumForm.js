import { useState } from "react";
import {
  useSimpleForm,
  InputCheckbox,
  InputText,
  InputMask,
  Button,
  Text,
} from "@labsmaisdigital/dsmaisevo";
import { cpf, phone } from "../../lib/masks";

import { getSchema } from "./ConsortiumLeadForm.validation";
import { useWhitelabel } from "../../../contexts/WhitelabelContext";
import { onlyNumbers } from "../../lib/string";
import { updateAttempt } from "../../integrations/requests/attempts";
import { hasError } from "../../lib/requests";
import { getAnalyticsData } from "../../lib/analytics";
import getCreditLine from "../../api/getCreditLine";

import { isAccountHolder } from "../../integrations/requests/cdc";
import { sendDetachedSolicitation } from "../../integrations/requests/detachedSolicitation";
import STATUS from "../../../data/status.json";

import { toast } from "react-toastify";

const RD_STATION_FORM_NAME = "form_consorcio";

const ConsortiumForm = ({
  setIsOnFlow,
  setLocator,
  setIsSolicitationSuccess,
  setRequestStatus,
}) => {
  //FLUXO DE SOLICITAÇÕES TEMPORÁRIO
  const [currentSection, setSection] = useState();
  const [solicitationStatus, setSolicitationStatus] = useState(STATUS.INITIAL);

  const { custom } = useWhitelabel();
  const { incrementData } = useConsortium();
  const { formCommon, handleSubmit } = useSimpleForm({
    validation: getSchema(),
    defaultValues: {
      cobanTerms: true,
      BBTerms: true,
    },
  });

  const watched = formCommon.watch();

  const verifyLeadCreditLine = async () => {
    await updateAttempt(setRequestStatus, {
      currentStep: "DADOS_BASICOS",
      nextStep: "ANALISE_CREDITO",
    });
    const leadForm = formCommon.getValues();
    const leadCreditLine = await getCreditLine(setRequestStatus, leadForm.cpf);
    incrementData({ leadCreditLine, leadForm });
  };

  const onEventSuccess = async () => {
    //
    // FLUXO DE SOLICITAÇÕES TEMPORÁRIO
    //
    let { data } = await isAccountHolder(setSolicitationStatus, watched?.cpf);

    if (typeof data?.result === "boolean") {
      if (data?.result) {
        const detachedResponse = await sendDetachedSolicitation(
          setSolicitationStatus,
          {
            ...watched,
            partner: custom?.whitelabel?.partnerDomain,
            service: "CONSORCIO",
          }
        );

        if (hasError(detachedResponse)) {
          toast.warning("Desculpe, ocorreu um erro ao realizar a solicitação.");
        } else {
          setSection("SOLICITACAO_ABERTA");
        }
      } else {
        setSection("NAO_CORRENTISTA");
      }
    }

    //
    // FLUXO 100% DIGITAL ONLINE
    //
    // await verifyLeadCreditLine();
    // setIsOnFlow(true);
  };

  const { TwoFactorModal, startAuth } = use2fa({
    onEventSuccess,
  });

  const onSubmitSuccess = async formInput => {
    localStorage.setItem("u.mail", formInput?.email);
    localStorage.setItem("u.name", formInput?.name);
    localStorage.setItem("u.doc", formInput?.cpf);
    localStorage.setItem("u.phone", formInput?.phone);

    const analytics = getAnalyticsData();

    await updateAttempt(setRequestStatus, {
      currentStep: "PRE_LEAD",
      nextStep: "DADOS_BASICOS",
      metadata: {
        cpf: formInput?.cpf,
        email: formInput?.email,
        nome: formInput?.name,
        telefone: formInput?.phone,
        analytics,
      },
    });
    // send info to RD Station
    // if (window.location.href.indexOf("cobanmaisdigital.com.br") !== -1) {
    //   function getRefQueryParam(name) {
    //     name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    //     var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    //     var results = regex.exec(location.search);
    //     return results === null
    //       ? ""
    //       : decodeURIComponent(results[1].replace(/\+/g, " "));
    //   }

    //   await createRDStationLead(() => {}, {
    //     email: formInput?.email,
    //     name: formInput?.name,
    //     phone: formInput?.phone,
    //     conversion_identifier: RD_STATION_FORM_NAME,
    //     cf_pf_ou_pj: "Para mim",
    //     cf_cpf: formInput?.cpf,
    //     cf_parceiro: custom?.whitelabel?.partnerDomain,
    //     traffic_source: getRefQueryParam("utm_source") || document.referrer,
    //     traffic_medium: getRefQueryParam("utm_medium"),
    //     traffic_campaign: getRefQueryParam("utm_campaign"),
    //     traffic_value: getRefQueryParam("utm_content"),
    //   });
    // }

    startAuth({
      document: onlyNumbers(formInput?.cpf),
      phone: formInput?.phone,
      email: formInput?.email,
    });
  };

  return (
    <StatusDisplay status={solicitationStatus}>
      {TwoFactorModal}
      {(() => {
        if (currentSection === "NAO_CORRENTISTA") {
          return (
            <center>
              <Text>
                O consórcio banco do brasil é disponível apenas para
                correntistas.
                <br />
                <br />
                Deseja abrir uma solicitação para abertura de conta corrente
                Banco do Brasil?
                <br />
                <br />
                <Button
                  size="extra"
                  text="Gostaria de abrir uma conta"
                  onClick={async () => {
                    const detachedResponse = await sendDetachedSolicitation(
                      setSolicitationStatus,
                      {
                        ...watched,
                        partner: custom?.whitelabel?.partnerDomain,
                        service: "BB_CRIACAO_CONTA",
                      }
                    );

                    if (hasError(detachedResponse)) {
                      toast.warning(
                        "Desculpe, ocorreu um erro ao realizar a solicitação."
                      );
                    } else {
                      setSection("SOLICITACAO_ABERTA");
                    }
                  }}
                />
              </Text>
            </center>
          );
        }

        if (currentSection === "SOLICITACAO_ABERTA") {
          return (
            <center>
              <div
                style={{
                  borderRadius: "100%",
                  backgroundColor: "green",
                  width: "100px",
                  marginBottom: "20px",
                  fontSize: "60px",
                  fontWeight: "bolder",
                  color: "white",
                }}
              >
                ✓
              </div>
              <Text>
                Uma solicitação foi enviada ao nosso time de analistas.
                Entraremos em contato para prosseguir com sua solicitação.
              </Text>
            </center>
          );
        }

        return (
          <form
            id={RD_STATION_FORM_NAME}
            onSubmit={handleSubmit(onSubmitSuccess)}
            style={{ color: "var(--primary)" }}
          >
            <InputText
              name="name"
              id="name"
              label="NOME COMPLETO *"
              placeholder="Qual é o seu nome completo?"
              {...formCommon}
            />
            <InputMask
              mask={cpf}
              id="cpf"
              label="CPF *"
              placeholder="Qual o seu CPF?"
              {...formCommon}
            />
            <InputText
              id="email"
              label="E-MAIL *"
              placeholder="Qual o seu e-mail?"
              {...formCommon}
            />
            <InputMask
              mask={phone}
              name="phone"
              id="phone"
              label="CELULAR *"
              placeholder="Qual é o seu número do celular?"
              {...formCommon}
            />
            <center>
              <InputCheckbox
                label={
                  <Text size="sm">
                    Li e concordo com todos os{" "}
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.cobanmaisdigital.com.br/politica-privacidade"
                    >
                      termos de politica de privacidade
                    </a>
                    &nbsp;e com os&nbsp;
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.cobanmaisdigital.com.br/termos-de-uso"
                    >
                      termos de uso
                    </a>
                    &nbsp; da Coban Mais Digital.
                  </Text>
                }
                id="cobanTerms"
                {...formCommon}
              />
              <InputCheckbox
                label={
                  <Text size="sm">
                    Li e concordo com todos os{" "}
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.bb.com.br/docs/pub/siteEsp/consor/LGPD.pdf"
                    >
                      termos de politica de privacidade
                    </a>
                    &nbsp; da BB Administradora de Consórcios S.A do
                    Conglomerado Financeiro Banco do Brasil.
                  </Text>
                }
                id="BBTerms"
                {...formCommon}
              />
              {watched.cobanTerms && watched.BBTerms ? (
                <div style={{ margin: "10px" }}>
                  <Button
                    size="extra"
                    htmlType="submit"
                    text="Enviar solicitação"
                  />
                </div>
              ) : (
                <div
                  style={{
                    color: "#ee9b00",
                    marginTop: "30px",
                    fontWeight: "bold",
                  }}
                >
                  Atenção! É necessário concordar com todos os termos antes de
                  continuar.
                </div>
              )}
            </center>
          </form>
        );
      })()}
    </StatusDisplay>
  );
};

export default ConsortiumForm;
