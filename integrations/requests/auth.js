import basic from "integrations/instances/basic";
import { requestWithStatus } from "~lib/requests";
import {
  SIGNIN,
  CREATE_ACCOUNT,
  RESET_PASSWORD,
  FORGOT_PASSWORD,
  VERIFY_ACCOUNT,
} from "../endpoints/index";

export const signIn = async (setStatus, user, secret) => {
  return requestWithStatus(setStatus, basic.post, [
    SIGNIN,
    {
      username: user,
      password: secret,
    },
  ]);
};

export const createAccount = async (setStatus, body) => {
  return requestWithStatus(setStatus, basic.post, [
    CREATE_ACCOUNT,
    {
      role: "USER",
      personType: "FISICA",
      settings: {
        accountType: "USER",
      },
      ...body,
    },
  ]);
};

export const verifyAccount = async setStatus => {
  return requestWithStatus(setStatus, basic.post, [VERIFY_ACCOUNT]);
};

export const resetPassword = async (setStatus, body) => {
  return requestWithStatus(setStatus, basic.post, [RESET_PASSWORD, body]);
};

export const forgotPassword = async (setStatus, body) => {
  return requestWithStatus(setStatus, basic.post, [FORGOT_PASSWORD, body]);
};
