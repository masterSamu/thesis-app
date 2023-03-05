import { createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import Foods from "./Foods";
import AddFood from "./Foods/AddFood";
import BrowseFoods from "./Foods/BrowseFoods";
import Join from "./Join";
import FoodContextProvider from "../context/foodContext";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  { path: "/join", element: <Join /> },
  {
    path: "/foods",
    element: (
      <PrivateRoute>
        <FoodContextProvider>
          <Foods />
        </FoodContextProvider>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/foods/browse",
        element: (
          <PrivateRoute>
            <FoodContextProvider>
              <BrowseFoods />
            </FoodContextProvider>
          </PrivateRoute>
        ),
      },
      {
        path: "/foods/add",
        element: (
          <PrivateRoute>
            <FoodContextProvider>
              <AddFood />
            </FoodContextProvider>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
