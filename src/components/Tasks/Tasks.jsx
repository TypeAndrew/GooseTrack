import PropTypes from 'prop-types';
import { useCallback, useEffect} from 'react';
import { useSelector,useDispatch  } from 'react-redux';
import { getTasksThunk, deleteTasksThunk } from 'Redux/tasks/tasks.thunk';
import {  getTasks } from 'Redux/tasks/tasks.selectors';
//import {  selectFilteredTasks, getTasks } from 'Redux/tasks/tasks.selectors';

export function Tasks()  {

  const dispatch = useDispatch();
 
  const {users} = useSelector(getTasks);
  
  

  useEffect(() => {
    dispatch(getTasksThunk());
  }, [dispatch]);

  const handleDelete = useCallback((evt) => {
        
    dispatch(deleteTasksThunk({ id:evt.target.id } )) 
        
  }, [dispatch]);  
    
  //replace funcion on selector
  /*const getFilterValueOn = (element) => {
      return element.name.toLowerCase().includes(filter.toLowerCase())
  }*/
  
  return (
    users?.map(element => 
   // getFilterValueOn(element) && replace funcion on selector
    <li key={element.id}><div>{element.email}</div><div> {element.subscription}</div>
    <button onClick={handleDelete} id={element.id} type="button" >delete </button></li>
    )
  )
     
}
    
Tasks.propTypes = {
    element: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
    }),
  onDelete: PropTypes.func,
};
