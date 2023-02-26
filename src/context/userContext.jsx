import { createContext, useContext, useState } from "react";

/**
 * @typedef TUserContext
 * @property {object | null} user
 * @property {() => void} login
 * @property {() => void} logout
 * @property {{isLoading: boolean,
 * error: {message: string} | null}} status
 */

/** @type {import('react').Context<TUserContext>} */
export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [status, setStatus] = useState({ isLoading: false, error: null });

  /**
   * Login user to system
   * @param {{email: string, password: string}} credentials
   */
  const login = (credentials) => {
    // Handle login
    setStatus({ ...status, isLoading: true });
    setUser("qwerty");
    localStorage.setItem("user", "qwerty");
    setStatus({ ...status, isLoading: false });
  };

  /** Logout user from system */
  const logout = () => {
    setUser(null);
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
