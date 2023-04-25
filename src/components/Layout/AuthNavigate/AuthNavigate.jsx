import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { logOut } from '../../../Redux/auth/authOperations';
import { Button } from '../../Button/Button';
import classNames from 'classnames';
import styles from './AuthNavigate.module.css';
import { selectToken } from 'Redux/selectors';

const getActiveClassName = ({ isActive }) => {
  return isActive ? styles.navButtonActive : styles.navButton;
};

export const Navigation = () => {
  const dispatch = useDispatch();

  const token = useSelector(selectToken);

  return (
    <div>
      <div className={classNames(styles.navigation)}>
        {!token && <h2>Please log in!</h2>}

        {token && (
          <>
            <NavLink to="account" className={getActiveClassName}>
              My account
            </NavLink>

            <NavLink to="calendar" className={getActiveClassName}>
              Calendar
            </NavLink>

            <Button
              className="btn-danger mt-5"
              onClick={() => dispatch(logOut())}
            >
              Log Out
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
