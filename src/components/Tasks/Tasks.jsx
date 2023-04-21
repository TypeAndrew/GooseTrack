import PropTypes from 'prop-types';
import { useCallback, useEffect} from 'react';
import { useSelector,useDispatch  } from 'react-redux';
import { getTasksThunk, deleteTasksThunk } from 'Redux/tasks/tasks.thunk';
import {  selectFilteredTasks } from 'Redux/tasks/tasks.selectors';

export function Tasks()  {

  const dispatch = useDispatch();
 
  const contacts = useSelector(selectFilteredTasks);
  
  

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
    contacts.map(element => 
   // getFilterValueOn(element) && replace funcion on selector
    <li key={element.id}><div>{element.name}</div><div> {element.number}</div>
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
