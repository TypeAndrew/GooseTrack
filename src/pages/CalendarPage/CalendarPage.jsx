import { addMonths, getDate, getMonth, getYear } from 'date-fns';
import css from './CalendarPage.module.css';
import { MONTNKEY } from './MONTNKEY';
import { Suspense, useEffect, useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

const currentDay = `${getYear(Date.now())}.${getMonth(Date.now())}.${getDate(Date.now())}`
console.log(currentDay)
const CalendarPage = () => {
  const [time, setTime] = useState(Date.now());
  const [day, setDay] = useState('');
  const [monht, setMonht] = useState('');
  const [year, setYear] = useState('');
  const [btnBack, setBtnBack] = useState(false);
  const navigate = useNavigate();

  console.log(day)
  useEffect(() => {
    setDay(getDate(time));
    setMonht(getMonth(time));
    setYear(getYear(time));

    if (getMonth(Date.now()) >= monht && getYear(Date.now()) >= year) {
      setBtnBack(true);
    } else {
      setBtnBack(false);
    }
  }, [monht, navigate, time, year]);

  const handleChangMonthBack = () => {
    setTime(addMonths(time, -1));
    navigate(`${year}.${monht}`);
  };
  const handleChangMonthForward = () => {
    setTime(addMonths(time, 1));
    navigate(`${year}.${monht}`);
  };
  const handleCurrentPage = ({ isActive }) => {
    return isActive ? css.isActive : '';
  };

  return (
    <>
      <h1>SSSss </h1>
      <div className={css.calendar}>
        <div className={css.selector}>
          <span className={css.monht}>
            {MONTNKEY[monht]} {year}
          </span>
          <div className={css.monhtchang}>
            <button
              onClick={handleChangMonthBack}
              type="button"
              disabled={btnBack}
              className={css.btn_left}
            >
              <img src="./left.svg" alt="L" />
            </button>
            <button
              onClick={handleChangMonthForward}
              type="button"
              className={css.btn_ringt}
            >
              <img src="./ringt.svg" alt="R" />
            </button>
          </div>
        </div>
        <ul className={css.viue}>
          <li>
            <NavLink
              to={`${year}.${monht}`}
              className={data => handleCurrentPage(data) + ' ' + css.btn_changL}
            >
              {' '}
              Monht
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
      
      <Suspense fallback={'loder'}>
        <Outlet  />
      </Suspense>
    </>
  );
};

export default CalendarPage;
