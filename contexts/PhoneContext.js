import { useState, useContext, createContext } from "react";

const PhoneContext = createContext();

const PhoneProvider = ({ children }) => {
  const [data, setData] = useState([]);

  return (
    <PhoneContext.Provider value={{ data, setData }}>
      {children}
    </PhoneContext.Provider>
  );
};

const usePhoneContext = () => {
  const errorMessage =
    "O hook 'usePhoneContext ' deve ser utilizado em conjunto com o PhoneProvider.";
  const context = useContext(PhoneContext);

  if (context === undefined) {
    throw new Error(errorMessage);
  }

  return context;
};

export { PhoneProvider, usePhoneContext };
