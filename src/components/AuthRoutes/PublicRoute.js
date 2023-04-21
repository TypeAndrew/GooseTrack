import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { selectAuthToken } from '../../Redux/auth/auth.selector';

export const PublicRoute = () => {
  const token = useSelector(selectAuthToken);
  const location = useLocation();

  return token ? <Navigate to={location?.state?.from ?? '/tasks'} replace /> : <Outlet />;
};