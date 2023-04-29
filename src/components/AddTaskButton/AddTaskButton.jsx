import { useState } from "react";

import { ReactComponent as Plus } from '../../images/icons/plus.svg';
import { AddButton } from './AddTaskButton.styled';
import { TaskModal } from "../TaskModal/TaskModal";

const AddTaskBtn = ({ onClick }) => {
  const [isOpen, setIsModalOpen] = useState(false);  
  
  return (
    <AddButton onClick={() => setIsModalOpen(true)}>
      <Plus/>
      Add task
      {isOpen && (<TaskModal onClose={() => setIsModalOpen(false)} data={"Hello"}/>)}         
    </AddButton>
  );
}

export {
  AddTaskBtn
}