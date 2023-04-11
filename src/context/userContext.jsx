import { createContext, useContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase-config";

/**
 * @typedef TUserContext
 * @property {import("firebase/auth").UserCredential.User | null} user
 * @property {() => void} login
 * @property {() => void} logout
 * @property {() => void} createAccount
 */

/** @type {import('react').Context<TUserContext>} */
export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(localStorage.getItem("user"));

  /**
   * Login
   * @param {{email: string, password: string}} credentials
   */
  const login = async (credentials) => {
    signInWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then((userCredential) => {
        setUser(userCredential.user.uid);
        localStorage.setItem("user", userCredential.user.uid);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  /** Logout user */
  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        localStorage.removeItem("user");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  /**
   * Create new user
   * @param {{email: string, password: string}} credentials
   * @returns {import("firebase/auth").UserCredential.User | {error: string}}
   */
  const createUser = async (credentials) => {
    createUserWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    )
      .then((userCredential) => {
        setUser(userCredential.user);
        localStorage.setItem("user", userCredential.user.uid);
      })
      .catch((error) => {
        console.error(error.message);
      });
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
