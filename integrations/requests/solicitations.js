import { default as instance } from "~integrations/instances/basic";
import {
  SOLICITATION,
  SOLICITATION_PROPOSAL,
  SOLICITATION_NEXOOS_COMPANY,
} from "~integrations/endpoints";
import { requestWithStatus } from "~lib/requests";
import { toFormData } from "~lib/object";

export const sendSolicitation = async (
  setStatus,
  productKey,
  subProductKey,
  companyKey,
  type,
  roomId,
  info
) => {
  return requestWithStatus(setStatus, instance.post, [
    SOLICITATION,
    {
      productKey,
      subProductKey,
      companyKey,
      type,
      roomId,
      ...info,
    },
  ]);
};

export const sendFormdataMultiplikeSolicitation = async (
  setStatus,
  productKey,
  subProductKey,
  companyKey,
  type,
  info
) => {
  const cloneInfo = { ...info };
  delete cloneInfo.files;

  const body = toFormData({
    productKey,
    subProductKey,
    companyKey,
    type,
    ...cloneInfo,
  });

  info.files.forEach(f => body.append("files", f));
  return requestWithStatus(setStatus, instance.post, [SOLICITATION, body]);
};

export const sendProposal = async (setStatus, externalId, metadata) => {
  return requestWithStatus(setStatus, instance.post, [
    SOLICITATION_PROPOSAL,
    {
      id: externalId,
      metadata,
    },
  ]);
};

export const listSolicitation = async setStatus => {
  return requestWithStatus(setStatus, instance.get, [SOLICITATION]);
};

export const getSolicitation = async (setStatus, id) => {
  return requestWithStatus(setStatus, instance.get, [
    `${SOLICITATION}/${id}?id=${id}`,
  ]);
};

export const createNexoosCompany = async (
  setStatus,
  email,
  cnpj,
  last_year_revenue,
  foundation_year
) => {
  return requestWithStatus(setStatus, instance.post, [
    SOLICITATION_NEXOOS_COMPANY,
    {
      metadata: {
        email,
        cnpj,
        last_year_revenue,
        foundation_year,
      },
    },
  ]);
};
