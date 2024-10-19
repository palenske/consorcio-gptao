import { useState, useContext, createContext } from "react";

const CDCContext = createContext();

const CDCProvider = ({ children }) => {
  const [data, setData] = useState({});
  const incrementData = _data => {
    setData({ ...data, ..._data });
  };

  return (
    <CDCContext.Provider value={{ data, setData, incrementData }}>
      {children}
    </CDCContext.Provider>
  );
};

const useCDC = () => {
  const errorMessage =
    "O hook 'useCDC' deve ser utilizado em conjunto com o CDCProvider.";
  const context = useContext(CDCContext);

  if (context === undefined) {
    throw new Error(errorMessage);
  }

  return context;
};

export { CDCProvider, useCDC };
