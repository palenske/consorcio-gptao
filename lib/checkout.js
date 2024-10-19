import { onlyNumbers } from "~lib/string";

export const getCardType = number => {
  const onlyNumber = onlyNumbers(number);
  // visa
  var re = new RegExp("^4");
  if (onlyNumber.match(re) != null) return "VISA";

  // Mastercard
  // Updated for Mastercard 2017 BINs expansion
  if (
    /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(
      onlyNumber
    )
  )
    return "MASTER";

  // AMEX
  re = new RegExp("^3[47]");
  if (onlyNumber.match(re) != null) return "AMEX";

  // Discover
  re = new RegExp(
    "^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)"
  );
  if (onlyNumber.match(re) != null) return "DISCOVER";

  // Diners
  re = new RegExp("^36");
  if (onlyNumber.match(re) != null) return "DINERS";

  // Diners - Carte Blanche
  re = new RegExp("^30[0-5]");
  if (onlyNumber.match(re) != null) return "DINERSCARTEBLANCHE";

  // JCB
  re = new RegExp("^35(2[89]|[3-8][0-9])");
  if (onlyNumber.match(re) != null) return "JCB";

  // Visa Electron
  re = new RegExp("^(4026|417500|4508|4844|491(3|7))");
  if (onlyNumber.match(re) != null) return "VISA";

  if (onlyNumber === "1111111111111111") return "VISA";

  return "NOT_FOUND";
};
