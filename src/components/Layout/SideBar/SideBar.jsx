import { UserNav } from '../UserNav/UserNav';
import { LogoutButton } from '../../Button/LogoutButton/LogoutButton'
import { ReactComponent as GooseLogo } from '../../../images/icons/goose-logo.svg';
import { ReactComponent as IconClose } from '../../../images/icons/icon-close.svg';
import styles from './SideBar.module.css';

export const SideBar = ({activePage}) => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.header}>
          <div className={styles.logoContainer}>
            <GooseLogo className={styles.logo} />
            <h1 className={styles.heading}>
              G<span className={styles.headingSpecial}>oo</span>seTrack
            </h1>
          </div>
          <IconClose className={styles.close} />
        </div>
        <UserNav activePage={activePage}/>

      </div>
       <LogoutButton />
  </div>
  );
};