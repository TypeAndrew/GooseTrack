import { ToastContainer } from 'react-toastify';
import classNames from 'classnames';
import styles from './MainLayout.module.css';
import { Sidebar } from './SlideBar/SlideBar';

export const Layout = ({ children }) => {
  return (
    <>
      <div className={classNames(styles.mainlayout)} > 
        <Sidebar />

        <main
        >
          <div>{children}</div>
        </main>
      </div>

      <ToastContainer />

    </>
  );
};