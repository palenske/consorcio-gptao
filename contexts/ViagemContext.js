import { useState, useContext, createContext } from "react";

const TripContext = createContext();

const TripProvider = ({ children }) => {
  const [data, setData] = useState([]);

  return (
    <TripContext.Provider value={{ data, setData }}>
      {children}
    </TripContext.Provider>
  );
};

const useTripContext = () => {
  const errorMessage =
    "O hook 'useTripContext ' deve ser utilizado em conjunto com o TripProvider.";
  const context = useContext(TripContext);

  if (context === undefined) {
    throw new Error(errorMessage);
  }

  return context;
};

export { TripProvider, useTripContext };
