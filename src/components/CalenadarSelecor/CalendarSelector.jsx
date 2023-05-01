import { addMonths, getDate, getMonth, getTime, getYear } from 'date-fns';
import css from './CalendarSelector.module.css';
// import React, { useRef } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { MONTHKEY } from '../constants/MONTHKEY';
import { useDispatch, useSelector } from 'react-redux';
import {
  currentDay,
  currentMonth,
  currentTime,
  currentYear,
} from 'Redux/calendar/calendar.slice';
import { useEffect } from 'react';

/*const currentStartDay = `${getYear(Date.now())}.${getMonth(
  Date.now()
)}.${getDate(Date.now())}`; */
/*const startTime = Date.now(); // get start date of mounth
  const date = new Date(startTime);
  const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 2);
  const currentStartDay = startOfMonth.toISOString().slice(0,10);*/

const CalendarSelector = props => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const day = useSelector(state => state.calendar.day);
  //const currentDay1 = Date.now();
  const month = useSelector(state => state.calendar.month);
  const year = useSelector(state => state.calendar.year);
  const time = useSelector(state => state.calendar.time) ?? Date.now();

  // get start date of mounth

  const date = new Date(time); 
  //const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 2);
  const currentStartDay = date.toISOString().slice(0,10);

  useEffect(() => {
    navigate(`/calendar/month/${currentStartDay}`);
  }, [currentStartDay, navigate]);

  let stopUpdateParamas = true;
  let btnBack = getYear(Date.now()) >= year && getMonth(Date.now()) >= month;

  const params = useParams();

  if (params.currentDate?.includes('.')) {
    const result = params.currentDate.split('.');
    const asd = Number(result[0]) === year && Number(result[1]) === month;
    if (!asd && stopUpdateParamas) {
      stopUpdateParamas = false;
      dispatch(currentMonth(Number(result[1])));
      dispatch(currentYear(Number(result[0])));

    }
  }

  if (year === null) {
    dispatch(currentTime(time));
    dispatch(currentDay(getDate(time)));
    dispatch(currentMonth(getMonth(time)));
    dispatch(currentYear(getYear(time)));
  }

  const handleChangMonthBack = () => {
    dispatch(currentTime(getTime(addMonths(time, -1))));
    dispatch(currentMonth(getMonth(addMonths(time, -1))));
    dispatch(currentYear(getYear(addMonths(time, -1))));
    stopUpdateParamas = false;


    if (getMonth(Date.now()) >= month && getYear(Date.now()) >= year) {
      btnBack = true;
    } else {
      btnBack = false;
    }
  };

  const handleChangMonthForward = () => {
    dispatch(currentTime(getTime(addMonths(time, 1))));
    dispatch(currentMonth(getMonth(addMonths(time, 1))));
    dispatch(currentYear(getYear(addMonths(time, 1))));
    stopUpdateParamas = false;

  };

  const handleCurrentPage = ({ isActive }) => {
    return isActive ? css.isActive : '';
  };
  const colordisable = btnBack ? '#DCE3E5' : '#616161';
  return (
    <>
      <div className={css.calendar}>
        <div className={css.selector}>
          <span className={css.month}>
            {MONTHKEY[month]} {year}
          </span>
          <div className={css.monthchang}>
            <button
              onClick={handleChangMonthBack}
              type="button"
              disabled={btnBack}
              className={css.btn_left}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="10"
                fill="none"
              >
                <path
                  stroke={colordisable}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M5 9 1 5l4-4"
                />
              </svg>
            </button>
            <button
              onClick={handleChangMonthForward}
              type="button"
              className={css.btn_ringt}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="10"
                fill="none"
              >
                <path
                  stroke="var(--btn-arrow-accent-color)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="m1 9 4-4-4-4"
                />
              </svg>
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
              to={`day/${currentStartDay}`}
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
