import {
  Ul,
  Li,
  Button,
  IconBtnMoveTask,
  IconBtnEditTask,
  IconBtnDeleteTask,
  ModalWrapper,
  BtnWrapper,
  ModalBtn,
  ModalText,
} from './TaskToolbar.styled';
import { useEffect, useRef, useState } from 'react';
import { TaskModal } from 'components/TaskModal/TaskModal';
import { deleteTasksThunk, getTasksThunk } from 'Redux/tasks/tasks.thunk';
import { useDispatch, useSelector } from 'react-redux';

import { ContextMenu } from 'components/ContextMenu/ContextMenu';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export const TaskToolbar = ({ status, task }) => {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  const [showContextMenu, setShowContextMenu] = useState(false);

  const toggleShowContextMenu = () => {
    setShowContextMenu(!showContextMenu);
  };
  const handleCloseContextMenu = () => {
    setShowContextMenu(false);
  };

  const node = useRef();

  const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
      const listener = event => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener('mousedown', listener);
      return () => {
        document.removeEventListener('mousedown', listener);
      };
    }, [ref, handler]);
  };

  useOnClickOutside(node, () => {
    if (showContextMenu) {
      toggleShowContextMenu();
    }
  });

  const time = useSelector(state => state.calendar.time);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDelete = async () => {
    await dispatch(deleteTasksThunk(task._id));

    await dispatch(getTasksThunk(time));
  };

  const confirmation = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <ModalWrapper>
            <h1>Are you sure?</h1>
            <ModalText>You really want delete it?</ModalText>
            <BtnWrapper>
              <ModalBtn onClick={onClose}>No</ModalBtn>
              <ModalBtn
                onClick={() => {
                  handleDelete();
                  onClose();
                }}
              >
                Yes
              </ModalBtn>
            </BtnWrapper>
          </ModalWrapper>
        );
      },
    });
  };

  return (
    <>
      <Ul ref={node}>
        <Li>
          <Button type="button" onClick={toggleShowContextMenu}>
            <IconBtnMoveTask />
          </Button>
          {showContextMenu && (
            <ContextMenu
              status={status}
              handleCloseModal={handleCloseContextMenu}
              taskFormData={task}
            />
          )}
        </Li>
        <Li>
          <Button type="button" onClick={handleShowModal}>
            <IconBtnEditTask />
          </Button>
        </Li>
        <Li>
          <Button type="button" onClick={confirmation}>
            <IconBtnDeleteTask />
          </Button>
        </Li>
      </Ul>

      {showModal && (
        <TaskModal
          handleCloseModal={handleCloseModal}
          status={status}
          taskFormData={task}
        />
      )}
    </>
  );
};
