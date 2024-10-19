import axios from "axios";
import { CICLIC } from "../endpoints/apis";
import { logger } from "../../lib/logtail";

const instance = axios.create({
  baseURL: CICLIC,
  headers: {},
});

instance.interceptors.request.use(
  config => {
    const tk = sessionStorage.getItem("info");
    if (tk) {
      config.headers.Authorization = `Bearer ${tk}`;
    }

    let sessionDefined = localStorage.getItem("cdc-locator");
    let sellerDefined = localStorage.getItem("seller");

    if (sellerDefined) {
      config.headers["seller"] = sellerDefined;
    }
    if (sessionDefined) {
      config.headers["sessionid"] = sessionDefined;
    }
    if (localStorage.getItem("partner")) {
      config.headers.digitalpartner = localStorage.getItem("partner");
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
