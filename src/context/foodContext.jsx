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
 */

/** @type {import('react').Context<TFoodContext>} */
export const FoodContext = createContext();

export default function FoodContextProvider({ children }) {
  const [foods, setFoods] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    if (user) loadFoods();
  }, [user]);

  /** Load foods from database */
  const loadFoods = useCallback(() => {
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
  }, [user]);

  /**
   * Save food
   * @param {TFood} food
   */
  const saveFood = (food) => {
    setFoods([...foods, food]);
  };

  return (
    <FoodContext.Provider value={{ foods, loadFoods, saveFood }}>
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
