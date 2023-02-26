/**
 * @typedef TFood
 * @property {string} id
 * @property {string} name
 * @property {string} description
 * @property {file} photo
 */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useUser } from "./userContext";

/**
 * @typedef TFoodContext
 * @property {[TFood]} foods
 * @property {() => void} loadFoods
 * @property {() => void} saveFood
 * @property {{isLoading: boolean,
 * error: {message: string} | null}} status
 */

/** @type {import('react').Context<TFoodContext>} */
export const FoodContext = createContext();

export default function FoodContextProvider({ children }) {
  const [foods, setFoods] = useState([]);
  const [status, setStatus] = useState({ isLoading: false, error: null });
  const { user } = useUser();

  /** Load foods from database */
  const loadFoods = useCallback(() => {
    setStatus({ ...status, isLoading: true });
    setFoods([
      ...foods,
      {
        id: "123",
        name: "Pizza",
        description: "Pepperoni pizza juustolla",
        photo:
          "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
      },
      {
        id: "1234",
        name: "Burger",
        description: "Cheese burger with double melting cheese",
        photo:
          "https://images.unsplash.com/photo-1605789538467-f715d58e03f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      },
    ]);
    setStatus({ ...status, isLoading: false });
  }, [user]);

  /**
   * Save food
   * @param {TFood} food
   */
  const saveFood = (food) => {
    setStatus({ ...status, isLoading: true });
    setFoods([...foods, food]);
    setStatus({ ...status, isLoading: false });
  };

  /** Reset foods state array */
  const resetFoods = () => setFoods([]);

  useEffect(() => {
    if (user) loadFoods();
    else resetFoods();
  }, [user]);

  return (
    <FoodContext.Provider
      value={{ foods, loadFoods, saveFood, resetFoods, status }}
    >
      {children}
    </FoodContext.Provider>
  );
}

export const useFood = () => {
  const context = useContext(FoodContext);

  if (context === undefined) {
    throw new Error("useFood must be used within a FoodContextProvider");
  }

  return context;
};
