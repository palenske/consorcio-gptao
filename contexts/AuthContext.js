import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("authToken")) {
      setHasToken(true);
    }
  }, []);

  const clearToken = () => {
    sessionStorage.removeItem("authToken");
    setHasToken(false);
  };

  const setToken = token => {
    sessionStorage.setItem("authToken", token);
    setHasToken(true);
  };

  return (
    <AuthContext.Provider value={{ hasToken, clearToken, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  const errorMessage =
    "O hook 'useAuthContext ' deve ser utilizado em conjunto com o DoadinProvider.";
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error(errorMessage);
  }

  return context;
};

export { AuthProvider, useAuthContext };
