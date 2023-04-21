import { ToastContainer } from 'react-toastify';


import { Sidebar } from './SlideBar/SlideBar';

export const Layout = ({ children }) => {
  return (
    <>
      <div className="d-flex flex-row">
        <Sidebar />

        <main
          className="tab-content p-5 h-100 col-9"
          style={{ minHeight: '100vh' }}
        >
          <div  className="tab-pane fade show active">{children}</div>
        </main>
      </div>

      <ToastContainer />

    </>
  );
};