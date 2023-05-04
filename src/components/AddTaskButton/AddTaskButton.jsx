import { Button, AddTask, IconPlus } from './AddTaskButton.styled';
import { TaskModal } from '../TaskModal/TaskModal';
import { useState } from 'react';

export const AddTaskBtn = ({ status }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Button type="button" onClick={handleShowModal} aria-label='Add task'>
        <IconPlus />
        <AddTask>Add task</AddTask>
      </Button>

      {showModal && (
        <TaskModal handleCloseModal={handleCloseModal} status={status} aria-label='Modal window is open'/>
      )}
    </>
  );
};