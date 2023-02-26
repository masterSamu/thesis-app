import { createContext, useContext, useState } from "react";

/**
 * @typedef TUserContext
 * @property {object | null} user
 * @property {() => void} login
 * @property {() => void} logout
 */

/** @type {import('react').Context<TUserContext>} */
export const UserContext = createContext();

export default function UserContextProvider({ children }) {
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
    setFoods([]);
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("UserContext must be used within a UserContextProvider");
  }

  return context;
};
