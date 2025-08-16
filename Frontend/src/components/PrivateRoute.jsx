// src/components/PrivateRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { token, loading } = useAuth();

  if (loading) return <p>Loading...</p>;

  return token ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;
