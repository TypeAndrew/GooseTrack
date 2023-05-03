import css from './WeeksHeader.module.css';

import * as dateFns from 'date-fns';
export const WeeksHeader = props => {
  const { CalendarDate } = props;
  const formatofWeek = 'eeee';
  
  const startDate = dateFns.startOfWeek(CalendarDate, { weekStartsOn: 1 });
  //Find the last day of week of lastDay
  const endDate = dateFns.lastDayOfWeek(CalendarDate, { weekStartsOn: 1 });
  //render all days

  const totalDate = dateFns.eachDayOfInterval({
    start: startDate,
    end: endDate,
  });
  let longWeeksString;
  if (window.innerWidth <= 768) {
    longWeeksString = 1;
  } else {
    longWeeksString = 3;
  }
  return (
    <div className={css.div_grid_weeks}>
      {totalDate.map(week => (
        <div  className={css.weeks_iteam} key={week}>
          <div className={css.weekString}>
            {dateFns.format(week, formatofWeek).substring(0, longWeeksString)}
          </div>
        </div>
      ))}
    </div>
  );
};
