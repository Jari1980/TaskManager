import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { routes } from "./routes";

export default function ProtectedRoute() {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to={routes.login()} replace />;
  }

  return <Outlet />;
}