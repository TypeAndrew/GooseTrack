import { NavLink } from 'react-router-dom';

import * as dateFns from 'date-fns';
import { useSelector } from 'react-redux';

import css from './ChooseMonth.module.css';
import { WeeksHeader } from './WeeksHeader/WeeksHeader';
import { formatISO } from 'date-fns/esm';

const formatOfDay = 'dd';

const ChooseMonth = () => {

  const month = useSelector(state => state.calendar.month);
  const year = useSelector(state => state.calendar.year);
  const time = useSelector(state => state.calendar.time);
 
  const task = useSelector(state => state.taskbook.tasks);
  // const { currentDate } = useParams();

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

  const curenttDayStyle = cureDayStyl => {
    const dateNow = formatISO(Date.now());
    if (dateFns.formatISO(cureDayStyl).slice(0, 10) === dateNow.slice(0, 10)) {
      return css.date_curent;
    }
    return css.date;
  };

  const creatCalendar = date => {
    let counter = 1;
    return  (
      <div className={css.container_link} key={date}>
        {dateFns.getMonth(date) === month ? (
          <NavLink
            key={dateFns.getTime(date)}
            className={css.link}
            to={`/calendar/day/${year}-${
              (month + '').toString().length === 1
                ? '0' + (month + 1)
                : month + 1
            }-${dateFns.format(date, formatOfDay)}`}
          >
            <span key={Math.random() + ''} className={curenttDayStyle(date)}>
              {dateFns.format(date, formatOfDay)}
            </span>
            <div key={Math.random() + ''} className={css.task}>
            
              {task.map(el => {
                let span = '';
                if (counter <= 3) {
                  if (counter <= 2) {
                    if (
                      el.date.split('-')[2] ===
                      dateFns.format(date, formatOfDay)
                    ) {
                      counter++;
                      span = (
                        <span
                          className={css[el.priority]}
                          key={Math.random() + ''}
                        >
                          {el.title}
                        </span>
                      );
                    }
                  } else {
                    counter++;
                    span = (
                      <span className={css.more} key={Math.random() + ''}>
                        More...{' '}
                      </span>
                    );
                  }
                  return span;
                }
                return '';
              })}
            </div>
          </NavLink>
        ) : (
          <span key={Math.random() + ''} className={css.link}></span>
        )}
      </div>
    );
  };

  return (
    <div className={css.container}>
      <WeeksHeader CalendarDate={firstDay} />

      <div className={css.div_grid_weeks}>
        {totalDate.map(date => creatCalendar(date))}
      </div>
    </div>
  );
};

export default ChooseMonth;
