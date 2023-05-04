import { TaskToolbar } from '../TaskToolbar/TaskToolbar';
import { Li, H3, DivWrap, Div, DivPriority } from './TaskColumnCard.styled';

import { Avatar } from 'components/Layout/Avatar/Avatar';

export const TaskColumnCard = ({ task }) => {
  return (
    <Li>
      <H3>{task.title}</H3>

      <DivWrap>
        <Div>
          <Avatar />
          <DivPriority variant={task.priority}>{task.priority}</DivPriority>
        </Div>

        <TaskToolbar status={task.category} task={task} />
      </DivWrap>
    </Li>
  );
};
