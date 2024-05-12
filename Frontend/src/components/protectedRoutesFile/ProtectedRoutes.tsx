import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  element: JSX.Element;
  isAuthenticated: boolean;
  role: string;
  allowedRoles: string[];
  redirectPath: string;

}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  element,
  isAuthenticated,
  role,
  allowedRoles,
  redirectPath,
}) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (allowedRoles.includes(role)) {
    return element;
  } else {
    return <Navigate to={redirectPath} />;
  }
};

export default ProtectedRoute;
