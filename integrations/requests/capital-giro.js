import instance from "~integrations/instances/basic"
import {default as bbInstance }from "../instances/bb"
import { requestWithStatus } from "~lib/requests"
import { CONSULTAR_CONTRATO, SIMULATE_OPEN_OFFERS, SIMULATE_RESOURCE, SOLICITAR_CONTRATO, VERIFICAR_PENDENCIAS } from "../endpoints/capital-giro"

export const simulateOpenOffers = async(setStatus,cnpj) => {
  return requestWithStatus(setStatus, instance.post, [
    SIMULATE_OPEN_OFFERS,
    {
      cnpj: Number(cnpj)
    }
  ]);
}

export const simulateResource = async(setStatus, body) => {
  return requestWithStatus(setStatus, instance.post, [
    SIMULATE_RESOURCE,
    body
  ]);
}

export const solicitarContrato = async(setStatus,body) => {
  return requestWithStatus(setStatus, bbInstance.post,[
    SOLICITAR_CONTRATO,
    body
  ]);
}

export const consultarContrato = async(setStatus,cnpj) => {
  return requestWithStatus(setStatus, instance.get,[
    CONSULTAR_CONTRATO,
    {
      params: {
        cnpj
      }
    }
  ]);
}

export const verificarPendencias = async(setStatus,cnpj) => {
  return requestWithStatus(setStatus, instance.get,[
    VERIFICAR_PENDENCIAS,
    {
      params: {
        cnpj
      }
    }
  ]);
}
