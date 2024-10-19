import { default as instance } from "~integrations/instances/basic";
import { VEHICLE } from "~integrations/endpoints";
import { requestWithStatus } from "~lib/requests";

export const getVehicleInfo = async (setStatus, stateInitials, genericBody) => {
  return requestWithStatus(setStatus, instance.get, [
    VEHICLE,
    {
      params: {
        state: stateInitials,
        ...genericBody,
      },
    },
  ]);
};
