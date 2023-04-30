import { TaskModal } from 'components/TaskModal/TaskModal';
import { Div, H2, IconBtn } from './ColumnHeadBar.styled';
import { useState } from 'react';

export const ColumnHeadBar = ({ title }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <Div>
        <H2>{title}</H2>
        <IconBtn status={title} onClick={handleShowModal}/>
      </Div>

      {showModal && (
        <TaskModal handleCloseModal={handleCloseModal} status={title} />
      )}
    </>
  );
};
