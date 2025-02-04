import React, { createContext, useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';

// Create a mock AuthContext
const AuthContext = createContext();

// AuthProvider component to wrap the app
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Simulated login logic
    setUser(userData);
  };

  const logout = () => {
    // Simulated logout logic
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use auth context
export function useAuth() {
  return useContext(AuthContext);
}

// PrivateRoute component
function PrivateRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default PrivateRoute;