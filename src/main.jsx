import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index";
import UserContextProvider from "./context/userContext";
import "./main.css"
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>
);
