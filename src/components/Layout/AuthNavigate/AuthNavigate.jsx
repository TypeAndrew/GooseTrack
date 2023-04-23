import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { selectAuthToken } from '../../../Redux/auth/auth.selector';
import { logoutAction } from '../../../Redux/auth/auth.slice';
import { Button } from '../../Button/Button';
import classNames from 'classnames';
import styles from './AuthNavigate.module.css';
 
const getActiveClassName = ({ isActive }) => {

   return isActive ? styles.navButtonActive : styles.navButton;
};

export const Navigation = () => {
  const dispatch = useDispatch();

  const token = useSelector(selectAuthToken);


  return (
    <div >
      <div className={classNames(styles.navigation)}>
        {!token && <h2>Please log in!</h2>}
        <div>{token?.user.email}</div>
        <div>{token?.user.name}</div>

        {token ? (
          <>
         
            <NavLink to="contacts" end className={getActiveClassName}>
       
                Contacts
           
            </NavLink>

            <Button className="btn-danger mt-5" onClick={() => dispatch(logoutAction())}>Log Out</Button>
          </>
        ) : (
            <>
            <NavLink to="home" className={getActiveClassName}>

                  Home
      
            </NavLink>
            <NavLink to="login" className={getActiveClassName}>
              
                Login
        
            </NavLink>

            <NavLink to="register" className={getActiveClassName}>
       
                Register
          
              </NavLink>
              
            <NavLink to="account" className={getActiveClassName}>
           
                  My account
      
            </NavLink>

            <NavLink to="calendar" className={getActiveClassName}>
            
                Calendar
  
            </NavLink>
            <NavLink to="users" end className={getActiveClassName}>
     
                  Users
        
            </NavLink> 
              
          </>
        )}
      </div>
    </div>
  );
};
