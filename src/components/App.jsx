import HomePage from 'pages/HomePage/HomePage';
import { PrivateRoute } from './AuthRoutes/PrivateRoute';
import { PublicRoute } from './AuthRoutes/PublicRoute';

import { Layout } from './Layout/MainLayout';
import { lazy, Suspense } from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const AccountPage = lazy(() => import('../pages/AccountPage/AccountPage'));
const ColumnsTasksList = lazy(() => import('../pages/TasksPage/TasksPage'));
const CalendarPage = lazy(() => import('../pages/CalendarPage/CalendarPage'));

export const App = () => {
  
  return (
      // <div
        // style={{
        //   height: '100vh',
        //   display: 'flex',
        //  // justifyContent: 'center',
        //   alignItems: 'stretch',
        //   flexDirection: 'row',
        //   fontSize: 20,
        //   //color: '#010101',
        //   listStyleType: 'none',
          
          //alignItems: 'stretch',
          //padding: '10px 10px',
          // }}
    // >
  
    <BrowserRouter basename="GooseTrack">
        
          <Suspense fallback={<p>Loading...</p>}>
            <Routes>
              <Route path="" element={<PublicRoute />}>
              <Route index element={<Navigate to="/login" />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/account" element={<AccountPage />} />
                <Route path="/calendar" element={<CalendarPage />} />
                <Route path="/users" element={<ColumnsTasksList />} />
              
                </Route > 
                <Route path="" element={<PrivateRoute />}>
                  
                <Route path="/calendar" element={<CalendarPage />} />
                <Route path="/calendar/day/:currentDay" element={<ColumnsTasksList />} />
              </Route>    
            </Routes>
            
              

          </Suspense>
        
    </BrowserRouter>
    /* </div> */
  );

};