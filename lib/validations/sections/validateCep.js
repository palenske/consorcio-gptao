export const validateCep = cep => {
  return typeof cep === "string" && /^[0-9]{8}$/.test(cep);
};
