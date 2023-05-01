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

  // console.log('status ', status);

  return (
    <>
      <Button type="button" onClick={handleShowModal}>
        <IconPlus />
        <AddTask>Add task</AddTask>
      </Button>

      {showModal && (
        <TaskModal handleCloseModal={handleCloseModal} status={status} />
      )}
    </>
  );
};