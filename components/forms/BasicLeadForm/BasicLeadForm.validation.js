import * as yup from "yup";
import {
  testValidCPF,
  // testValidCNPJ,
  testValidEmail,
  testValidPhone,
  nameTestRegex,
} from "~lib/yupTest";

export const getSchema = () => {
  return yup.object().shape({
    name: yup
      .string()
      .required("O nome do solicitante é obrigatório")
      .test(...nameTestRegex),
    cpf: yup
      .string()
      .transform(value => value.replace(/[^\d]/g, ""))
      .required("O CPF do solicitante é obrigatório")
      .test(...testValidCPF),
    phone: yup
      .string()
      .required("O telefone de contato é obrigatório")
      .test(...testValidPhone),
    email: yup
      .string()
      .required("O email é obrigatório")
      .test(...testValidEmail),
  });
};

export const getSerasaSchema = () => {
  return yup.object().shape({
    cpf: yup
      .string()
      .transform(value => value.replace(/[^\d]/g, ""))
      .required("O CPF do solicitante é obrigatório")
      .test(...testValidCPF),
    email: yup
      .string()
      .required("O email é obrigatório")
      .test(...testValidEmail),
    phone: yup
      .string()
      .required("O telefone de contato é obrigatório")
      .test(...testValidPhone),
  });
};
