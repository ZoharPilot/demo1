// src/context/UserContext.js
import React, { createContext, useContext } from 'react';
import { useUser } from '../hooks/useUser'; // עדכון הנתיב

const UserContext = createContext();

export const UserProvider = ({ userId, children }) => {
  const { user, loading, error } = useUser(userId);

  return (
    <UserContext.Provider value={{ user, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
