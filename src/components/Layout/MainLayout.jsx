import { ToastContainer } from 'react-toastify';
import classNames from 'classnames';
import styles from './MainLayout.module.css';
import { Sidebar } from './SlideBar/SlideBar';
import { Outlet } from 'react-router-dom';

export const Layout = ({ children }) => {
  return (
    <>
      <div className={classNames(styles.mainlayout)} > 
        <Sidebar />

        <main
        >
          <div><Outlet /></div>
        </main>
      </div>

      <ToastContainer />

    </>
  );
};