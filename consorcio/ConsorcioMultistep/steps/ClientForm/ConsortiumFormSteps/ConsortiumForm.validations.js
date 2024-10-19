import * as yup from "yup";
import {
  testAbbreviationName,
  testFullName,
  testStringOnlyAndSpaceOnly,
  testValidCPF,
  testValidEmail,
  testValidPhone,
  testIsNotFuture,
  testBirthdate,
} from "~lib/yupTest";

export const FormOneSchema = () => {
  return yup.object().shape({
    cep: yup.string().required("Campo é obrigatório").length(8, "Cep Inválido"),
    tipoEndereco: yup.string().required("Selecione uma opção"),
    endereco: yup.string().required("Campo é obrigatório"),
    bairro: yup.string().required("Campo é obrigatório"),
    cidade: yup
      .string()
      .required("Campo é obrigatório")
      .max(25, "Máximo de 25 caracteres"),
    complementoEndereco: yup.string(),
    uf: yup.string().required("Campo é obrigatório"),
  });
};

export const FormTwoSchema = () => {
  return yup.object().shape({
    tipoDocumento: yup.number().required("Selecione uma opção"),
    numeroDocumento: yup
      .string()
      .required("Campo é obrigatório")
      .matches(/^\d+$/, "Digite apenas números"),
    dataNascimento: yup
      .string()
      .required("O campo é obrigatório")
      .test(...testIsNotFuture)
      .test(...testBirthdate),
    situacaoCivil: yup.string().required("Selecione uma opção"),
    codigoSexo: yup.string().required("Selecione uma opção"),
    nomeOrgaoEmitente: yup.string().required("Campo é obrigatório"),
    cidadeNatal: yup.string().required("Campo é obrigatório"),
    ocupacao: yup.string().required("Campo é obrigatório"),
    codigoNacionalidade: yup.number().required("Selecione uma opção"),
    valorRendaMensal: yup.number().required("Campo é obrigatório"),
    codigoInstrucao: yup.number().required("Campo é obrigatório"),
  });
};

export const getSchema = () => {
  return yup.object().shape({
    name: yup
      .string()
      .required("O nome do solicitante é obrigatório")
      .test(...testFullName)
      .test(...testStringOnlyAndSpaceOnly("nome"))
      .test(...testAbbreviationName),
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

    //   productItem: yup
    //     .object()
    //     .typeError("Produto inválido")
    //     .required("A seleção de produto é obrigatória"),
    //   loanUse: yup
    //     .string()
    //     .required("A seleção de motivo de uso do empréstimo é obrigatória"),
    //   amountRequested: yup
    //     .number()
    //     .required("A quantidade solicitada é obrigatória")
    //     .typeError("Digite um valor válido")
    //     .min(5000, "O valor mínimo solicitado é 5.000 R$")
    //     .max(400000, "O valor máximo solicitado é 400.000 R$"),
    //   detailedLoanUse: yup
    //     .string()
    //     .max(2000, "O motivo pode ter no máximo 2 mil caracteres"),
    //   borrower: yup
    //     .object()
    //     .shape({

    //       monthlyRevenue: yup
    //         .number()
    //         .min(10000, "O valor mínimo de receita é 10.000 R$")
    //         .typeError("A receita mensal inválida")
    //         .required("A receita mensal é obrigatória"),

    //       affiliation: yup
    //         .string()
    //         .required("A relação do responsável é obrigatória."),

    //     })
    //     .required("O solicitante é uma campo obrigatório"),
  });
};
