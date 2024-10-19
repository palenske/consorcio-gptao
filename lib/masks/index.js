const digit = "0";
const letter = "a";

const digits = n => [...new Array(n)].map(() => digit);

export const monthAndYear = [
  digit,
  digit,
  "/",
  digit,
  digit,
  digit,
  digit,
];

export const phone = [
  "(",
  digit,
  digit,
  ")",
  " ",
  digit,
  " ",
  digit,
  digit,
  digit,
  digit,
  "-",
  digit,
  digit,
  digit,
  digit,
];

export const plate = [letter, letter, letter, "-", digit, digit, digit, digit];

// somente telefone residêncial
export const phones = [
  "(",
  ...digits(2),
  ")",
  " ",
  ...digits(5),
  "-",
  ...digits(4),
];

export const date = [...digits(2), "/", ...digits(2), "/", ...digits(4)];

export const cpf = [
  ...digits(3),
  ".",
  ...digits(3),
  ".",
  ...digits(3),
  "-",
  ...digits(2),
];

// exemplo 12.442.758/0001-69
export const cnpj = [
  ...digits(2),
  ".",
  ...digits(3),
  ".",
  ...digits(3),
  "/",
  ...digits(4),
  "-",
  ...digits(2),
];


export const cpfAndCnpj = [
  [
    ...digits(3),
    ".",
    ...digits(3),
    ".",
    ...digits(3),
    "-",
    ...digits(2)
  ],
  [
    ...digits(2),
    ".",
    ...digits(3),
    ".",
    ...digits(3),
    "/",
    ...digits(4),
    "-",
    ...digits(2),
  ]
];

// exemplo 12.442.758/0001-69


export const cep = [...digits(5), "-", ...digits(3)];
export const currency = [
  ...digits(3),
  ".",
  ...digits(3),
  ".",
  ...digits(3),
  ",",
  ...digits(2),
];

export const enel = [...digits(12)];

export const operationCode = [...digits(9)];

export const expiration = [...digits(2), "/", ...digits(4)];

export const cardNumber = [
  ...digits(4),
  " ",
  ...digits(4),
  " ",
  ...digits(4),
  " ",
  ...digits(4),
];

export const monthYearDate = [
  ...digits(2),
  "/",
  ...digits(4)
];
