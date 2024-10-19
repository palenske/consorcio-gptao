import { default as instance } from "~integrations/instances/bb";
import { default as local } from "~integrations/instances/local";
import { requestWithStatus } from "~lib/requests";
import { triggerCustomEvent } from "~lib/analytics";

export const isAccountHolder = async (setStatus, cpf) => {
  return requestWithStatus(setStatus, local.post, ["/check?cpf=" + cpf]);
};

export const listCreditLines = async setStatus => {
  return requestWithStatus(setStatus, instance.get, [
    "/cdc/available-credit-lines",
  ]);
};

export const simulation = async (setStatus, body) => {
  return requestWithStatus(setStatus, instance.post, [
    "/cdc/loan-simulation",
    body,
  ]);
};

export const preview = async (setStatus, body) => {
  return requestWithStatus(setStatus, instance.post, [
    "/cdc/loan-preview",
    body,
  ]);
};

export const finish = async (setStatus, body) => {
  triggerCustomEvent("cdc-last-step", body);
  return requestWithStatus(setStatus, instance.post, [
    "/cdc/loan-contract",
    body,
  ]);
};
