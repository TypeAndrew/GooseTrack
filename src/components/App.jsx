import { PrivateRoute } from './AuthRoutes/PrivateRoute';
import { PublicRoute } from './AuthRoutes/PublicRoute';

import { lazy, Suspense, useEffect } from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from 'Redux/auth/useAuth';
import { refreshUser } from 'Redux/auth/authOperations';
import { SpinnerGrid } from './Spinner/Grid';

const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const AccountPage = lazy(() => import('../pages/AccountPage/AccountPage'));
const CalendarPage = lazy(() => import('../pages/CalendarPage/CalendarPage'));
const ChooseMonth = lazy(() => import('../components/ChooseMonth/ChooseMonth'));
const ChooseDay = lazy(() => import('../components/ChooseDay/ChooseDay'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <SpinnerGrid/>
  ) : (

    <BrowserRouter basename="GooseTrack">
      <Suspense fallback={<SpinnerGrid/>}>
        <Routes>
          <Route path="" element={<PublicRoute />}>
            <Route index element={<Navigate to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>

          <Route path="" element={<PrivateRoute />}>
            <Route index element={<Navigate to="/account" />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/calendar" element={<CalendarPage />}>
              <Route
                index
                element={<Navigate to="/calendar/month/:currentDate" />}
              />
              <Route
                path="/calendar/month/:currentDate"
                element={<ChooseMonth />}
              />
              <Route path="/calendar/day/:currentDay" element={<ChooseDay />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );

};
