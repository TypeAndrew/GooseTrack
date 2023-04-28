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
  const [month, setMonth] = useState(getMonth(Date.now()));
  const [year, setYear] = useState(getYear(Date.now()));
  const [btnBack, setBtnBack] = useState(false);
  const navigate = useNavigate();
 
  console.log(day);
  
  useEffect(() => {
    
    setDay(getDate(time));
    setMonth(getMonth(time));
    setYear(getYear(time));
    if (getMonth(Date.now()) >= month && getYear(Date.now()) >= year) {
      setBtnBack(true);
    } else {
      setBtnBack(false);
    }
    navigate(`month/${year}.${month}`);
  }, [month, time, year,navigate]);

  const handleChangMonthBack = () => {

    setTime(addMonths(time, -1));

  };
  const handleChangMonthForward = () => {

    setTime(addMonths(time, 1));
    
  };
  const handleCurrentPage = ({ isActive }) => {
    return isActive ? css.isActive : '';
  };

  return (
    <>
      <div className={css.calendar}>
        <div className={css.selector}>
          <span className={css.month}>
            {MONTNKEY[month-1]} {year}
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
