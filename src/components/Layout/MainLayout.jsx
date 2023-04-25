import { ToastContainer } from 'react-toastify';
import classNames from 'classnames';
import styles from './MainLayout.module.css';
import { SideBar } from './SideBar/SideBar';
import { Header } from './Header/Header';
import { useState} from "react";

export const Layout = ({ children }) => {
  const [isActivPage,setisActivPage]=useState(true)
  
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
      <div className={classNames(styles.mainlayout)} > 
      <SideBar  activePage={activePage}/>
      <div>
        <Header isActivPage={isActivPage}/> 
        
        <main
        >
          <div>{children}</div>
        </main>
      </div>

      <ToastContainer />
      </div>
  );
};