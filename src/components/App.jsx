import { PrivateRoute } from './AuthRoutes/PrivateRoute';
import { PublicRoute } from './AuthRoutes/PublicRoute';

import { Layout } from './Layout/Layout';
import { lazy, Suspense } from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const JoinPage = lazy(() => import('../pages/JonPage/JoinPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));

const TasksPage = lazy(() => import('../pages/TasksPage/TasksPage'));
const CalendarPage = lazy(() => import('../pages/CalendarPage/CalendarPage'));

export const App = () => {
  
  return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
         // justifyContent: 'center',
          alignItems: 'stretch',
          flexDirection: 'row',
          fontSize: 20,
          //color: '#010101',
          listStyleType: 'none',
          
          //alignItems: 'stretch',
          //padding: '10px 10px',
        }}
    >
  
    <BrowserRouter basename="GooseTrack">
      <Layout>
          <Suspense fallback={<p>Loading...</p>}>
            <Routes>
              <Route path="" element={<PublicRoute />}>
                <Route index element={<Navigate to="/login" />} />
                  <Route path="/join" element={<JoinPage />} />
                  <Route path="/login" element={<LoginPage />} />
                </Route > 
                <Route path="" element={<PrivateRoute />}>
                  
                <Route path="/calendar" element={<CalendarPage />} />
                <Route path="/tasks" element={<TasksPage />} />
              </Route>    
            </Routes>
                
              

          </Suspense>
      </Layout>
    </BrowserRouter>
    </div>
  );

};