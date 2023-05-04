import { TasksColumn } from 'components/TasksColumn/TasksColumn';
import { Ul } from './TaskColumnsList.styled';
import { isLoading } from 'Redux/tasks/tasks.selectors';
import { useSelector } from 'react-redux';
import { SpinnerGrid } from 'components/Spinner/Grid';
import { Div } from 'components/Spinner/Grid.styled';

export const TaskColumnsList = ({ toDoTasks, inProgressTasks, doneTasks }) => {
  const isLoadingPage = useSelector(isLoading);

  return isLoadingPage ? (
    <Div>
      <SpinnerGrid />
    </Div>
  ) : (
    <Ul>
      <TasksColumn title="To do" collection={toDoTasks} />
      <TasksColumn title="In progress" collection={inProgressTasks} />
      <TasksColumn title="Done" collection={doneTasks} />
    </Ul>
  );
};
