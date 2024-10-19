import moment from "moment";

export const validateIsNotFuture = date => {
  if (date.length !== 8) return true;
  const yesterday = moment().subtract(1, "day");
  const birthdate = moment(date, "DDMMYYYY");
  return birthdate.isBefore(yesterday);
};
