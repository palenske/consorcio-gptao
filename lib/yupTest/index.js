import moment from "moment";
import {
  validateCep,
  validateCPF,
  validateCNPJ,
  validatePhone,
  validateEmail,
} from "~lib/validations";
import { validateCCNumber } from "~lib/validations/sections/validateCCNumber";
import { validateDate } from "~lib/validations/sections/validateDate";
import { validateIsNotFuture } from "~lib/validations/sections/validateIsNotFuture";
import { validateMonthAndYear } from "~lib/validations/sections/validateMonthAndYear";
import { onlyNumbers } from "../string";


export const nameTestRegex = [
  'tes-name-regex',
  "Campo inválido",
  value => {
    const regex = /^[a-záàâãéèêíïóôõöúçñ]+$/i;
    const isValid = String(value).split(/ +/).every(element => regex.test(element));
    return isValid;
  }
]
export const testAbbreviationName = [
  "test-name-abreviation",
  "O nome não pode ter abreviações",
  value => {
    if (!value) return false;
    const invalidItem = String(value)
      .split(" ")
      .find(namePart => namePart && namePart.replace(".", "")?.length === 1);

    return !Boolean(invalidItem);
  },
];

export const testFullName = [
  "test-complete-name",
  "O nome também deve conter sobrenome",
  value => {
    return value ? value.trimEnd().split(" ").length !== 1 : true;
  },
];

export const testStringOnlyAndSpaceOnly = fieldName => [
  "test-only-string-and-spaces",
  `O campo ${fieldName} está com caracteres inválidos`,
  value => {
    const hasOnlyLetters = myString => {
      var letters = /^[A-zÀ-ú]+$/;
      return letters.test(myString.replaceAll(" ", ""));
    };

    return value ? hasOnlyLetters(value) : true;
  },
];

export const testOnlyString = fieldName => [
  "test-only-string",
  `O campo ${fieldName} está com caracteres inválidos`,
  value => {
    const hasOnlyLetters = myString => {
      var letters = /^[A-Za-z]+$/;
      return letters.test(myString);
    };

    return value ? hasOnlyLetters(value) : true;
  },
];

export const testValidCPF = [
  "is-cpf",
  "CPF inválido",
  value => {
    return value ? validateCPF(value) : true;
  },
];

export const testValidCNPJ = [
  "is-cnpj",
  "CNPJ inválido",
  value => {
    return value ? validateCNPJ(value) : true;
  },
];

export const testValidEmail = [
  "is-mail",
  "Email inválido",
  value => {
    return value ? validateEmail(value) : true;
  },
];

export const testValidPhone = [
  "is-phone",
  "Numero inválido",
  value => {
    return value ? validatePhone(value) : true;
  },
];

export const testValidCep = [
  "is-cep",
  "CEP inválido",
  value => {
    return value ? validateCep(value) : true;
  },
];

export const testIsNotResidencialPhone = [
  "is-not-residential",
  "Celular inválido",
  value => {
    if (!value) {
      return true;
    }
    return onlyNumbers(value).length === 11;
  },
];

export const testIsResidencialPhone = [
  "is-residential",
  "Telefone residêncial inválido",
  value => {
    if (!value) {
      return true;
    }
    return onlyNumbers(value).length === 10;
  },
];

export const testCardValidate = [
  "test-card-validate",
  "Mês ou ano inválido",
  value => {
    const creditCardDate = moment(
      value.split("/")[0] + value.split("/")[1],
      "MMYYYY"
    );
    const today = moment();
    return creditCardDate.isValid() && today < creditCardDate;
  },
];

export const testBirthdate = [
  "test-birthdate",
  "Data de nascimento inválida",
  value => {
    return value ? validateDate(onlyNumbers(value)) : true;
  },
];

export const testCreditCardNumber = [
  "test-credit-card-number",
  "Número do cartão é inválido",
  value => {
    return value ? validateCCNumber(onlyNumbers(value)) : true;
  },
];

export const testMonthAndYear = [
  "test-month-and-year",
  "Data inválida",
  value => {
    return value ? validateMonthAndYear(onlyNumbers(value)) : true;
  },
];


export const testIsNotFutureMonthYear = [
  "test-before-month-year",
  "Data informada é maior que a atual",
  value => {
    return moment(value,'MMYYYY').isBefore(moment.now());
  }
];

export const testIsNotFuture = [
  "test-is-not-future",
  "data informada é maior ou igual a data atual",
  value => {
    return value ? validateIsNotFuture(onlyNumbers(value)) : true;
  },
];

export const testUniqueFile = [
  "file-test",
  "É obrigatório o envio de um arquivo.",
  itemValue => {
    return itemValue?.length === 1;
  },
];
