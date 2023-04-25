import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { selectToken } from '../../Redux/selectors';

export const PublicRoute = () => {
  const token = useSelector(selectToken);
  const location = useLocation();

  return !token ? <Outlet /> : <Navigate to={location?.state?.from ?? '/account'} replace />;
};