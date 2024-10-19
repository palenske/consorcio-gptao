import { default as instance } from "~integrations/instances/basic";
import { requestWithStatus } from "~lib/requests";

export const checkPerson = async setStatus => {
  return requestWithStatus(setStatus, instance.get, ["person/check-valid-person"]);
};
