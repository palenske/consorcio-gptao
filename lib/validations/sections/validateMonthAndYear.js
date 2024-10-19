export const validateMonthAndYear = date => {
  return typeof date === "string" && /^(0[1-9]|1[0-2])\d{4}$/.test(date);
};
