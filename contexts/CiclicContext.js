import { useState, useContext, createContext } from "react";

const CiclicContext = createContext();

const CiclicProvider = ({ children }) => {
  const [data, setData] = useState({});
  const incrementData = _data => {
    const toIncrement = {};
    Object.keys(_data).forEach(
      key => (toIncrement[key] = { ...data[key], ..._data[key] })
    );
    setData({ ...data, ...toIncrement });
  };

  return (
    <CiclicContext.Provider value={{ data, setData, incrementData }}>
      {children}
    </CiclicContext.Provider>
  );
};

const useCiclicContext = () => {
  const errorMessage =
    "O hook 'useCiclicContext ' deve ser utilizado em conjunto com o CiclicProvider.";
  const context = useContext(CiclicContext);

  if (context === undefined) {
    throw new Error(errorMessage);
  }

  return context;
};

export { CiclicProvider, useCiclicContext };
