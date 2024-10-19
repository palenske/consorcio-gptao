import { default as instance } from "~integrations/instances/basic";
import { SOLICITATION_DETACHED } from "~integrations/endpoints";
import { requestWithStatus } from "~lib/requests";

export const sendDetachedSolicitation = async (
  setStatus,
  detachedSolicitationForm
) => {
  const requestInfo = {
    ...detachedSolicitationForm,
    name: detachedSolicitationForm?.nome,
  };

  return requestWithStatus(setStatus, instance.post, [
    SOLICITATION_DETACHED,
    requestInfo,
  ]);
};
