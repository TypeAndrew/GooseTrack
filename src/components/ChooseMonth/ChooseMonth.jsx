import { NavLink, useParams } from 'react-router-dom';

import * as dateFns from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';

import css from './ChooseMonth.module.css';
import { useEffect } from 'react';
import { getTasksThunk } from 'Redux/tasks/tasks.thunk';

// const formatofYear = 'yyy';
// const formatOfMonth = 'MMM';
const formatofWeek = 'eeee';
const formatOfDay = 'dd';

const ChooseMonth = () => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  const month = useSelector(state => state.calendar.month);
  const year = useSelector(state => state.calendar.year);
  const time = useSelector(state => state.calendar.time);

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
  const weeks = (date => {
    const weeks = [];
    for (let day = 0; day <= 6; day++) {
      weeks.push(totalDate[day]);
    }
    return weeks;
  })(currentDate);

  return (
    <div className={css.container}>
      <div className={css.div_grid_weeks}>
          {weeks.map(week => (
            <div className={css.weeks_iteam} key={week}>
              {dateFns.format(week, formatofWeek).substring(0, 3)}
            </div>
          ))}
      </div>

      

      <div
        className={css.div_grid_day}
        
      >
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
