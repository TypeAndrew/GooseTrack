import { ThemeToggler } from 'components/ThemeToggler/ThemeToggler';
import { Avatar } from '../Avatar/Avatar';
import { UserInfo } from 'components/Layout/UserInfo/UserInfo'
import { HeaderPage, Wrapper, MenuOpen, ActivePage, ActivePageName, CalendarLogoImg, Text, SpanStyled } from './Header.styled';
import { ReactComponent as Burger } from '../../../images/icons/menu.svg';
import { useLocation, useParams } from 'react-router-dom';
import { getTasks } from 'Redux/tasks/tasks.selectors';
import { useSelector } from 'react-redux';
import GooseLogo from '../../../images/icons/calendar-logo.png';

export const Header = ({openMenu}) => {
  const location = useLocation();

  let isActivePage = location.pathname.split('/')[1];
  const paramsDay = useParams().currentDay;

  
  const tasks = useSelector(getTasks);
  
  
  const haveTasksToday = () => {
    const tasksForToday = tasks.filter(task => task.date === paramsDay);
    if (tasksForToday.length > 0) {  
      return true;
    }
    
  };
  
  if (isActivePage === 'calendar') {
    isActivePage = 'Calendar';
  } else if (isActivePage === 'account') {
    isActivePage = 'User Profile';
  }

  return (
    <HeaderPage> 
      <ActivePage> 
      {haveTasksToday() && <CalendarLogoImg src={GooseLogo} alt="Goose" />}         
          <div>
            {<ActivePageName>{isActivePage}</ActivePageName>}
            {haveTasksToday() && (<Text>
                <SpanStyled>Let go</SpanStyled> of the past and focus on the
                present!
              </Text>)}
          </div>
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
