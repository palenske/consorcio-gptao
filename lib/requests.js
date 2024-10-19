import STATUS from "~data/status.json";

export const requestWithStatus = async (
  setStatus = () => {},
  call = async () => {},
  params = {}
) => {
  setStatus(STATUS.LOADING);
  let res;

  try {
    res = await call(...params);
    setStatus(STATUS.SUCCESS);
  } catch (error) {
    console.info(error);
    setStatus(STATUS.ERROR);
    res = error;
  }

  return res;
};

export const hasError = fullRequestBody => {
  const reqStatus = fullRequestBody?.request?.status;
  return !reqStatus || reqStatus > 399;
};
