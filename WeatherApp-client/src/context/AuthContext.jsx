import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Minimal placeholder auth state for local dev if real context is missing.
  const [user, setUser] = useState(null);
  const logout = () => setUser(null);
  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, setUser, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    // Fallback for components that import useAuth but aren't wrapped by a provider
    return { user: null, logout: () => {}, isAuthenticated: false };
  }
  return ctx;
};

export default AuthContext;
