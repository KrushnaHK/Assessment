// Context for user authentication
// AuthContext.js
import React, { createContext, useState, useContext } from 'react';

// Create the AuthContext
const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Store the current user

  // Function to log in a user
  const login = (userData) => {
    setUser(userData);
  };

  // Function to log out the user
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for accessing the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
