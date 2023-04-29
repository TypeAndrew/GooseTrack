import { ThemeToggler } from 'components/ThemeToggler/ThemeToggler';
import { UserInfo } from 'components/Layout/UserInfo/UserInfo'
import { HeaderPage, Wrapper, Overlay, MenuOpen } from './Header.styled';
import { ReactComponent as Burger } from '../../../images/icons/menu.svg';


export const Header = ({isActivPage, openMenu}) => {
  return (
    <HeaderPage> 
      <Overlay>
      <div>         
        {isActivPage===false
        ? <div>
            <p>Calendar</p>       
        </div>                
        :<p >User Profile</p>}          
      </div> 
      </Overlay>
          <MenuOpen onClick={() => openMenu(true)}>
            <Burger />
          </MenuOpen>  
      <Wrapper> 
        <ThemeToggler/> 
        <UserInfo/>        
      </Wrapper>                      
    </HeaderPage>
  );     
};
