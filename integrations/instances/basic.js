import axios from "axios";
import { CREDIBAN_HOST } from "../endpoints/apis";
import { logger } from "../../lib/logtail";

const instance = axios.create({
  baseURL: CREDIBAN_HOST,
  headers: {},
});

instance.interceptors.request.use(
  config => {
    if (localStorage.getItem("partner")) {
      config.headers.digitalpartner = localStorage.getItem("partner");
    }

    let nameDefined = localStorage.getItem("u.name");
    let mailDefined = localStorage.getItem("u.mail");
    let docDefined = localStorage.getItem("u.doc");
    let phoneDefined = localStorage.getItem("u.phone");
    let sessionDefined = localStorage.getItem("cdc-locator");
    let sellerDefined = localStorage.getItem("seller");
    let doadinSession = sessionStorage.getItem("doadin-locator");
    let externalId = localStorage.getItem("externalId");

    let authToken = sessionStorage.getItem("authToken");

    let accToken = sessionStorage.getItem("accToken");

    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }

    if (accToken) {
      config.headers["verifytoken"] = accToken;
    }

    if(externalId) {
      config.headers["externalid"] = externalId;
    }

    if (sellerDefined) {
      config.headers["seller"] = sellerDefined;
    }
    if (sessionDefined || doadinSession) {
      config.headers["sessionid"] = sessionDefined || doadinSession;
    }
    if (nameDefined) {
      config.headers["leadname"] = nameDefined;
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
