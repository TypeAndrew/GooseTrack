import styles  from './Header.module.css';

export const Header = ({isActivPage}) => {

  return (
    <div className={styles.header}> 
      <div className={styles.headerPage}>         
        {isActivPage===false
        ? <div className={styles.headerPage}>
            <p>Calendar</p>       
        </div>                
        :<p className={styles.titel}>User Profile</p>}          
      </div>       
      <div className={styles.headerPage}>          
      </div>                      
    </div>
  );     
};