/**
 * @typedef TFood
 * @property {string} id
 * @property {string} name
 * @property {string} description
 * @property {HTMLImageElement} photo
 */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useUser } from "./userContext";
import { db, storage } from "../firebase-config";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";

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
    if (user) {
      const q = query(collection(db, "foods"), where("uid", "==", user));
      const querySnapshot = await getDocs(q);
      const loadedFoods = [];
      querySnapshot.forEach((doc) => {
        loadedFoods.push({ ...doc.data(), id: doc.id });
      });
      setFoods(loadedFoods);
    }
  }, [user]);

  /**
   * Save food
   * @param {TFood} food
   */
  const saveFood = async (food) => {
    if (user) {
      food.uid = user;
      console.log(food)
      // Save image file
      const fileRef = ref(storage, `test`);
      const uploadTask = uploadBytesResumable(fileRef, food.photo);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.error(error);
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            console.log("File available at", downloadURL);
            // Save to database

            const docRef = await addDoc(collection(db, "foods"), {
              ...food,
              photo: downloadURL,
            });
            food.id = docRef.id;
            setFoods([...foods, food]);
          });
        }
      );
    }
  };

  /** Reset foods state array */
  const resetFoods = () => setFoods([]);

  useEffect(() => {
    if (user) loadFoods();
    //else resetFoods();
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
