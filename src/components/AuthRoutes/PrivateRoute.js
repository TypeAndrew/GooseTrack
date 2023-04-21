import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { selectAuthToken } from '../../Redux/auth/auth.selector';

export const PrivateRoute = () => {
  const token = useSelector(selectAuthToken);

  return token ? <Outlet /> : <Navigate to="/" replace />;
};
