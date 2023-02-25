import { createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import Recipes from "./Recipes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/recipes",
    element: (
      <PrivateRoute>
        <Recipes />
      </PrivateRoute>
    ),
  },
]);
