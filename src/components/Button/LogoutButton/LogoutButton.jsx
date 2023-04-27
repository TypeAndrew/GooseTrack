import { useState } from 'react';
import { logOut } from 'Redux/auth/authOperations';
import { ReactComponent as IconLogout } from '../../../images/icons/icon-logout.svg';
import styles from './LogoutButton.module.css';
import { useDispatch } from 'react-redux';

export const LogoutButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const onClick = async (values, actions) => {
    setIsLoading(true);
    await dispatch(logOut());
    setIsLoading(false);};
  

  return (
    <>
      <button type="button" onClick={onClick} className={styles.logButton} disabled={isLoading}>
        Log out
        <IconLogout className={styles.logButton_icon} />
      </button>
    </>
  );
};
