import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import { useCallback } from 'react';
import { getTask } from '../../Redux/tasks/tasks.selectors';
import { postTasksThunk } from 'Redux/tasks/tasks.thunk';

export const TasksForm = () => {
    
    const dispatch = useDispatch();
    
    const handleSubmit = useCallback((name, number) => {
    
        dispatch(postTasksThunk({ name: name.value, number: number.value }))
    
     }, [dispatch])
    
    const task = useSelector(getTask);     

    
    const onSubmit = (evt) =>{
        if (evt !==undefined) {
            evt.preventDefault();
        }
        const { name, number } = evt.target;
        
        handleSubmit(name,number);
    }


        return (
            <>
        
                <form onSubmit={onSubmit}>
                    <div style={{display: 'flex'}}>
                    <div>
                        <label>Name</label>
            
               
                        <input 
                  
                            type="text"
                            name="name"
                            value={task.name}
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                        
                        />
                    </div>
            
                    <div>
                        <label>Phone</label>
                        <input 
                
                            type="tel"
                            name="number"
                            value={task.number}
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        />
                    </div>
           
    
                    <button  type="submit">Add Task</button>
                    </div>
                </form>
            </>
        )
  
}    

TasksForm.propTypes = {
    handleSubmit: PropTypes.func,
};
