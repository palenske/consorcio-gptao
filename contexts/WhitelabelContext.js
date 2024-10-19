import { useState, useContext, createContext } from "react";

const WhitelabelContext = createContext();

const WhitelabelProvider = ({ customizer, children }) => {
  const [custom] = useState(customizer);

  return (
    <WhitelabelContext.Provider value={{ custom }}>
      {children}
    </WhitelabelContext.Provider>
  );
};

const useWhitelabel = () => {
  const errorMessage =
    "O hook 'useWhitelabel ' deve ser utilizado em conjunto com o WhitelabelProvider.";
  const context = useContext(WhitelabelContext);

  if (context === undefined) {
    throw new Error(errorMessage);
  }

  return context;
};

export { WhitelabelProvider, useWhitelabel };
