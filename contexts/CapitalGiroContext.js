import { useState, useContext, createContext } from "react";

const CapitalGiroContext = createContext();

const CapitalGiroProvider = ({ children }) => {
  const [data, setData] = useState({});
  const incrementData = _data => {
    const toIncrement = {};
    Object.keys(_data).forEach(
      key => (toIncrement[key] = { ...data[key], ..._data[key] })
    );
    setData({ ...data, ...toIncrement });
  };

  return (
    <CapitalGiroContext.Provider value={{ data, setData, incrementData }}>
      {children}
    </CapitalGiroContext.Provider>
  );
};

const useCapitalGiro = () => {
  const errorMessage =
    "O hook 'useCapitalGiro' deve ser utilizado em conjunto com o CapitalGiroProvider.";
  const context = useContext(CapitalGiroContext);

  if (context === undefined) {
    throw new Error(errorMessage);
  }

  return context;
};

export { CapitalGiroProvider, useCapitalGiro };
