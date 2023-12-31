import React, { createContext,  useState } from 'react';



export const AuthContext = createContext();

export function AuthProvider ({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);

  const login = async (username, password) => {
    try {
      const response = await fetch('http://localhost:8800/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        credentials: 'include',
        body: JSON.stringify({ username, password }),
    });
      const { token } = await response.json();
      if (token) {
        setToken(token);
        localStorage.setItem('token', token);
        setIsAuthenticated(true);
      }
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, token }}
    >
      {children}
    </AuthContext.Provider>
  );
};

