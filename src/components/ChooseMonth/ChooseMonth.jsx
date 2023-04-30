import { NavLink, useParams } from 'react-router-dom';

import * as dateFns from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';

import css from './ChooseMonth.module.css';
import { useEffect } from 'react';
import { getTasksThunk } from 'Redux/tasks/tasks.thunk';
import { WeeksHeader } from './WeeksHeader/WeeksHeader';

// const formatofYear = 'yyy';
// const formatOfMonth = 'MMM';
//const formatofWeek = 'eeee';
const formatOfDay = 'dd';

const ChooseMonth = () => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  const month = useSelector(state => state.calendar.month);
  const year = useSelector(state => state.calendar.year);
  const time = useSelector(state => state.calendar.time);
  const task = useSelector(state => state.taskbook.tasks);
  const { currentDate } = useParams();
  console.log(currentDate);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasksThunk(month));
  }, [dispatch, month]);

  //Find the first day of current Date
  const firstDay = dateFns.startOfMonth(time);
  //Find the last day of current Date
  const lastDay = dateFns.lastDayOfMonth(time);
  ////Ein Find the first day of week of firstDay
  const startDate = dateFns.startOfWeek(firstDay, { weekStartsOn: 1 });
  //Find the last day of week of lastDay
  const endDate = dateFns.lastDayOfWeek(lastDay, { weekStartsOn: 1 });
  //render all days

  const totalDate = dateFns.eachDayOfInterval({
    start: startDate,
    end: endDate,
  });
  /*const weeks = (date => {
    const weeks = [];
    for (let day = 0; day <= 6; day++) {
      weeks.push(totalDate[day]);
    }
    return weeks;
  })(currentDate);*/
  // Tasks add on calendar
  const addTaskOnCalendar = date => {
    console.log(date);
    task?.map(el => {
      const result = el.date.split('-');
       if(result[2]== date){
        console.log(el.title)
        return<div>{el.title}</div>
       }
    });
  };

  
  return (
    <div className={css.container}>
      <WeeksHeader CalendarDate={firstDay} />
      <div className={css.div_grid_weeks}>
        {totalDate.map(date => (
          <div className={css.container_link} key={date}>
            {dateFns.getMonth(date) === month ? (
              <NavLink
                className={css.link}
                to={`/calendar/day/${year}-${month}-${dateFns.format(
                  date,
                  formatOfDay
                )}`}
              >
                <span className={css.date}>
                  {dateFns.format(date, formatOfDay)}
                </span>
                <div>{addTaskOnCalendar(dateFns.format(
                  date,
                  formatOfDay
                ))}</div>
              </NavLink>
            ) : (
              <span className={css.link}></span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseMonth;
