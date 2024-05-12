import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../components/hooks/useAuth";



interface AuthInfo {
  auth: {
    roles?: string[];
    user?: any; // Adjust the type according to your user object structure
  };
}

interface RequireAuthProps {
  allowedRoles: string[];
}

const RequireAuth: React.FC<RequireAuthProps> = ({ allowedRoles }) => {
  const { auth } = useAuth() as AuthInfo; // Using "as" to assert the type
  const location = useLocation();
  
  return (
    auth?.roles?.find((role: string) => allowedRoles?.includes(role))
      ? <Outlet />
        : <Navigate to="*" state={{ from: location }} replace />
  );
}

export default RequireAuth;
