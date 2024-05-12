import React, { createContext, ReactNode, useState } from "react";

interface AuthContextProps {
  children: ReactNode;
}

const AuthContext = createContext({} as { auth: any; setAuth: any });

export const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
