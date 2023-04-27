import { UserNav } from '../UserNav/UserNav';
import { LogoutButton } from '../../Button/LogoutButton/LogoutButton'
import { ReactComponent as GooseLogo } from '../../../images/icons/goose-logo.svg';
import { ReactComponent as IconClose } from '../../../images/icons/icon-close.svg';
import { ReactComponent as Burger } from '../../../images/icons/menu.svg';
import styles from './SideBar.module.css';

export const SideBar = ({activePage}) => {

  return (
    <>
    <button className={styles.burgerBtn} type="button">
        <Burger className={styles.burger} />
      </button>
      <div className={styles.container}>
        <div>
          <div className={styles.header}>
            <div className={styles.logoContainer}>
              <GooseLogo className={styles.logo} />
              <h1 className={styles.heading}>
                G<span className={styles.headingSpecial}>oo</span>seTrack
              </h1>
            </div>
            <button className={styles.button} type="button">
              <IconClose className={styles.close} />
            </button>
          </div>
          <UserNav activePage={activePage}/>

        </div>
        <LogoutButton />
      </div>
    </>
  );
};