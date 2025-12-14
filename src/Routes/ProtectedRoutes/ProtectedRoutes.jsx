import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../../Authentication/useAuth";

const ProtectedRoutes = ({ children }) => {
  const location = useLocation();

  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoutes;
