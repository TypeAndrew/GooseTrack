import { Modal } from '../Modal/Modal';
import { TaskForm } from '../TaskForm/TaskForm';

export const TaskModal = ({ status, handleCloseModal, taskFormData = {} }) => {
  return (
    <>
      <Modal onClose={handleCloseModal}>
        <TaskForm status={status} onClose={handleCloseModal} taskFormData={taskFormData}/>
      </Modal>
    </>
  );
};