import { getTasksThunk, patchTasksThunk } from 'Redux/tasks/tasks.thunk';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  IconBtnMoveTask,
  Li,
  ModalContainer,
  Overlay,
  Ul,
} from './ContextMenu.styled';
import { useCallback, useEffect } from 'react';

export const ContextMenu = ({ status, handleCloseModal, taskFormData }) => {
  const memoKeyClose = useCallback(handleKeyClose, [handleKeyClose]);

  useEffect(() => {
    window.addEventListener('keydown', memoKeyClose);

    return () => {
      window.removeEventListener('keydown', memoKeyClose);
    };
  }, [memoKeyClose]);

  function handleKeyClose(evt) {
    if (evt.code === 'Escape') {
      handleCloseModal();
    }
  }

  function handleClose(evt) {
    const { target, currentTarget } = evt;
    console.log('target', target);
    console.log('currentTarget', currentTarget);
    if (target === currentTarget) {
      handleCloseModal();
    }
  }

  const dispatch = useDispatch();
  const time = useSelector(state => state.calendar.time);

  const handleChangeCategiry = async (taskFormData, newCategory) => {
    const data = {
      ...taskFormData,
      category: newCategory,
      _id: undefined,
      owner: undefined,
      __v: undefined,
    };
    const patchData = { data, id: taskFormData._id };

    await dispatch(patchTasksThunk(patchData));

    await dispatch(getTasksThunk(time));

    handleCloseModal();
  };

  return (
    <Overlay onClick={handleClose}>
      <ModalContainer>
        <Ul>
          {status !== 'To do' && (
            <Li key="To do">
              <Button
                type="button"
                onClick={() => {
                  handleChangeCategiry(taskFormData, 'To do');
                }}
              >
                <span>To do</span> <IconBtnMoveTask />
              </Button>
            </Li>
          )}
          {status !== 'In progress' && (
            <Li key="In progress">
              <Button
                type="button"
                onClick={() => {
                  handleChangeCategiry(taskFormData, 'In progress');
                }}
              >
                <span>In progress</span> <IconBtnMoveTask />
              </Button>
            </Li>
          )}
          {status !== 'Done' && (
            <Li key="Done">
              <Button
                type="button"
                onClick={() => {
                  handleChangeCategiry(taskFormData, 'Done');
                }}
              >
                <span>Done</span> <IconBtnMoveTask />
              </Button>
            </Li>
          )}
        </Ul>
      </ModalContainer>
    </Overlay>
  );
};
