import { useState, useContext, createContext } from "react";

const PetsContext = createContext();

const PetsProvider = ({ children }) => {
  const [data, setData] = useState([]);

  return (
    <PetsContext.Provider value={{ data, setData }}>
      {children}
    </PetsContext.Provider>
  );
};

const usePetsContext = () => {
  const errorMessage =
    "O hook 'usePetsContext ' deve ser utilizado em conjunto com o PetsProvider.";
  const context = useContext(PetsContext);

  if (context === undefined) {
    throw new Error(errorMessage);
  }

  return context;
};

export { PetsProvider, usePetsContext };
