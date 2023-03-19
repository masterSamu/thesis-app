import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useUser } from "./userContext";
import { DataStore, Storage, syncExpression } from "aws-amplify";
import { Foods as FoodModel } from "../models/index";

/**
 * @typedef TFood
 * @property {string} id
 * @property {string} name
 * @property {string} description
 * @property {file} photo
 */

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
  const loadFoods = useCallback(async () => {
    try {
      //await DataStore.clear();
      const response = await DataStore.query(FoodModel);
      console.log(response);
      if (response) {
        setFoods(response);
      }
    } catch (error) {
      console.error("query error", error);
    }
  }, [user]);

  /**
   * Save food
   * @param {TFood} food
   */
  const saveFood = async (food) => {
    try {
      // Save food to database
      const savedFood = await DataStore.save(
        new FoodModel({
          name: food.name,
          description: food.description,
          uid: user,
        })
      );
      // Load file from storage
      const photoFile = await Storage.get(savedFood.name);
      setFoods([...foods, { ...savedFood, photo: photoFile }]);
    } catch (error) {
      console.error(error);
    }
  };

  /** Reset foods state array */
  const resetFoods = () => setFoods([]);

  const loadPhoto = async (name) => {
    return await Storage.get(name);
  };

  useEffect(() => {
    if (user) loadFoods();
    else resetFoods();
  }, [user]);

  return (
    <FoodContext.Provider
      value={{ foods, loadFoods, saveFood, resetFoods, loadPhoto }}
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
