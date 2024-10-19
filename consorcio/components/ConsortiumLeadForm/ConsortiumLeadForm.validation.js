import * as yup from "yup";
import {
  testFullName,
  testValidCPF,
  testValidEmail,
  testValidPhone,
} from "~lib/yupTest";

export const getSchema = () => {
  return yup.object().shape({
    name: yup
      .string()
      .required("O nome completo é obrigatório")
      .test(...testFullName),
    cpf: yup
      .string()
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
