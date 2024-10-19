import { useState, useContext, createContext } from "react";

const DirectCreditContext = createContext();

const DirectCreditProvider = ({ children }) => {
  const [data, setData] = useState({});
  const incrementData = _data => {
    const toIncrement = {};
    Object.keys(_data).forEach(
      key => (toIncrement[key] = { ...data[key], ..._data[key] })
    );
    setData({ ...data, ...toIncrement });
  };

  return (
    <DirectCreditContext.Provider value={{ data, setData, incrementData }}>
      {children}
    </DirectCreditContext.Provider>
  );
};

const useDirectCredit = () => {
  const errorMessage =
    "O hook 'useDirectCredit' deve ser utilizado em conjunto com o DirectCreditProvider.";
  const context = useContext(DirectCreditContext);

  if (context === undefined) {
    throw new Error(errorMessage);
  }

  return context;
};

export { DirectCreditProvider, useDirectCredit };
