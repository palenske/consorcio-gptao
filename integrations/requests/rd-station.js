import { default as instance } from "~integrations/instances/basic";
import { RD_STATION_LEAD } from "~integrations/endpoints";
import { requestWithStatus } from "~lib/requests";

export const createRDStationLead = async (setStatus, payload) => {
  return requestWithStatus(setStatus, instance.post, [
    RD_STATION_LEAD,
    payload,
  ]);
};
