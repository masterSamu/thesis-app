import { createContext, useState } from "react";

/**
 * @typedef TAppContext
 * @property {object} user
 * @property {void} login
 * @property {void} logout
 */

/** @type {import('react').Context<TAppContext>} */
export const AppContext = createContext();

export default function appContextProvider({ children }) {
  const [user, setUser] = useState(null);

  /**
   * Login user to system
   * @param {{email: string, password: string}} credentials
   */
  const login = (credentials) => {
    // Handle login
    setUser(credentials)
  };

  /** Logout user from system */
  const logout = () => {
    setUser(null);
  };

  return (
    <AppContext.Provider value={{ user, login, logout }}>
      {children}
    </AppContext.Provider>
  );
}
