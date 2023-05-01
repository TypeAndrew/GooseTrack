import { AddTaskBtn } from '../AddTaskButton/AddTaskButton';
import { ColumnHeadBar } from './ColumnHeadBar/ColumnHeadBar';
import { ColumnsTasksList } from './ColumnsTasksList/ColumnsTasksList';
import { Li } from './TasksColumn.styled';

export const TasksColumn = ({ title, collection }) => {

  return (
    <Li>
      <ColumnHeadBar title={title} />

      {collection.length > 0 && <ColumnsTasksList collection={collection}/>}

      <AddTaskBtn status={title}/>
    </Li>
  );
};
