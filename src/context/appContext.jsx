import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * @typedef TAppContext
 * @property {object} user
 * @property {() => void} login
 * @property {() => void} logout
 */

/** @type {import('react').Context<TAppContext>} */
export const AppContext = createContext();

export default function appContextProvider({ children }) {
  const [user, setUser] = useState(localStorage.getItem("user"));

  /**
   * Login user to system
   * @param {{email: string, password: string}} credentials
   */
  const login = (credentials) => {
    // Handle login
    setUser("qwerty");
    localStorage.setItem("user", "qwerty");
  };

  /** Logout user from system */
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AppContext.Provider value={{ user, login, logout }}>
      {children}
    </AppContext.Provider>
  );
}
