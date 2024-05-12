import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  userRole: string;
  login: (role: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  userRole: '', // Initialize userRole with an empty string
  login: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userRole, setUserRole] = useState<string>(''); // Initialize userRole with an empty string

  const login = (role: string) => {
    setIsAuthenticated(true);
    setUserRole(role);
    // You may also want to store authentication token or user data in localStorage or sessionStorage
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserRole(''); // Reset userRole to an empty string
    // You may want to clear localStorage or sessionStorage here
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};