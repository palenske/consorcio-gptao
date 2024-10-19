import {
  BENS,
  LINHACREDITO,
  LIST,
  PLANOS,
  PRAZOS,
  FINALIZAR,
} from "~integrations/endpoints/consortium";
import consortiuminstance from "~integrations/instances/main";
import { requestWithStatus } from "~lib/requests";
import { triggerCustomEvent } from "~lib/analytics";

export const consortiumCheckCreditLine = async (setStatus, params) => {
  return requestWithStatus(setStatus, consortiuminstance.post, [
    LINHACREDITO,
    params,
  ]);
};

export const consortiumList = async setStatus => {
  return requestWithStatus(setStatus, consortiuminstance.get, [LIST]);
};

export const consortiumBens = async (setStatus, params) => {
  return requestWithStatus(setStatus, consortiuminstance.get, [
    `${BENS}/${params.tipoGrupo}/${params.convenio}`,
  ]);
};

export const consortiumPrazo = async (setStatus, params) => {
  return requestWithStatus(setStatus, consortiuminstance.get, [
    `${PRAZOS}/${params.tipoGrupo}`,
  ]);
};

export const consortiumPlano = async (
  setStatus,
  {
    tipoGrupo,
    codigoProdutor,
    codigoBem,
    valorBem,
    mesPlanoInicio,
    mesPlanoFim,
    convenio,
  }
) => {
  return requestWithStatus(setStatus, consortiuminstance.get, [
    `${PLANOS}/${tipoGrupo}/${codigoProdutor}/${codigoBem}/${valorBem}/${mesPlanoInicio}/${mesPlanoFim}/${convenio}`,
  ]);
};

export const consortiumEnd = async (setStatus, params) => {
  triggerCustomEvent("consortium-last-step", params);
  return requestWithStatus(setStatus, consortiuminstance.post, [
    `${FINALIZAR}`,
    params,
  ]);
};
