import axios from "axios";
import { CONSORTIUM } from "../endpoints/apis";
import { logger } from "../../lib/logtail";

const instance = axios.create({
  baseURL: CONSORTIUM,
  headers: {},
});

instance.interceptors.request.use(
  config => {
    const tk = sessionStorage.getItem("info");
    if (tk) {
      config.headers.Authorization = `Bearer ${tk}`;
    }

    if (localStorage.getItem("partner")) {
      config.headers.digitalpartner = localStorage.getItem("partner");
    }

    let mailDefined = localStorage.getItem("u.mail");
    let docDefined = localStorage.getItem("u.doc");
    let phoneDefined = localStorage.getItem("u.phone");

    let sessionDefined = localStorage.getItem("cdc-locator");
    let sellerDefined = localStorage.getItem("seller");

    if (sellerDefined) {
      config.headers["seller"] = sellerDefined;
    }
    if (sessionDefined) {
      config.headers["sessionid"] = sessionDefined;
    }
    if (mailDefined) {
      config.headers["leademail"] = mailDefined;
    }
    if (docDefined) {
      config.headers["leadcpf"] = docDefined;
    }
    if (phoneDefined) {
      config.headers["leadphone"] = phoneDefined;
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
