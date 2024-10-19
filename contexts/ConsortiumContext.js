import { useState, useContext, createContext } from "react";

const ConsortiumContext = createContext();

const ConsortiumProvider = ({ children }) => {
  const [data, setData] = useState({});
  const incrementData = _data => {
    const toIncrement = {};
    Object.keys(_data).forEach(
      key => (toIncrement[key] = { ...data[key], ..._data[key] })
    );
    setData({ ...data, ...toIncrement });
  };

  return (
    <ConsortiumContext.Provider value={{ data, setData, incrementData }}>
      {children}
    </ConsortiumContext.Provider>
  );
};

const useConsortium = () => {
  const errorMessage =
    "O hook 'useConsortium' deve ser utilizado em conjunto com o ConsortiumProvider.";
  const context = useContext(ConsortiumContext);

  if (context === undefined) {
    throw new Error(errorMessage);
  }

  return context;
};

export { ConsortiumProvider, useConsortium };
