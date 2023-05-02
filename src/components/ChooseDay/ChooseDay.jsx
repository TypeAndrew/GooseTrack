import { useParams, NavLink, useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import css from './ChooseDay.module.css';
//import { addDays, getDate, getTime } from 'date-fns';
import * as dateFns from 'date-fns';
import { TaskColumnsList } from './TaskColumnsList/TaskColumnsList';
import { WeeksHeader } from './WeeksHeader/WeeksHeader';

import { getTasks } from 'Redux/tasks/tasks.selectors';

import {
  currentDay,
  currentTime,
  currentMonth,
  currentYear,
} from 'Redux/calendar/calendar.slice';

// розшиврофка місяців щоб число місяця перевести в текст
import { MONTHKEY } from '../constants/MONTHKEY';
import { useEffect } from 'react';
import { getTasksThunk } from 'Redux/tasks/tasks.thunk';


const ChooseDay = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const paramsDay = useParams().currentDay;
  const startTime = new Date(Date.parse(paramsDay));
  const day = useSelector(state=>state.calendar.day)
  const time = useSelector(state => state.calendar.time);
  const month = useSelector(state => state.calendar.month);
  const year = useSelector(state => state.calendar.year);

  const currentDays = paramsDay.split('-');

  const handleCurrentPage = ({ isActive }) => {
    return isActive ? css.isActive : '';
  };

  let btnBack = true;

  const tasks = useSelector(getTasks);

  const toFiltredContacts = () => {
    return tasks.filter(task => task.date === paramsDay);

  };

  const filtredTasks = toFiltredContacts();

  const toDoTasks = filtredTasks.filter(task => task.category === 'To do');
  const inProgressTasks = filtredTasks.filter(
    task => task.category === 'In progress'
  );
  const doneTasks = filtredTasks.filter(task => task.category === 'Done');

  if (year === null) {
    dispatch(currentTime(dateFns.getTime(startTime)));
    dispatch(currentDay(dateFns.getDate(startTime)));
    dispatch(currentMonth(dateFns.getMonth(startTime)));
    dispatch(currentYear(dateFns.getYear(startTime)));
  }

  const handleChangMonthBack = () => {
    dispatch(currentTime(dateFns.getTime(dateFns.addDays(time, -1))));
    dispatch(currentDay(dateFns.getDate(dateFns.addDays(time, -1))));
    dispatch(currentMonth(dateFns.getMonth(dateFns.addDays(time, -1))));
    dispatch(currentYear(dateFns.getYear(dateFns.addDays(time, -1))));
    const date = new Date(time);

    const startOfMonth = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() - 1,
      date.getHours(),
      date.getMinutes(),
      date.getSeconds()
    );
    const currentStartDay = startOfMonth.toISOString().slice(0, 10);

    navigate(`/calendar/day/${currentStartDay}`);
  };

  const handleChangMonthForward = () => {
    dispatch(currentTime(dateFns.getTime(dateFns.addDays(time, 1))));
    dispatch(currentDay(dateFns.getDate(dateFns.addDays(time, 1))));
    dispatch(currentMonth(dateFns.getMonth(dateFns.addDays(time, 1))));
    dispatch(currentYear(dateFns.getYear(dateFns.addDays(time, 1))));

    const date = new Date(time);
    const startOfMonth = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() + 1,
      date.getHours(),
      date.getMinutes(),
      date.getSeconds()
    );
    const currentStartDay = startOfMonth
      .toISOString()
      .replace('.', '-')
      .replace('.', '-')
      .slice(0, 10);

    navigate(`/calendar/day/${currentStartDay}`);
  };


  if (dateFns.getMonth(Date.now()) >= month && dateFns.getYear(Date.now()) >= year && dateFns.getDate(Date.now())>= day) {
    btnBack = true;
  } else {
    btnBack = false;
  }

   useEffect(() => {
     dispatch(getTasksThunk(time));
   }, [dispatch, time]);


  const colordisable = btnBack ? '#DCE3E5' : '#616161';
  return (
    <>
      <div>
        <div className={css.selector}>
          <div className={css.periodPaginator}>
            <span className={css.dateToday}>
              {currentDays[2]} {MONTHKEY[month]} {currentDays[0]}
            </span>
            <div className={css.dayChange}>
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
                    stroke="#616161"
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
            <li className={css.viueLink}>
              <NavLink
                to={`/calendar/month/${currentDays[0]}-${MONTHKEY[month]}-${currentDays[2]}`}
                className={data =>
                  handleCurrentPage(data) + ' ' + css.btn_changL
                }
              >
                Month
              </NavLink>
            </li>
            <li className={css.viueLink}>
              <NavLink
                className={data =>
                  handleCurrentPage(data) + ' ' + css.btn_changR
                }
              >
                Day
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={css.container}>
          {time !== null && <WeeksHeader CalendarDate={ dateFns.getTime(startTime)||time } />}
          <TaskColumnsList
            toDoTasks={toDoTasks}
            inProgressTasks={inProgressTasks}
            doneTasks={doneTasks}
          />
        </div>
      </div>
    </>
  );
};

export default ChooseDay;
