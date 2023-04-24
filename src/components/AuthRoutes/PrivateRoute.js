import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { selectToken } from '../../Redux/selectors';

export const PrivateRoute = () => {
  const token = useSelector(selectToken);

  return token ? <Outlet /> : <Navigate to="/" replace />;
};
