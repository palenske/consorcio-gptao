import { onlyNumbers } from "~lib/string";
import { get, set } from "~lib/object";
import moment from "moment";

export const toBRL = value => {
  var brlFormatter = new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
  });

  return brlFormatter.format(value);
};

export const convertToCurrency = value =>
    value?.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });

export const dateRequest = data => {
  if (String(data).includes("-")) return data;

  // const date = data?.split("/");
  // const newDate = date[2].concat("-", date[1], "-", date[0]);
  const newDate = data
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1-$2")
    .replace(/(\d{2})(\d)/, "$1-$2")
    .replace(/(\d{4})(\d)/, "$1");

  return newDate;
};

export const dateResponse = (data, toggle = false) => {
  if (!data) return "";
  const divider = toggle ? "-" : "/";
  if (String(data).includes("/")) return data;
  const date = data?.split("-");
  const newDate = date[2].concat(divider, date[1], divider, date[0]);

  return newDate;
};

export const transformData = data => {
  if (!data) return "";
  if (String(data).includes("-")) {
    return String(data).replaceAll("-", "/");
  }
  return String(data).replaceAll("/", "-");
};

export const extractNumbers = (extractNumbersFrom, inputData) => {
  extractNumbersFrom.forEach(propertyName => {
    if (Boolean(get(inputData, propertyName, false))) {
      const newValue = onlyNumbers(get(inputData, propertyName));
      set(inputData, propertyName, newValue);
    }
  });
  return inputData;
};

export const toNormalDate = date => {
  if (!date) return "";
  let mark = String(date).includes("-") ? "-" : "/";
  let splitDate = String(date).split(mark);
  if (splitDate[0].length > 2) {
    return `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`;
  }
  return String(date).replaceAll(mark, "/");
};

export const toDottedDate = date => {
  if(!date) return moment().format('DD.MM.YYYY');

  if(String(date).match(/\d{2}.\d{2}.\d{4}/g)) return date;

  return moment(date).format('DD.MM.YYYY');
}
