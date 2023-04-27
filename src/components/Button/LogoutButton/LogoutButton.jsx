import { useState } from 'react';
import { logOut } from 'Redux/auth/authOperations';
import { ReactComponent as IconLogout } from '../../../images/icons/icon-logout.svg';
import styles from './LogoutButton.module.css';
import { useDispatch } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export const LogoutButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const onClick = async (values, actions) => {
    setIsLoading(true);
    await dispatch(logOut());
    setIsLoading(false);
  };

  const confirmation = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className={styles.modalWrapper}>
            <h1>Are you sure?</h1>
            <p className={styles.modalText}>You really want out?</p>
            <div className={styles.btnWrapper}>
              <button className={styles.modalBtn} onClick={onClose}>
                No
              </button>
              <button
                className={styles.modalBtn}
                onClick={() => {
                  onClick();
                  onClose();
                }}
              >
                Yes
              </button>
            </div>
          </div>
        );
      },
    });
  };

  return (
    <>
      <button
        type="button"
        onClick={confirmation}
        className={styles.logButton}
        disabled={isLoading}
      >
        Log out
        <IconLogout className={styles.logButton_icon} />
      </button>
    </>
  );
};
