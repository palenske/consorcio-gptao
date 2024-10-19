import { default as instance } from "~integrations/instances/basic";
import {
  GENERATE_ATTEMPT,
  UPDATE_ATTEMPT,
  NEW_DETACHED_ATTEMPT,
  UPDATE_DOADIN_ATTEMPT,
  CAPITAL_GIRO_ATTEMPT,
  CHECK_SESSION,
  START_ATTEMPT,
} from "~integrations/endpoints";
import { requestWithStatus } from "~lib/requests";
import { get, set } from "~lib/object";
import { dateResponse } from "~lib/formats";

export const startAttempt = async (setStatus, payload) => {
  return requestWithStatus(setStatus, instance.post, [START_ATTEMPT, payload]);
};

export const generateAttempt = async (setStatus, payload) => {
  return requestWithStatus(setStatus, instance.post, [
    GENERATE_ATTEMPT,
    payload,
  ]);
};
export const capitalGiroAttempt = async (setStatus, payload) => {
  return requestWithStatus(setStatus, instance.post, [
    CAPITAL_GIRO_ATTEMPT,
    payload,
  ]);
};

export const updateAttempt = async (setStatus = () => {}, payload) => {
  return requestWithStatus(setStatus, instance.post, [UPDATE_ATTEMPT, payload]);
};

export const createDetachedAttempt = async (setStatus, body) => {
  return requestWithStatus(setStatus, instance.post, [
    NEW_DETACHED_ATTEMPT,
    {
      ...body,
      service: "BRASILCAP_DOADIN",
    },
  ]);
};

export const updateDoadinAttempt = async (setStatus, body) => {
  const form = JSON.parse(JSON.stringify(body));
  const _dataNasc = get(form, "clienteTitular.dataNascimento");
  set(form, "clienteTitular.dataNascimento", dateResponse(_dataNasc, true));
  const sessionId = sessionStorage.getItem("doadin-locator");
  return requestWithStatus(setStatus, instance.post, [
    UPDATE_DOADIN_ATTEMPT,
    {
      sessionId,
      ...form,
    },
  ]);
};

export const updatePersonInAttempt = async (setStatus = () => {}) => {
  return requestWithStatus(setStatus, instance.post, [
    "/attempt/person-in-detached",
  ]);
};

export const checkValidSession = async (setStatus = () => {}, service) => {
  return requestWithStatus(setStatus, instance.get, [
    `${CHECK_SESSION}?service=${service}`,
  ]);
};

export const reuseAttempt = async(setStatus = () =>{}) => {
  return requestWithStatus(setStatus,instance.get,[
    "/attempt/reuse"
  ]);
}
