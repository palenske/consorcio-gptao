import {
  MODELTYPES,
  PETS,
  PETSPURCHASE,
  PHONEPURCHASE,
  TRAVELPURCHASE,
  TRAVELQUOTATION,
  DEVICESPRICE,
  HEALTH,
  HEALTHPLANS,
  LISTPETPLANS,
  LISTPETGENDER,
  LISTPETAGE,
  LISTPETBREED,
  LISTPETSIZE,
  HIREPETINSURANCE,
  LISTPETSPECIES,
  LISTALLPETOPTIONS,
} from "~integrations/endpoints/ciclic";
import ciclicinstance from "~integrations/instances/ciclic";
import { requestWithStatus } from "~lib/requests";

export const ciclicListPets = async setStatus => {
  return await requestWithStatus(setStatus, ciclicinstance.get, [PETS]);
};

export const ciclicPurchase = async (setStatus, body) => {
  return await requestWithStatus(setStatus, ciclicinstance.post, [
    PETSPURCHASE,
    body,
  ]);
};

export const travelQuotation = async (setStatus, body) => {
  return await requestWithStatus(setStatus, ciclicinstance.post, [
    TRAVELQUOTATION,
    body,
  ]);
};

export const travelPurchase = async (setStatus, body) => {
  return await requestWithStatus(setStatus, ciclicinstance.post, [
    TRAVELPURCHASE,
    body,
  ]);
};

export const modelTypes = async setStatus => {
  return await requestWithStatus(setStatus, ciclicinstance.get, [MODELTYPES]);
};

export const devicePrice = async (setStatus, uuid) => {
  return await requestWithStatus(setStatus, ciclicinstance.get, [
    `${DEVICESPRICE}/${uuid}`,
  ]);
};

export const phonePurchase = async (setStatus, body) => {
  return await requestWithStatus(setStatus, ciclicinstance.post, [
    PHONEPURCHASE,
    body,
  ]);
};

export const healthPolicyByCpf = async (setStatus, params) => {
  return await requestWithStatus(setStatus, ciclicinstance.get, [
    HEALTH,
    params,
  ]);
};

export const listHealthPlans = async setStatus => {
  return await requestWithStatus(setStatus, ciclicinstance.get, [HEALTHPLANS]);
};

export const healthPurchase = async (setStatus, body) => {
  return await requestWithStatus(setStatus, ciclicinstance.post, [
    HEALTH,
    body,
  ]);
};

export const getPetPlansList = async setStatus => {
  return await requestWithStatus(setStatus, ciclicinstance.get, [LISTPETPLANS]);
};

export const getPetGenderList = async setStatus => {
  return await requestWithStatus(setStatus, ciclicinstance.get, [
    LISTPETGENDER,
  ]);
};

export const getPetAgeList = async setStatus => {
  return await requestWithStatus(setStatus, ciclicinstance.get, [LISTPETAGE]);
};

export const getPetSpeciesList = async setStatus => {
  return await requestWithStatus(setStatus, ciclicinstance.get, [
    LISTPETSPECIES,
  ]);
};

export const getPetBreedList = async (setStatus, params) => {
  return await requestWithStatus(setStatus, ciclicinstance.get, [
    `${LISTPETBREED}/${params}`,
  ]);
};

export const getPetSizeList = async setStatus => {
  return await requestWithStatus(setStatus, ciclicinstance.get, [LISTPETSIZE]);
};

export const getAllPetOptions = async setStatus => {
  return await requestWithStatus(setStatus, ciclicinstance.get, [
    LISTALLPETOPTIONS,
  ]);
};

export const hirePetInsurance = async (setStatus, body) => {
  return await requestWithStatus(setStatus, ciclicinstance.post, [
    HIREPETINSURANCE,
    body,
  ]);
};
