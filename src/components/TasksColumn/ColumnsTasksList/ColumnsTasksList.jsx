import { Ul } from './ColumnsTasksList.styled';

import { TaskColumnCard } from '../TaskColumnCard/TaskColumnCard';

export const ColumnsTasksList = ({ collection }) => {

  return (
    <Ul>
      {collection.map(task => (
        <TaskColumnCard task={task}/>
      ))}
    </Ul>
  );
};
