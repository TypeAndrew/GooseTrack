import { addMonths, getDate, getMonth, getYear } from 'date-fns';
import css from './CalendarSelector.module.css';
import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { MONTNKEY } from '../constants/MONTNKEY';


const currentDay = `${getYear(Date.now())}.${getMonth(Date.now())}.${getDate(
  Date.now()
)}`;

const CalendarSelector = (props) => {
  const [time, setTime] = useState(Date.now());
  const [day, setDay] = useState('');
  const [month, setMonth] = useState(getMonth(Date.now()+1));
  const [year, setYear] = useState(getYear(Date.now()));
  const [btnBack, setBtnBack] = useState(false);
  const navigate = useNavigate();
 
  console.log(day);
  useEffect(() => {
  setDay(getDate(time));
  setYear(getYear(time));  
  navigate(`month/${year}.${month+1}`);  
  }, [month, time, year,navigate]);

  const handleChangMonthBack = () => {

    
    setMonth(getMonth(time)-1);
    
    if (getMonth(Date.now()) >= month-1 && getYear(Date.now()) >= year) {
      setBtnBack(true);
    } else {
      setBtnBack(false);
    }
    setTime(addMonths(time, -1));
    
    navigate(`month/${year}.${month}`);
  };
  const handleChangMonthForward = () => {

     
    setMonth(getMonth(time));
  
    if (getMonth(Date.now()) >= month && getYear(Date.now()) >= year) {
      setBtnBack(true);
    } else {
      setBtnBack(false);
    }
    setTime(addMonths(time, 1));
    
    navigate(`month/${year}.${month}`);
  };
  const handleCurrentPage = ({ isActive }) => {
    return isActive ? css.isActive : '';
  };

  return (
    <>
      <div className={css.calendar}>
        <div className={css.selector}>
          <span className={css.month}>
            {MONTNKEY[month]} {year}
          </span>
          <div className={css.monthchang}>
            <button
              onClick={handleChangMonthBack}
              type="button"
              disabled={btnBack}
              className={css.btn_left}
            >
              <img widt='10px' src="./left.svg" alt="L" />
            </button>
            <button
              onClick={handleChangMonthForward}
              type="button"
              className={css.btn_ringt}
            >
              <img widt='10px' src="./ringt.svg" alt="R" />
            </button>
          </div>
        </div>
        <ul className={css.viue}>
          <li>
            <NavLink
              to={`month/${year}.${month}`}
              className={data => handleCurrentPage(data) + ' ' + css.btn_changL}
            >
              Month
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`day/${currentDay}`}
              className={data => handleCurrentPage(data) + ' ' + css.btn_changR}
            >
              Day
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CalendarSelector;
