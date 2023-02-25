import { createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import Recipes from "./Recipes";
import AddRecipe from "./Recipes/AddRecipe";
import BrowseRecipes from "./Recipes/BrowseRecipes";
import Join from "./Join";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  { path: "/join", element: <Join /> },
  {
    path: "/recipes",
    element: (
      <PrivateRoute>
        <Recipes />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/recipes/browse",
        element: (
          <PrivateRoute>
            <BrowseRecipes />
          </PrivateRoute>
        ),
      },
      {
        path: "/recipes/add",
        element: (
          <PrivateRoute>
            <AddRecipe />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
