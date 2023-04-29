import { AddTaskBtn } from '../AddTaskButton/AddTaskButton';
import { ReactComponent as AddTask } from '../../images/icons/plus-in-circle.svg';
import { ReactComponent as MoveTask } from '../../images/icons/move-task.svg';
import { ReactComponent as EditTask } from '../../images/icons/edit-task.svg';
import { ReactComponent as DeleteTask } from '../../images/icons/delete-task.svg';

import css from './TasksColumn.module.css';

// зробити логіку на перевикористовування колумнів з різними назвами

export const ColumnTasksList = () => {
  return(
    <li className={css.toDoList}>
            <div className={css.nameAndAdd}>
              <h2 className={css.columnName}>Column name</h2>
              <AddTask className={css.addTask}
                
              />
            </div>
            <ul className={css.taskList}>
              <div className={css.task}>
                <h3 className={css.taskName}>
                  Task name
                </h3>
                <div className={css.taskContent}>
                  <div className={css.avatarWithStatus}>
                    <div className={css.avatarInTask}>
                    </div>
                  </div>
                  <div className={css.taskTools}>
                    <ul className={css.taskToolsList}>
                      <li className={css.taskTool}>
                        <MoveTask></MoveTask>
                      </li>
                      <li className={css.taskTool}>
                        <EditTask></EditTask>
                      </li>
                      <li className={css.taskTool}>
                        <DeleteTask></DeleteTask>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ul>
            <AddTaskBtn/>
          </li>
  )
}