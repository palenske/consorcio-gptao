import { requestWithStatus } from "~lib/requests";
import doadin from "~integrations/instances/doadin";
import basic from "integrations/instances/basic";
import {
  CONTRACT,
  DOADINPURSE,
  GET_PDF_LINK,
} from "~integrations/endpoints/doadin";
import { extractNumbers } from "~lib/formats";
import { onlyNumbers } from "~lib/string";
import { get, set } from "~lib/object";
import moment from "moment";
import { triggerCustomEvent } from "~lib/analytics";

export const getPersonInfo = async setStatus => {
  return await requestWithStatus(setStatus, basic.get, [`person/getme`]);
};

export const resgateSorteioTitulosContemplados = async (
  setStatus,
  { idSorteio, idTitulo, idTituloContemplado, cpf, contaCreditoTitular }
) => {
  return await requestWithStatus(setStatus, doadin.post, [
    `/solicitacoes/sorteios/${idSorteio}/titulos-contemplados/${idTituloContemplado}/pagamentos`,
    {
      idTitulo: Number(idTitulo),
      identificacaoCliente: cpf,
      contaCreditoTitular,
    },
  ]);
};

export const listTitulosDoadin = async setStatus => {
  return await requestWithStatus(setStatus, doadin.get, [
    "/titulos",
    {
      params: {
        idParceiro: 11387,
        idItemComercializacao: null,
      },
    },
  ]);
};

export const getPrizeDraw = async (setStatus, id) => {
  return await requestWithStatus(setStatus, doadin.get, [
    `/sorteios/titulos/${id}`,
  ]);
};

export const contract = async setStatus => {
  triggerCustomEvent("doadin-contract", {});
  return await requestWithStatus(setStatus, doadin.get, [
    `${CONTRACT}?idParceiro=11387&idCanal=11`,
  ]);
};

export const purchaseDoadin = async (setStatus, body) => {
  const finishFormData = JSON.parse(JSON.stringify(body));
  const _phone = get(finishFormData, "clienteTitular.telefone");
  const phoneNumber = onlyNumbers(_phone || "999999999");
  const ddd = phoneNumber.slice(0, 2);
  const numero = String(phoneNumber.slice(2));
  set(finishFormData, "clienteTitular.telefone", {
    idTipo: 1,
    ddd: Number(ddd),
    numero,
  });

  const extractNumbersFrom = ["clienteTitular.identificacaoCliente"];
  extractNumbers(extractNumbersFrom, finishFormData);

  finishFormData["confirmacaoTermoCessao"] = moment().format(
    "YYYY-MM-DD HH:mm:ss"
  );
  finishFormData["confirmacaoFichaCadastro"] = moment().format(
    "YYYY-MM-DD HH:mm:ss"
  );
  set(finishFormData, "clienteTitular.tipoCliente", "PF");

  set(finishFormData, "idPlano", undefined);

  triggerCustomEvent("doadin-purchase", finishFormData);

  return await requestWithStatus(setStatus, doadin.post, [
    DOADINPURSE,
    finishFormData,
  ]);
};

export const getCompleteDoadinPdf = async (setStatus, body) => {
  return await requestWithStatus(setStatus, doadin.post, [GET_PDF_LINK, body]);
};

export const getTitleImage = async (setStatus, url) => {
  return await requestWithStatus(setStatus, doadin.get, [
    `/title-image`,
    {
      params: {
        url,
      },
    },
  ]);
};
