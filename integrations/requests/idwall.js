import { default as instance } from "~integrations/instances/identity";
import {
  IDWALL_START_REPORT,
  IDWALL_REPORT_STATUS,
} from "~integrations/endpoints";
import { requestWithStatus } from "~lib/requests";

export const startReport = async (setStatus, token_sdk, matriz = "SIMPLIFICADA") => {
  return requestWithStatus(setStatus, instance.post, [
    IDWALL_START_REPORT,
    {
      token_sdk,
      matriz
    },
  ]);
};

export const getReportStatus = async (setStatus, reportId) => {
  return requestWithStatus(setStatus, instance.get, [
    IDWALL_REPORT_STATUS + `/${reportId}`,
  ]);
};
