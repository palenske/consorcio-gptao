import listOptions from "./consignado.json";

const options = Object.keys(listOptions).map(code => ({
  value: code,
  label: listOptions[code],
}));

export default options;
