import { useParams, NavLink,  useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import css from './ChooseDay.module.css';
//import { addDays, getDate, getTime } from 'date-fns';
import * as dateFns from 'date-fns';
import { TaskColumnsList } from './TaskColumnsList/TaskColumnsList';
import { WeeksHeader } from './WeeksHeader/WeeksHeader';

import { getTasks } from 'Redux/tasks/tasks.selectors';


 //import { useEffect } from 'react';
import {
  currentDay,
  currentTime,
  currentMonth,
  currentYear
} from 'Redux/calendar/calendar.slice';

// розшиврофка місяців щоб число місяця перевести в текст
import { MONTHKEY } from '../constants/MONTHKEY';

const ChooseDay = () => {
// не з того компонента////
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const paramsDay = useParams().currentDay;
  const startTime = new Date(Date.parse(paramsDay));
  const time = useSelector(state => state.calendar.time);
  const month = useSelector(state => state.calendar.month);
  const year = useSelector(state => state.calendar.year);
  


    // get start date of mounth

  
  const currentDays = paramsDay.split('-');

   const handleCurrentPage = ({ isActive }) => {
     return isActive ? css.isActive : '';
   };

   
// вірно
  let btnBack= true;

// const tasks = [
//   {
//     _id: '644ac5a7c3856b23c8b1b59e',
//     title: 'Test1',
//     priority: 'Low',
//     start: '09:00',
//     end: '09:30',
//     date: '2023-04-30',
//     category: 'To do',
//     owner: '644ea5f8f40fdaafd6de1068',
//     __v: 0,
//   },
//   {
//     _id: '644ac5a7c3856b23c8b1b58e',
//     title: 'Test2',
//     priority: 'Medium',
//     start: '09:00',
//     end: '09:30',
//     date: '2023-04-30',
//     category: 'To do',
//     owner: '644ea5f8f40fdaafd6de1068',
//     __v: 0,
//   },
//   {
//     _id: '644ac5a7c3856b23c8b1b57e',
//     title: 'Test3',
//     priority: 'Low',
//     start: '09:00',
//     end: '09:30',
//     date: '2023-04-29',
//     category: 'To do',
//     owner: '644ea5f8f40fdaafd6de1068',
//     __v: 0,
//   },
//   {
//     _id: '644ac5a7c3856b23c8b1b56e',
//     title: 'Test4',
//     priority: 'High',
//     start: '09:00',
//     end: '09:30',
//     date: '2023-04-30',
//     category: 'Done',
//     owner: '644ea5f8f40fdaafd6de1068',
//     __v: 0,
//   },
//   {
//     _id: '644ac5a7c3856b23c8b1b55e',
//     title: 'Test5',
//     priority: 'Low',
//     start: '09:00',
//     end: '09:30',
//     date: '2023-04-29',
//     category: 'Done',
//     owner: '644ea5f8f40fdaafd6de1068',
//     __v: 0,
//   },
//   {
//     _id: '644ac5a7c3856b23c8b1b54e',
//     title: 'Test6',
//     priority: 'Low',
//     start: '09:00',
//     end: '09:30',
//     date: '2023-04-29',
//     category: 'In progress',  
//     owner: '644ea5f8f40fdaafd6de1068',
//     __v: 0,
//   },
// ];



  // dispatch(changeFilter(currentDay));
     const tasks = useSelector(getTasks);


    const toFiltredContacts = () => {



    // const currentDayArray = currentDay.split('.');

    // const month = Number(currentDayArray[1]);

    // let normalMonth = `${month}`;
    // if (month < 10) {
    //   normalMonth = `0${month}`;
    // }

    // const normalizeDay =
    //   `${currentDayArray[0]}-${normalMonth}-${currentDayArray[2]}`;

    return tasks.filter(task => task.date === currentDay);
  };

  const filtredTasks = toFiltredContacts();
  
  const toDoTasks = filtredTasks.filter(task => task.category === "To do");
  const inProgressTasks = filtredTasks.filter(task => task.category === "In progress");
  const doneTasks = filtredTasks.filter(task => task.category === "Done");

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
   
    const startOfMonth = new Date(date.getFullYear(), date.getMonth(), date.getDate()-1 ,date.getHours() ,date.getMinutes(),date.getSeconds());
    const currentStartDay = startOfMonth.toISOString().slice(0, 10);
  
     navigate(`/calendar/day/${currentStartDay}`)
  };

  const handleChangMonthForward = () => {

    dispatch(currentTime(dateFns.getTime(dateFns.addDays(time, 1))));
    dispatch(currentDay(dateFns.getDate(dateFns.addDays(time, 1))));
    dispatch(currentMonth(dateFns.getMonth(dateFns.addDays(time, 1))));
    dispatch(currentYear(dateFns.getYear(dateFns.addDays(time, 1))));
    
    const date = new Date(time); 
    const startOfMonth = new Date(date.getFullYear(), date.getMonth(), date.getDate()+1 ,date.getHours() ,date.getMinutes(),date.getSeconds());
    const currentStartDay = startOfMonth.toISOString().replace('.', '-').replace('.', '-').slice(0, 10);

     navigate(`/calendar/day/${currentStartDay}`)
  };

     
  const colordisable = btnBack?"#DCE3E5":"#616161"
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
                // disabled={btnBack}
                className={css.btn_left}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" fill="none"><path stroke={colordisable} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"  d="M5 9 1 5l4-4"/></svg>
              </button>
              <button
                 onClick={handleChangMonthForward}
                type="button"
                className={css.btn_ringt}
              >
                 <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" fill="none"><path stroke="#616161" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m1 9 4-4-4-4"/></svg>
              </button>
            </div>
          </div>

          <ul className={css.viue}>
            <li className={css.viueLink}>
               <NavLink 
               to={`/calendar/month/${currentDays[0]}-${MONTHKEY[month]}-${currentDays[2]}`}
               className={data => handleCurrentPage(data) + ' ' + css.btn_changL} 
               > 
              Month
               </NavLink> 
            </li>
            <li className={css.viueLink}>
               <NavLink 
            
               className={data => handleCurrentPage(data) + ' ' + css.btn_changR} 
               > 
              Day
               </NavLink> 
            </li>
          </ul>
        </div>
        {time !== null &&
          <WeeksHeader CalendarDate={time}  />
        } 
        <TaskColumnsList toDoTasks={toDoTasks} inProgressTasks={inProgressTasks} doneTasks={doneTasks}/>
        
      </div>
    </>
  );
};

export default ChooseDay;
