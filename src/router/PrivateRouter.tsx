import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface LinkProps {
  children: ReactNode;
}
export const PrivateRoute = ({ children }: LinkProps) => {
  const { state } = useLocation();

  return state?.logged ? children : <Navigate to="/login" />;
};
