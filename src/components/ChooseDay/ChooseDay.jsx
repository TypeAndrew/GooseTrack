import { useParams, NavLink,  useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import css from './ChooseDay.module.css';
//import { addDays, getDate, getTime } from 'date-fns';
import * as dateFns from 'date-fns';
import { TaskColumnsList } from './TaskColumnsList/TaskColumnsList';
import { WeeksHeader } from '../CalenadarSelecor/WeeksHeader/WeeksHeader';

// розшиврофка місяців щоб число місяця перевести в текст
const MONHTKEY = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December',
};

const ChooseDay = () => {
// не з того компонента
  const navigate = useNavigate();
  const { navigationDay } = useParams();
  const time = useSelector(state => state.calendar.time);
  
  const firstDay = dateFns.startOfWeek(time+1);


  
  const currentDays = navigationDay.split('.');
   const handleCurrentPage = ({ isActive }) => {
     return isActive ? css.isActive : '';
   };

    useEffect(() => {
    
       navigate(`/calendar/day/${navigationDay}`)
       
     },[navigationDay,navigate])
// вірно
  let btnBack= true;

const tasks = [
  {
    _id: '644ac5a7c3856b23c8b1b54e',
    title: 'Test1',
    priority: 'Low',
    start: '09:00',
    end: '09:30',
    date: '2023-04-30',
    category: 'To do',
    owner: '644797791e794314754f77ae',
    __v: 0,
  },
  {
    _id: '644ac5a7c3856b23c8b1b54e',
    title: 'Test2',
    priority: 'Medium',
    start: '09:00',
    end: '09:30',
    date: '2023-04-30',
    category: 'To do',
    owner: '644797791e794314754f77ae',
    __v: 0,
  },
  {
    _id: '644ac5a7c3856b23c8b1b54e',
    title: 'Test3',
    priority: 'Low',
    start: '09:00',
    end: '09:30',
    date: '2023-04-29',
    category: 'To do',
    owner: '644797791e794314754f77ae',
    __v: 0,
  },
  {
    _id: '644ac5a7c3856b23c8b1b54e',
    title: 'Test4',
    priority: 'High',
    start: '09:00',
    end: '09:30',
    date: '2023-04-30',
    category: 'Done',
    owner: '644797791e794314754f77ae',
    __v: 0,
  },
  {
    _id: '644ac5a7c3856b23c8b1b54e',
    title: 'Test5',
    priority: 'Low',
    start: '09:00',
    end: '09:30',
    date: '2023-04-29',
    category: 'Done',
    owner: '644797791e794314754f77ae',
    __v: 0,
  },
  {
    _id: '644ac5a7c3856b23c8b1b54e',
    title: 'Test6',
    priority: 'Low',
    start: '09:00',
    end: '09:30',
    date: '2023-04-29',
    category: 'In progress',
    owner: '644797791e794314754f77ae',
    __v: 0,
  },
];

  // const { currentDay } = useParams();
  
  // const dispatch = useDispatch();
  
  //   const {tasks} = useSelector(getTasks);

  // dispatch(changeFilter(currentDay));


  const toFiltredContacts = () => {
    const currentDayArray = navigationDay.split('.');

    const month = Number(currentDayArray[1]) + 1;

     

    let normalMonth = `${month}`;
    if (month < 10) {
      normalMonth = `0${month}`;
    }

    const normalizeDay =
      `${currentDayArray[0]}-${normalMonth}-${currentDayArray[2]}`;

    return tasks.filter(task => task.date === normalizeDay);
  };

  const filtredTasks = toFiltredContacts();

  const toDoTasks = filtredTasks.filter(task => task.category === "To do");
  const inProgressTasks = filtredTasks.filter(task => task.category === "In progress");
  const doneTasks = filtredTasks.filter(task => task.category === "Done");

    // useEffect(() => {
    //   dispatch(getTasksThunk());
    // }, [dispatch]);

    // const handleDelete = useCallback((evt) => {

    //   dispatch(deleteTasksThunk({ id:evt.target.id } ))

    // }, [dispatch]);
  // const dispatch = useDispatch();
  
   const handleChangMonthBack = () => {
    // dispatch(currentTime(getTime(addDays(time, -1))));
  //   dispatch(currentDay(getDate(addDays(time, -1))));

   

  };

  const handleChangMonthForward = () => {
  //  dispatch(currentTime(getTime(addDays(time, 1))));
  //  dispatch(currentDay(getDate(addDays(time, 1))));
  

  };
  const colordisable = btnBack?"#DCE3E5":"#616161"
  return (
    <>
      <div>
        
        <div className={css.selector}>
          <div className={css.periodPaginator}>

            <span className={css.dateToday}>
              
              {currentDays[2]} {MONHTKEY[currentDays[1]]} {currentDays[0]}
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
               to={``}
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
          <WeeksHeader CalendarDate={firstDay} />
        } 
        <TaskColumnsList toDoTasks={toDoTasks} inProgressTasks={inProgressTasks} doneTasks={doneTasks}/>
        
      </div>
    </>
  );
};

export default ChooseDay;
