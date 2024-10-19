import axios from "axios";
import { DOADIN } from "../endpoints/apis";
import { logger } from "../../lib/logtail";

const doadin = axios.create({
  baseURL: DOADIN,
  headers: {},
});

doadin.interceptors.request.use(
  config => {
    let tk = sessionStorage.getItem("authToken");
    if (tk) {
      config.headers.Authorization = `Bearer ${tk}`;
    }
    if (localStorage.getItem("partner")) {
      config.headers.seller = localStorage.getItem("partner");
    }
    if (sessionStorage.getItem("doadin-locator")) {
      config.headers.sessionid = sessionStorage.getItem("doadin-locator");
    }

    logger.logRequestOk(config);

    return config;
  },
  error => {
    logger.logRequestFail(error);

    return Promise.reject(error);
  },
  { synchronous: true }
);

doadin.interceptors.response.use(
  resp => {
    logger.logResponseOk(resp);

    return resp;
  },
  error => {
    logger.logResponseFail(error);

    if (error.response?.status === 401) {
      sessionStorage.removeItem("authToken");
      window.location.href = "/doadin/login";
    }

    return error;
  }
);

export default doadin;
