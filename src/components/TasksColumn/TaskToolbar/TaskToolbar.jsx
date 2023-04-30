import { Ul, Li, Button, IconBtnMoveTask, IconBtnEditTask, IconBtnDeleteTask } from './TaskToolbar.styled';
import { useState } from 'react';
import { TaskModal } from 'components/TaskModal/TaskModal';
import { deleteTasksThunk, getTasksThunk } from 'Redux/tasks/tasks.thunk';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

export const TaskToolbar = ({status, task}) => {
  const dispatch = useDispatch();
  const { currentDay: date } = useParams();

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDelete = async () => {
  
     await dispatch(deleteTasksThunk(task._id));  
  
      const currentDayArray = date.split('-');
      const month = Number(currentDayArray[1]);
  
      await dispatch(getTasksThunk(month))
    };
  

  return (
    <>
      <Ul>
        <Li>
          <Button
            type="button"
            onClick={() => {
              console.log('open TaskModal');
            }}
          >
            <IconBtnMoveTask />
          </Button>
        </Li>
        <Li>
          <Button type="button" onClick={handleShowModal}>
            <IconBtnEditTask />
          </Button>
        </Li>
        <Li>
          <Button
            type="button"
            onClick={handleDelete}
            
          >
            <IconBtnDeleteTask />
          </Button>
        </Li>
      </Ul>

      {showModal && (
        <TaskModal handleCloseModal={handleCloseModal} status={status} taskFormData={task}/>
      )}
    </>
  );
};
