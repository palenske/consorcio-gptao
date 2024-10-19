import basic from "integrations/instances/basic";
import { requestWithStatus } from "~lib/requests";
import { TWO_FA_REQUEST, TWO_FA_VERIFY } from "~integrations/endpoints";

export const contactTwoFactor = async (
  setStatus,
  { document, phone, email }
) => {
  return await requestWithStatus(setStatus, basic.post, [
    TWO_FA_REQUEST,
    {
      document,
      phone,
      email,
    },
  ]);
};

export const verifyTwoFactor = async (setStatus, { document, code }) => {
  return await requestWithStatus(setStatus, basic.post, [
    TWO_FA_VERIFY,
    {
      document,
      code,
    },
  ]);
};
