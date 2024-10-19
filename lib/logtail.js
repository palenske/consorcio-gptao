export const generateLog = async anyBody => {
  // var myHeaders = new Headers();
  // myHeaders.append("Authorization", "Bearer v3nND6EVvTq15rAWvhnkybaS");
  // myHeaders.append("Content-Type", "application/json");
  // var raw = JSON.stringify(anyBody);
  // var requestOptions = {
  //   method: "POST",
  //   headers: myHeaders,
  //   body: raw,
  //   redirect: "follow",
  // };
  // try {
  //   fetch("https://in.logtail.com?", requestOptions).then(response =>
  //     response.text()
  //   );
  // } catch (supressedErr) {}
};

const logRequestOk = info => {
  let logMessage = `[request] [ok] ${info?.headers?.["leademail"] ?? ""} ${
    info?.url
  }`;

  generateLog({
    type: "REQUEST_INTERCEPTOR",
    message: logMessage,
    nested: { logVersion: "1.0.0", env: process.env.NODE_ENV, content: info },
  });
};

const logRequestFail = info => {
  let logMessage = `[request] [error] ${
    info?.config?.headers?.["leademail"] ?? ""
  } ${info?.status}`;

  generateLog({
    type: "REQUEST_ERROR_INTERCEPTOR",
    message: logMessage,
    nested: { logVersion: "1.0.0", env: process.env.NODE_ENV, content: info },
  });
};

const logResponseOk = info => {
  let logMessage = `[response] [ok] ${
    info?.config?.headers?.["leademail"] ?? ""
  } ${info?.config?.url}`;

  generateLog({
    type: "RESPONSE_INTERCEPTOR",
    message: logMessage,
    nested: { logVersion: "1.0.0", env: process.env.NODE_ENV, content: info },
  });
};

const logResponseFail = info => {
  let logMessage = `[response] [error] ${
    info?.config?.headers?.["leademail"] ?? ""
  }`;

  generateLog({
    type: "RESPONSE_ERROR_INTERCEPTOR",
    message: logMessage,
    nested: { logVersion: "1.0.0", env: process.env.NODE_ENV, content: info },
  });
};

export const logger = {
  logRequestOk,
  logRequestFail,
  logResponseOk,
  logResponseFail,
};
