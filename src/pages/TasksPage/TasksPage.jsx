import { Tasks } from '../../components/Tasks/Tasks';
import { TasksForm } from '../../components/TaskForm/TasksForm';


const TasksPage = () => {
 

  return (
    <>
      <h1 style={{display: 'flex',
            justifyContent: 'center',
            borderStyle: 'outset',
            borderRadius: '10%',
            color: 'white',
            background: 'dodgerblue',}}>Taskbook </h1>
            <TasksForm   />
            <h2 style={{display: 'flex', justifyContent: 'center'}}>Contacts </h2>

            <ul>
            < Tasks />
            </ul>
    </>
  );
};

export default TasksPage;