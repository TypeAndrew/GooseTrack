// import {WEEKSKEY} from '../../constants/WEEKSKEY'
import { useDispatch } from 'react-redux';
import css from './WeeksHeader.module.css';
// import {  useSelector } from 'react-redux';
import * as dateFns from 'date-fns';
import { currentDay, currentMonth, currentTime, currentYear } from 'Redux/calendar/calendar.slice';

export const WeeksHeader = (props) => {
  const { CalendarDate } = props;
  const formatofWeek = 'eeee';
  // const time = useSelector(state => state.calendar.time);
  
 const dispatch = useDispatch()
  dispatch(currentTime(dateFns.getTime(CalendarDate)))
  dispatch(currentDay(dateFns.getDate(CalendarDate)));
  dispatch(currentMonth(dateFns.getMonth(CalendarDate)));
  dispatch(currentYear(dateFns.getYear(CalendarDate)));
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
  const curenttDayStyle = cureDayStyl => {
    const dateNow = dateFns.formatISO(Date.now());
    if (dateFns.formatISO(cureDayStyl).slice(0, 10) === dateNow.slice(0, 10)) {
      return css.weeks_iteam_curent;
    }
    return css.weeks_iteam_day;
  };
return (
      <div className={css.div_grid_weeks}>
        {totalDate.map(week => (
          <div className={css.weeks_iteam} key={week}>
            <div className={css.weeks_iteam_datename}>
              {dateFns.format(week, formatofWeek).substring(0, longWeeksString)}
            </div>
            <div className={curenttDayStyle(week)} >
            {week.getDate()}
            </div>
          </div>
        ))} 
        
      </div>
    )  
  }
