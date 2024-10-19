import * as yup from "yup";

export const StepOneSchema = () => {
  return yup.object().shape({
    codigoAgencia: yup
      .string()
      .required("Campo é obrigatório")
      .matches(/^[1-9]+/, "Não é permitido ZEROS a esquerda")
      .test("Digits only", "Somente números permitidos.", value =>
        /^\d+$/.test(value)
      ),
    numeroContaCorrente: yup
      .string()
      .required("Selecione uma opção")
      .matches(/^[1-9]+/, "Não é permitido ZEROS a esquerda")
      .test("Digits only", "Somente números permitidos.", value =>
        /^\d+$/.test(value)
      ),
  });
};
