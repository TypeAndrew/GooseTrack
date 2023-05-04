import { ToastContainer } from 'react-toastify';
import { Container, Wrapper } from './MainLayout.styled';

import { SideBar } from './SideBar/SideBar';
import { Header } from './Header/Header';
import { useState} from "react";
import { Outlet } from 'react-router-dom';


export const Layout = () => {
  const [isMobalMenuOpen, setIsMobalMenuOpen] = useState(false);

  return (
      <>
        <Container>
          <SideBar  
            isMobalMenuOpen={isMobalMenuOpen}
            closeMobalMenu={setIsMobalMenuOpen}
          />
          <Wrapper>
            <Header openMenu={setIsMobalMenuOpen}/> 
            <main>
                <Outlet />
            </main>
          </Wrapper>
          
          <ToastContainer />

        </Container>
      </>
  );
};