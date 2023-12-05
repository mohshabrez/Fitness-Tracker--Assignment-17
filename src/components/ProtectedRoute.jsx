import { useSelector } from "react-redux";
import { Navigate } from "react-router";

export const ProtectedRoute = ({ children }) => {
  const loggedIn = useSelector((state) => state.authState.isLoggedIn);

  return loggedIn ? <>{children}</> : <Navigate to="/login" />;
};
