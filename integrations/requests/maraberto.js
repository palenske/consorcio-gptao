import basic from "integrations/instances/basic";
import local from "integrations/instances/local";
import { requestWithStatus } from "~lib/requests";
import {
  SIMULACAO_NAO_CORRENTISTA,
  GET_LINHAS_CREDITO_MAR_ABERTO,
  UPLOAD_OPEN_SEA_FILES,
  NEW_OPEN_SEA_SOLICITATION,
} from "~integrations/endpoints";
import { triggerCustomEvent } from "~lib/analytics";

export const simulateOpenSea = async (
  setStatus,
  { valorCredito, quantidadeParcelas }
) => {
  return requestWithStatus(setStatus, basic.post, [
    SIMULACAO_NAO_CORRENTISTA,
    {
      linhaCredito: 2882,
      convenio: 1640,
      simulacao: {
        valorCredito,
        taxaJuros: 2.5,
        quantidadeParcelas,
        iofFinanciado: "S",
        dataVencimentoPrimeiraParcela: new Date()
          .toLocaleDateString()
          .replaceAll("/", "."),
      },
    },
  ]);
};

export const getCreditLines = async (setStatus, body) => {
  return requestWithStatus(setStatus, local.post, [
    GET_LINHAS_CREDITO_MAR_ABERTO,
    body,
  ]);
};

export const sendOpenSeaFiles = async (setStatus, form) => {
  const multiple = new FormData();
  multiple.append(`files`, form.declaracao[0].originFileObj, "declaracao");
  multiple.append(
    `files`,
    form.comprovante_resid[0].originFileObj,
    "comprovante_residencia"
  );
  multiple.append(
    `files`,
    form.comprovante_renda[0].originFileObj,
    "comprovante_renda"
  );

  return requestWithStatus(setStatus, basic.post, [
    UPLOAD_OPEN_SEA_FILES,
    multiple,
  ]);
};

export const newOpenseaSolicitation = async (setStatus, body) => {
  triggerCustomEvent("open-sea-solicitation", body);
  return requestWithStatus(setStatus, basic.post, [
    NEW_OPEN_SEA_SOLICITATION,
    body,
  ]);
};
