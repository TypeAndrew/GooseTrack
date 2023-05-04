import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TaskModal } from 'components/TaskModal/TaskModal';
import { ContextMenu } from 'components/ContextMenu/ContextMenu';

import { deleteTasksThunk, getTasksThunk } from 'Redux/tasks/tasks.thunk';

import {
  Ul,
  Li,
  Button,
  IconBtnMoveTask,
  IconBtnEditTask,
  IconBtnDeleteTask,
} from './TaskToolbar.styled';

export const TaskToolbar = ({ status, task }) => {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  const [showContextMenu, setShowContextMenu] = useState(false);
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);

  const getCoord = e => {
    const parent = document.body.getBoundingClientRect();
    const element = e.target.getBoundingClientRect();
    setX(element.left - parent.left);
    setY(element.top - parent.top + 20);
  };

  const toggleShowContextMenu = e => {
    if (!showContextMenu) {
      getCoord(e);
    }
    setShowContextMenu(!showContextMenu);
  };
  const handleCloseContextMenu = () => {
    setShowContextMenu(false);
  };

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

  return (
    <>
      <Ul>
        <Li>
          <Button type="button" onClick={toggleShowContextMenu}>
            <IconBtnMoveTask />
          </Button>
          {showContextMenu && (
            <ContextMenu
              status={status}
              handleCloseModal={handleCloseContextMenu}
              taskFormData={task}
              open={showContextMenu}
              left={x}
              top={y}
            />
          )}
        </Li>
        <Li>
          <Button type="button" onClick={handleShowModal}>
            <IconBtnEditTask />
          </Button>
        </Li>
        <Li>
          <Button type="button" onClick={handleDelete}>
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
