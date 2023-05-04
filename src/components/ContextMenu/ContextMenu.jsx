import { getTasksThunk, patchTasksThunk } from 'Redux/tasks/tasks.thunk';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  IconBtnMoveTask,
  Li,
  ModalContainer,
  Overlay,
  Span,
  Ul,
} from './ContextMenu.styled';
import { useCallback, useEffect } from 'react';
import {columnArray} from '../constants/columnArray';
import { useAuth } from 'Redux/auth/useAuth';

export const ContextMenu = ({
  status,
  handleCloseModal,
  taskFormData,
  open,
  left,
  top,
}) => {
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

    if (target === currentTarget) {
      handleCloseModal();
    }
  }

  const dispatch = useDispatch();
  const time = useSelector(state => state.calendar.time);

  const { user } = useAuth();
  const columns = user.columns
  const columnList = columns ?  columns.map(item => item.name) : columnArray;
    // const columnList = columns.map(item => item.name);

  const handleChangeCategory = async (taskFormData, newCategory) => {
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
      <ModalContainer open={open} style={{ left: left, top: top }}>
        <Ul>
          {columnList.map(
            item =>
              status !== item && (
                <Li key={item}>
                  <Button
                    aria-label={`To category ${item}`}
                    type="button"
                    onClick={() => {
                      handleChangeCategory(taskFormData, item);
                    }}
                  >
                    <Span>{item}</Span> <IconBtnMoveTask />
                  </Button>
                </Li>
              )
          )}
        </Ul>
      </ModalContainer>
    </Overlay>
  );
};
