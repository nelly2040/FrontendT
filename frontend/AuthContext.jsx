import React, { createContext, useState, useEffect, useContext } from 'react';
import { getCurrentUser, logout as logoutService } from '../frontend/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeUser = async () => {
      try {
        console.log('Initializing user from storage');
        
        const storedUser = localStorage.getItem('currentUser');
        console.log('Stored user:', storedUser);

        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser);
        }

        const currentUser = await getCurrentUser();
        console.log('Current user from service:', currentUser);

        if (currentUser) {
          setUser(currentUser);
          localStorage.setItem('currentUser', JSON.stringify(currentUser));
        }
      } catch (error) {
        console.error('Error initializing user:', error);
        setUser(null);
        localStorage.removeItem('currentUser');
      } finally {
        setIsLoading(false);
      }
    };

    initializeUser();
  }, []);

  const login = (userData) => {
    console.log('Logging in user:', userData);
    setUser(userData);
    localStorage.setItem('currentUser', JSON.stringify(userData));
  };

  const logout = () => {
    console.log('Logging out user');
    logoutService();
    setUser(null);
    localStorage.removeItem('currentUser');
  };

  if (isLoading) {
    return <div>Loading...</div>; // Or a spinner
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};