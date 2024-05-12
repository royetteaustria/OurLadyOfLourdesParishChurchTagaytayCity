import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
  userRole: string;
  authToken: string;
  login: (role: string, token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  userRole: '',
  authToken: '',
  login: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userRole, setUserRole] = useState<string>('');
  const [authToken, setAuthToken] = useState<string>('');

  const login = (role: string, token: string) => {
    setUserRole(role);
    setAuthToken(token);
  };

  const logout = () => {
    setUserRole('');
    setAuthToken('');
  };

  return (
    <AuthContext.Provider value={{ userRole, authToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);