import { addMonths, getDate, getMonth, getYear } from 'date-fns';
import css from './CalendarSelector.module.css';
import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { MONTNKEY } from '../constants/MONTNKEY';
import { getDay } from 'date-fns/esm';


const currentDay = `${getYear(Date.now())}.${getMonth(Date.now())}.${getDate(
  Date.now()
)}`;

const CalendarSelector = (props) => {
  const curDate = Date.now();
  const curMonth = getMonth(curDate)+1;
  const curYear= getYear(curDate);
  const [time, setTime] = useState(curDate);
  const [day, setDay] = useState('');
  const [month, setMonth] = useState(getMonth(curDate));
  const [year, setYear] = useState(getYear(curDate));
  const [btnBack, setBtnBack] = useState(false);
  const navigate = useNavigate();
 
  console.log(day);
  useEffect(() => {

    navigate(`month/${year}.${month + 1}`);  
    debugger
  }, [time,month,year,navigate]);

  const handleChangMonthBack = () => {

    if (curMonth >= month && curYear >= year) {
        setBtnBack(true);
        setTime(addMonths(time, -1));
    } else {
      setBtnBack(false);
    }
    setDay(getDay(time));
    setTime(addMonths(time, -1));
    (month === 0) ? setMonth(11) : setMonth(getMonth(time) - 1);
    (month) === 0 ? setYear(getYear(time)-1) : setYear(getYear(time));
    navigate(`month/${year}.${month}`);  
    debugger
  };
  const handleChangMonthForward = () => {

    setBtnBack(false);
    setTime(addMonths(time, 1));
    setDay(getDay(time));
    month === 11 ? setMonth(0) : setMonth(getMonth(time)+1);
    setYear(getYear(time)); 
    navigate(`month/${year}.${month}`);  
      debugger
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
