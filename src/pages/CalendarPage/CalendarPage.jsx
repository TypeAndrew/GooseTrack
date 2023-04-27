import CalendarSelector from 'components/CalenadarSelecor/CalendarSelector';
import { SpinnerGrid } from 'components/Spinner/Grid';
import { Suspense } from 'react';
import { Outlet, useParams } from 'react-router-dom';

const CalendarPage = () => {
  const params = useParams();
  let setTime = true
  let resultParams
if(params.currentDate){
  resultParams = params.currentDate.split(".")
  setTime = false
console.log(resultParams)
}

  return (
    <>
      {params.currentDate && <CalendarSelector setTime={setTime} year={resultParams[0]} month={resultParams[1]} />}
      <Suspense fallback={<SpinnerGrid />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default CalendarPage;
