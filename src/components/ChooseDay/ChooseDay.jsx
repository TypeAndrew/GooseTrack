// import { useParams } from "react-router-dom"
import css from './ChooseDay.module.css';
import { ReactComponent as AddTask } from '../../images/icons/plus-in-circle.svg';
import { ReactComponent as MoveTask } from '../../images/icons/move-task.svg';
import { ReactComponent as EditTask } from '../../images/icons/edit-task.svg';
import { ReactComponent as DeleteTask } from '../../images/icons/delete-task.svg';
// // розшиврофка місяців щоб число місяця перевести в текст
// const MONHTKEY = {
//     0:'January',
//     1:"February",
//     2:'March',
//     3:'April',
//     4:'May',
//     5:'June',
//     6:'July',
//     7:'August',
//     8:'September',
//     9:'October',
//     10:'November',
//     11:"December",
// }

const ChooseDay = ()=>{
  // const {currentDay}= useParams()
  // const currentDays = currentDay.split(".")

  return (
    <>
      {/* <div>ChoseDay</div>
    <div> years:{currentDays[0]} monht:{ MONHTKEY[currentDays[1]]} day{currentDays[2]} </div> */}
    <div className={css.week}>
    </div>
      <div className={css.calendar}>
        <div className={css.toDoList}>
          <div className={css.nameAndAdd}>
            <h2 className={css.columnName}>To do</h2>
            <AddTask className={css.addTask}
              
            />
          </div>
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
          <button
            className={css.addTaskButton}
            type="button"
          >
            Add task
          </button>
        </div>
        <div className={css.toDoList}>
          <div className={css.nameAndAdd}>
            <h2 className={css.columnName}>In progress</h2>
            <AddTask className={css.addTask}
              
            />
          </div>
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
          <button
            className={css.addTaskButton}
            type="button"
          >
            Add task
          </button>
        </div>
        <div className={css.toDoList}>
          <div className={css.nameAndAdd}>
            <h2 className={css.columnName}>Done</h2>
            <AddTask className={css.addTask}
              
            />
          </div>
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
          <button
            className={css.addTaskButton}
            type="button"
          >
            Add task
          </button>
        </div>
      </div>
    </>
  )
}

export default ChooseDay