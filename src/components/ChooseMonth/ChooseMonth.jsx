import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as dateFns from 'date-fns';

// const formatofYear = 'yyy';
// const formatOfMonth = 'MMM';
const formatofWeek = 'eeee';
const formatOfDay = 'd';

const ChooseMonth = () => {
  
  const [currentDateStart, setCurrentDateStart] = useState(Date.now());

  const  {currentDate}  = useParams();
console.log(currentDate)

  useEffect(() => {
    if (!currentDate.includes(':')) {
      const result = currentDate.split('.');
      const date = { years: result[0] - 1970, months: result[1]-1 };

      setCurrentDateStart(prev => {
        return dateFns.milliseconds(date);
      });
    }
  },[currentDateStart, currentDate]);
  //Find the first day of current Date
  const firstDay = dateFns.startOfMonth(currentDateStart);
  //Find the last day of current Date
  const lastDay = dateFns.lastDayOfMonth(currentDateStart);
  ////Ein Find the first day of week of firstDay
  const startDate = dateFns.startOfWeek(firstDay,{ weekStartsOn: 1 });
  //Find the last day of week of lastDay
  const endDate = dateFns.lastDayOfWeek(lastDay,{ weekStartsOn: 1 });
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
      {/* <div style={{ display: 'flex', justifyContent: 'space-around', margin: '1rem 0' }}>
         <button onClick={() => setCurrentDate(dateFns.subMonths(currentDate, 1))}>last</button>
             <span>
             {dateFns.format(currentDate, formatOfMonth)} {dateFns.format(currentDate, formatofYear)}
             </span>
         <button onClick={()=> setCurrentDate(dateFns.addMonths (currentDate, 1)) }>next</button>
     </div> */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: '1rem',
        }}
      >
        {weeks.map(week => (
          <span key={week}>{dateFns.format(week, formatofWeek)}</span>
        ))}
        {totalDate.map(date => (
          <span key={date}> {dateFns.format(date, formatOfDay)}</span>
        ))}
      </div>
    </div>
  );
};

export default ChooseMonth;
