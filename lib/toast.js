import { toast } from "react-toastify";

const toastDefaultConfig = {
  autoClose: 10000,
};

export const showWarning = text => {
  toast.warning(text);
};

export const showInfo = text => {
  toast.info(text);
};

export const showSuccess = text => {
  toast.success(text);
};

export const showError = text => {
  toast.error(
    text || "Erro ao se comunicar com o servidor, tente novamente mais tarde!"
  );
};

export const showApiError = serverResponse => {
  let message = serverResponse.response?.data?.friendlyMessage;
  toast.error(message, toastDefaultConfig);
};

export const showApiErrorArray = serverResponse => {
  const arrayError = serverResponse.response?.data?.errors?.[0];
  let message = arrayError.includes("Request failed" || "Bad Request")
    ? serverResponse.response?.data?.friendlyMessage
    : arrayError;
  toast.error(message, toastDefaultConfig);
};

export const showSuccessPurchase = text => {
  toast.success(text, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const showWarnPurchase = text => {
  toast.warn(text, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
