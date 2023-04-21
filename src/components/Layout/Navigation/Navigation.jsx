//import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { selectAuthToken } from '../../../Redux/auth/auth.selector';
import { logoutAction } from '../../../Redux/auth/auth.slice';
import { Button } from '../../Button/Button';

const getActiveClassName = ({ isActive }) => {
  return isActive ? 'btn nav-btn btn-light active' : 'btn nav-btn btn-light';
};

export const Navigation = () => {
  const dispatch = useDispatch();

  const token = useSelector(selectAuthToken);


  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <div className="d-flex flex-column justify-content-between">
        {!token && <h2 className="h3 mb-4">Please log in!</h2>}
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
            <NavLink to="login" className={getActiveClassName}>
              Login
            </NavLink>

            <NavLink to="join" className={getActiveClassName}>
              Join
            </NavLink>
                        
          </>
        )}
      </div>
    </div>
  );
};
