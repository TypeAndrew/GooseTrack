import { TasksColumn } from 'components/TasksColumn/TasksColumn';
import { Ul } from './TaskColumnsList.styled';
import { isLoading } from 'Redux/tasks/tasks.selectors';
import { useSelector } from 'react-redux';
import { SpinnerGrid } from 'components/Spinner/Grid';
import { Div } from 'components/Spinner/Grid.styled';

export const TaskColumnsList = ({ sortedTasks }) => {
  const isLoadingPage = useSelector(isLoading);

  return isLoadingPage ? (
    <Div>
      <SpinnerGrid />
    </Div>
  ) : (
    <Ul>
      {sortedTasks.map(item => <TasksColumn key={item.columnName} title={item.columnName} collection={item.tasks} />)}
    </Ul>
  );
};
