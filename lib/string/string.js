export const capitalize = s => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const onlyNumbers = (s = "") => {
  return String(s).replace(/\D/g, "");
};

export const textBeautify = s => {
  if (Array.isArray(s) && s.length === 0) {
    return "-";
  }

  if (Array.isArray(s)) {
    return s.map(content => textBeautify(JSON.stringify(content))).join(" ");
  }

  if (!s || s === "" || s === "//") {
    return "-";
  }

  return s
    .split("_")
    .map(piece => capitalize(piece))
    .join(" ");
};
