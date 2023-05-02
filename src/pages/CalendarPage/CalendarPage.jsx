import { getTasksThunk } from 'Redux/tasks/tasks.thunk';
import CalendarSelector from 'components/CalenadarSelecor/CalendarSelector';
import { SpinnerGrid } from 'components/Spinner/Grid';
import { Suspense, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';



import { Outlet, useParams } from 'react-router-dom';

const CalendarPage = () => {
  const isLoading = useSelector(state=>state.taskbook.isLoading);
  const params = useParams();
  const dispatch = useDispatch();
  const time = useSelector(state => state.calendar.time);

  useEffect(() => {
    dispatch(getTasksThunk(time));
  }, [dispatch, time]);
  return (
    <>
      {params.currentDate && <CalendarSelector />}
      <Suspense fallback={<SpinnerGrid />}>
     {params.currentDate?  (isLoading? <SpinnerGrid />: <Outlet />):<Outlet />}     
      </Suspense>
    </>
  );
};

export default CalendarPage;
