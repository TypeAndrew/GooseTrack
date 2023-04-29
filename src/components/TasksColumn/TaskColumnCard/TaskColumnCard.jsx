import { TaskToolbar } from '../TaskToolbar/TaskToolbar';
import {
  Li,
  H3,
  DivWrap,
  Div,
  Img,
  DivPriority,
} from './TaskColumnCard.styled';
import { useAuth } from 'Redux/auth/useAuth';

export const TaskColumnCard = ({ task }) => {
  const { user } = useAuth();

  return (
    <Li>
      <H3>{task.title}</H3>

      <DivWrap>
        <Div>
          <Img alt="User avatar" src={user.avatar}></Img>
          <DivPriority variant={task.priority}>{task.priority}</DivPriority>
        </Div>

        <TaskToolbar />
      </DivWrap>
    </Li>
  );
};
