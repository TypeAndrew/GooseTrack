import { ReactComponent as Plus } from '../../images/icons/plus.svg';
import { AddButton } from './AddTaskButton.styled';

const AddTaskBtn = ({ onClick }) => {
  return (
    <AddButton type="button" onClick={onClick}>
      <Plus/>
      Add task
    </AddButton>
  );
}

export {
  AddTaskBtn
}