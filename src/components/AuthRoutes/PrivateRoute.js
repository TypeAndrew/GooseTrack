import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { selectToken } from '../../Redux/selectors';
import { Layout } from 'components/Layout/MainLayout';

export const PrivateRoute = () => {
  const token = useSelector(selectToken);

  return token ? <><Layout><Outlet/></Layout></> : <Navigate to="/login" replace />;
};
