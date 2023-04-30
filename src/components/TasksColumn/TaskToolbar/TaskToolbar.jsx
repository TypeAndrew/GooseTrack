import { ReactComponent as MoveTask } from '../../../images/icons/move-task.svg';
import { ReactComponent as EditTask } from '../../../images/icons/edit-task.svg';
import { ReactComponent as DeleteTask } from '../../../images/icons/delete-task.svg';

import { Ul, Li, Button } from './TaskToolbar.styled';

export const TaskToolbar = () => {
  return (
    <Ul>
      <Li>
        <Button type="button" onClick={()=>{console.log('open TaskModal')}}>
          <MoveTask />
        </Button>
      </Li>
      <Li>
        <Button type="button" onClick={()=>{console.log('open modal')}}>
          <EditTask />
        </Button>
      </Li>
      <Li>
        <Button type="button" onClick={()=>{console.log('handleDelete')}}>
          <DeleteTask />
        </Button>
      </Li>
    </Ul>
  );
};
