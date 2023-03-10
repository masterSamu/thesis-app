import {  useUser } from "../context/userContext";
import { Navigate } from "react-router-dom";

/**
 * Filter component to handle access to routes,
 *  which requires authenticated user.
 * Navigates to "/" route if user is not logged in.
 * @param {{JSX.Element}} props
 * @returns {JSX.Element}
 */
export default function PrivateRoute({ children }) {
  const { user } = useUser();

  if (user === null) {
    return <Navigate to="/" replace />;
  } else {
    return children;
  }
}
