import { NavLink } from 'react-router-dom';
import { ReactComponent as IconUser } from '../../../images/icons/icon-user.svg';
import { ReactComponent as IconCalendar } from '../../../images/icons/icon-calendar.svg';
import styles from './UserNav.module.css';

export const UserNav = ({activePage}) =>{
    return (
        <>
            <h3 className={styles.userTitle}>User Panel</h3>
            <div className={styles.userNav}>
            <NavLink
                onClick={activePage[1]}   
                to="/account"
                className={({ isActive }) =>
                isActive ? styles.activeLink : styles.navLink
                }
            >
            <IconUser
                className={({ isActive }) =>
                isActive ? styles.activeIcon : styles.iconlog
                }
            />
            My Account
            </NavLink>

            <NavLink
                onClick={activePage[0]}
                to="/calendar"
                className={({ isActive }) =>
                isActive ? styles.activeLink : styles.navLink
                }
            >
            <IconCalendar
                className={({ isActive }) =>
                isActive ? styles.activeIcon : styles.iconlog
                }
            />
            Calendar
            </NavLink>
            </div>
        </>
    )
}