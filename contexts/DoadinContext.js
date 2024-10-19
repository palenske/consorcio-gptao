import { createContext, useContext, useState } from "react";

const DoadinContext = createContext();

const DoadinProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const incrementData = newInfo => {
    setData({ ...data, ...newInfo });
  };

  return (
    <DoadinContext.Provider value={{ data, setData, incrementData }}>
      {children}
    </DoadinContext.Provider>
  );
};

const useDoadinContext = () => {
  const errorMessage =
    "O hook 'useDoadinContext ' deve ser utilizado em conjunto com o DoadinProvider.";
  const context = useContext(DoadinContext);

  if (context === undefined) {
    throw new Error(errorMessage);
  }

  return context;
};

export { DoadinProvider, useDoadinContext };
