import { TasksColumn } from 'components/TasksColumn/TasksColumn';
import { Ul } from './TaskColumnsList.styled';;

export const TaskColumnsList = ({ toDoTasks, inProgressTasks, doneTasks }) => {
  return (
    <Ul>
      <TasksColumn title="To do" collection={toDoTasks} />
      <TasksColumn title="In progress" collection={inProgressTasks} />
      <TasksColumn title="Done" collection={doneTasks} />
    </Ul>
  );
};
