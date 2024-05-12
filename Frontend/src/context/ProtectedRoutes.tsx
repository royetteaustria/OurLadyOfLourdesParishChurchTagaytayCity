import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';

import { useState, useEffect } from 'react';

interface ProtectedRouteProps {
  allowedRoles: string[];
  allowedPaths: string[];
}

const ProtectedRoute = ({ allowedRoles, allowedPaths }: ProtectedRouteProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const authToken = localStorage.getItem('authToken');
        const role = localStorage.getItem('userRole');

        if (authToken && role) {
          setIsAuthenticated(true);
          setUserRole(role);

          // Check if the current path is allowed for the user's role
          if (allowedRoles.includes(role)) {
            // Check if the current path matches any of the allowed paths
            const isAllowedPath = allowedPaths.some((path) => {
              // If the path contains a parameter, use a regular expression to match the path
              if (path.includes(':')) {
                const pathRegex = new RegExp(`^${path.replace(/:(\w+)/, '(\\w+)')}$`);
                return pathRegex.test(location.pathname);
              } else {
                return location.pathname === path;
              }
            });

            if (isAllowedPath) {
              navigate(location.pathname);
            } else {
              // Redirect to the default page for the user's role
              if (role === 'Event Administrator') {
                navigate('/WeddingAdmin/Dashboard');
              } else if (role === 'System Administrator') {
                navigate('/systemAdmin/WeddingDashboard');
              } else if (role === 'Parish Secretary') {
                navigate('/ParishSecretary/Dashboard');
              }
            }
          } else {
            // Redirect to an error page or a 403 Forbidden page
            navigate('*');
          }
        } else {
          setIsAuthenticated(false);
          navigate('/');
        }
      } catch (error) {
        // Token is expired or invalid, clear the local storage and redirect to the login page
        localStorage.removeItem('authToken');
        localStorage.removeItem('userRole');
        setIsAuthenticated(false);
        navigate('/signIn');
      }
    };
    checkAuth();
  }, [navigate, allowedRoles, allowedPaths, location.pathname]);

  if (!isAuthenticated) {
    return <Navigate to="/signIn" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;