import axios from "axios";
import { IDENTITY_HOST } from "../endpoints/apis";
import { logger } from "../../lib/logtail";

const instance = axios.create({
  baseURL: IDENTITY_HOST,
  headers: {},
});

instance.interceptors.request.use(
  config => {
    logger.logRequestOk(config);

    return config;
  },
  function (error) {
    logger.logRequestFail(error);

    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  config => {
    logger.logResponseOk(config);
    return config;
  },
  error => {
    logger.logResponseFail(error);

    return Promise.reject(error);
  }
);

export default instance;
