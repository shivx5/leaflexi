import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../Authentication/useAuth";

function HostRoute() {
  const { isLoggedIn, role } = useAuth();

  if (!isLoggedIn) return <Navigate to="/login" replace />;
  if (role !== "host") return <Navigate to="/" replace />;

  return <Outlet />;
}

export default HostRoute;
