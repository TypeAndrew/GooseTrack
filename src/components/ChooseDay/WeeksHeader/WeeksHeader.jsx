// import {WEEKSKEY} from '../../constants/WEEKSKEY'
import css from './WeeksHeader.module.css';
// import {  useSelector } from 'react-redux';
import * as dateFns from 'date-fns';

export const WeeksHeader = (props) => {
  const { CalendarDate } = props;
  const formatofWeek = 'eeee';
  // const time = useSelector(state => state.calendar.time);

  const startDate = dateFns.startOfWeek(CalendarDate, { weekStartsOn: 1 });
  //Find the last day of week of lastDay
  const endDate = dateFns.lastDayOfWeek(CalendarDate, { weekStartsOn: 1 });
  //render all days

  const totalDate = dateFns.eachDayOfInterval({
    start: startDate,
    end: endDate,
  });  

return (
      <div className={css.div_grid_weeks}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
          }}
        >
        {totalDate.map(week => (
          <div className={css.weeks_iteam} key={week}>
            <div className={css.weeks_iteam_datename}>
              {dateFns.format(week, formatofWeek).substring(0, 3)}
            </div>
             <div>
            {week.getDate()}
            </div>
          </div>
        ))} 
         </div>
      </div>
    )  
  }
 