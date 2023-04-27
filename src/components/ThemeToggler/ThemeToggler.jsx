import { useState, useEffect } from 'react';
import { ReactComponent as LogoMoon } from '../../images/icons/moon.svg';
import { ReactComponent as LogoSun } from '../../images/icons/sun.svg';
import styles from './ThemeToggler.module.css'

export const  ThemeToggler =()=> { 
    const [currentTheme, setCurrentTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme !== null ? savedTheme : 'light';
      });
    
      useEffect(() => {
        const body = document.querySelector('body');
        body.classList.toggle('dark-theme', currentTheme === 'dark');
    
        localStorage.setItem('theme', currentTheme);
      }, [currentTheme]);

    return (
      <button className={styles.button} type="button" onClick={() => setCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark')}>
        {currentTheme==='light'
        ?<LogoMoon/> 
        :<LogoSun/> }     
      </button> 
    )  
  }

  