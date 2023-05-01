import { ThemeToggler } from 'components/ThemeToggler/ThemeToggler';
import { Avatar } from '../Avatar/Avatar';
import { UserInfo } from 'components/Layout/UserInfo/UserInfo'
import { HeaderPage, Wrapper, MenuOpen, ActivePage, ActivePageName } from './Header.styled';
import { ReactComponent as Burger } from '../../../images/icons/menu.svg';
import { useLocation } from 'react-router-dom';


export const Header = ({openMenu}) => {
  const location = useLocation();
  let isActivePage = location.pathname.split('/')[1];

  if (isActivePage === 'calendar') {
    isActivePage = 'Calendar';
  } else if (isActivePage === 'account') {
    isActivePage = 'User Profile';
  }

  return (
    <HeaderPage> 
      <ActivePage>         
        <ActivePageName>{isActivePage}</ActivePageName>        
      </ActivePage> 
          <MenuOpen onClick={() => openMenu(true)}>
            <Burger />
          </MenuOpen>  
      <Wrapper> 
        <ThemeToggler/> 
        <UserInfo/>        
        <Avatar/>
      </Wrapper>                      
    </HeaderPage>
  );     
};
