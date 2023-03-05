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
import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";

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
  const saveFood = async (food) => {
    console.log("uid:", user);
    food.uid = user;
    // Save to database
    const docRef = await addDoc(collection(db, "foods"), food);
    food.id = docRef.id;
    setFoods([...foods, food]);
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
