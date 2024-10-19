import { default as instance } from "~integrations/instances/basic";
import { PRODUCT } from "~integrations/endpoints";
import { requestWithStatus } from "~lib/requests";

export const listProducts = async setStatus => {
  return requestWithStatus(setStatus, instance.get, [PRODUCT]);
};

export const getContractDetailsByTitle = async (setStatus, idTitulo) => {
  return requestWithStatus(setStatus, instance.get, [
    "/contract/details-by-title",
    {
      params: {
        idTitulo,
        serviceTitle: "BRASILCAP_DOADIN",
      },
    },
  ]);
};
