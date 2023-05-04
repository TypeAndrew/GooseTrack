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

  const categoryNames = ['To do', 'In progress', 'Done'];

  return (
    <Overlay onClick={handleClose}>
      <ModalContainer open={open} style={{ left: left, top: top }}>
        <Ul>
          {categoryNames.map(
            item =>
              status !== item && (
                <Li key={item}>
                  <Button
                    type="button"
                    onClick={() => {
                      handleChangeCategiry(taskFormData, item);
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
