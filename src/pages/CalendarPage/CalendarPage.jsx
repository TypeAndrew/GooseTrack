import CalendarSelector from 'components/CalenadarSelecor/CalendarSelector';
import { SpinnerGrid } from 'components/Spinner/Grid';
import { Suspense } from 'react';


import { Outlet, useParams } from 'react-router-dom';

const CalendarPage = () => {
  const params = useParams();

  return (
    <>
      {params.currentDate && <CalendarSelector />}
      <Suspense fallback={<SpinnerGrid />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default CalendarPage;
