import { createContext, useContext, useState } from "react";
import { Auth } from "aws-amplify";

/**
 * @typedef TUserContext
 * @property {object | null} user
 * @property {() => void} login
 * @property {() => void} logout
 * @property {() => void} createUser
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
  const login = async (credentials) => {
    // Handle login
    try {
      const response = await Auth.signIn(credentials.email, credentials.password);
      console.log(response)
      if (response?.userSub) {
        setUser(response.userSub);
        localStorage.setItem("user", response.userSub);
      }
    } catch (error) {
      console.error(error);
    }
  };

  /** Logout user from system */
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  /**
   *
   * @param {{username: string, password: string}} user
   */
  const createUser = async (credentials) => {
    try {
      const response = await Auth.signUp(credentials);
      if (response?.userSub) {
        setUser(response.userSub);
        localStorage.setItem("user", response.userSub);
      }
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserContext.Provider value={{ user, login, logout, createUser }}>
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
