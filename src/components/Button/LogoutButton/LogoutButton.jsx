import { ReactComponent as IconLogout } from '../../../images/icons/icon-logout.svg';
import styles from './LogoutButton.module.css';

export const LogoutButton = () => {
  return (
    <>
      <button type="button" className={styles.logButton}>
        Log out
        <IconLogout className={styles.logButton_icon} />
      </button>
    </>
  );
};
