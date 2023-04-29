import { ToastContainer } from 'react-toastify';
import { Container, Wrapper } from './MainLayout.styled';

import { SideBar } from './SideBar/SideBar';
import { Header } from './Header/Header';
import { useState} from "react";
import { Outlet } from 'react-router-dom';


export const Layout = () => {
  const [isActivPage,setisActivPage]=useState(false)
  const [isMobalMenuOpen, setIsMobalMenuOpen] = useState(false);
  
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
      <>
        <Container>
          <SideBar  activePage={activePage} isMobalMenuOpen={isMobalMenuOpen}
            closeMobalMenu={setIsMobalMenuOpen}/>
          <Wrapper>
            <Header isActivPage={isActivPage} openMenu={setIsMobalMenuOpen}/> 
            <main>
                <Outlet />
            </main>
          </Wrapper>
          <ToastContainer />

        </Container>
      </>
  );
};