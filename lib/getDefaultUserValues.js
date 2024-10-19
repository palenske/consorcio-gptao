const getDefaultUserValues = () => {
  return typeof window !== "undefined"
    ? {
        cpf: window.localStorage.getItem("u.doc") || "",
        nome: window.localStorage.getItem("u.name") || "",
        name: window.localStorage.getItem("u.name") || "",
        email: window.localStorage.getItem("u.mail") || "",
        phone: window.localStorage.getItem("u.phone") || "",
      }
    : {};
};

export default getDefaultUserValues;
