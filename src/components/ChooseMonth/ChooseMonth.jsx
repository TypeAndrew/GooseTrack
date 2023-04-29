import {NavLink, useParams } from 'react-router-dom';

import * as dateFns from 'date-fns';
import { useSelector } from 'react-redux';

// const formatofYear = 'yyy';
// const formatOfMonth = 'MMM';
const formatofWeek = 'eeee';
const formatOfDay = 'd';

const ChooseMonth = () => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  const month = useSelector(state => state.calendar.month);
  const year = useSelector(state => state.calendar.year);
  const time = useSelector(state => state.calendar.time);

  const { currentDate } = useParams();
  console.log(currentDate);

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
    <div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: '1rem',
        }}
      >
        {weeks.map(week => (
          <div key={week}>{dateFns.format(week, formatofWeek)}</div>
        ))}
        {totalDate.map(date => (
          <div key={date}>
            {dateFns.getMonth(date) === month ? (
              <NavLink
                to={`/calendar/day//${year}.${month}.${dateFns.format(date, formatOfDay)}`}
              >
                
                {dateFns.format(date, formatOfDay)}{' '}
              </NavLink>
            ) : (
              'BaD'
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseMonth;
