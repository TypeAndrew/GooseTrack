import { ToastContainer } from 'react-toastify';
import styles from './MainLayout.module.css';

import { SideBar } from './SideBar/SideBar';
import { Header } from './Header/Header';
import { useState} from "react";
import { Outlet } from 'react-router-dom';


export const Layout = () => {
  const [isActivPage,setisActivPage]=useState(false)
  
  const changePageFalse =()=>{ 
    setisActivPage(false)
  }
  const changePageTrue =()=>{ 
    setisActivPage(true)
  }

  const activePage=[
    changePageFalse,
    changePageTrue
  ]   

  return (
      <div className={styles.mainlayout} > 
        <SideBar  activePage={activePage}/>
        <div className={styles.header}>
          <Header isActivPage={isActivPage}/> 
           <main>
            <div>
              <Outlet />
            </div>
          </main>
        </div>
        <ToastContainer />
      </div>
  );
};