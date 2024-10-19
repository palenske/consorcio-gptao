export const validateEmail = value => {
  var regex =
    /^[\w!#$%&'*+/=?`{|}~^-]+(?:\.[\w!#$%&'*+/=?`{|}~^-]+)*@(?:[A-Z0-9-]+\.)+[A-Z]{2,6}$/i;
  var email = value;
  if (regex.test(email)) {
    return Boolean(email);
  }
  return false;
};
