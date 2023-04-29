import { NavLink } from 'react-router-dom';
import { ReactComponent as IconUser } from '../../../images/icons/icon-user.svg';
import { ReactComponent as IconCalendar } from '../../../images/icons/icon-calendar.svg';
import styles from './UserNav.module.css';

export const UserNav = ({activePage, closeMobalMenu}) =>{
    const handleCloseMobalMenu = () => {
        closeMobalMenu(false);
      };
    return (
        <>
            <h3 className={styles.userTitle}>User Panel</h3>
            <div className={styles.userNav}>
            <NavLink
                onClick={activePage[1] && handleCloseMobalMenu}   
                to="/account"
                className={({ isActive }) =>
                isActive ? styles.activeLink : styles.navLink
                }
            >
            <IconUser/>
            My Account
            </NavLink>

            <NavLink
                onClick={activePage[0] && handleCloseMobalMenu}
                to="/calendar"
                className={({ isActive }) =>
                isActive ? styles.activeLink : styles.navLink
                }
            >
            <IconCalendar/>
            Calendar
            </NavLink>
            </div>
        </>
    )
}