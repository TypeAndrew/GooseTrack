import styled from 'styled-components';

import { ReactComponent as MoveTask } from '../../../images/icons/move-task.svg';
import { ReactComponent as EditTask } from '../../../images/icons/edit-task.svg';
import { ReactComponent as DeleteTask } from '../../../images/icons/delete-task.svg';

export const Ul = styled.ul`
  padding: 0px;
    display: flex;
    gap: 10px;
`;
export const Li = styled.li`
 
`;
export const Button = styled.button`
  border: none;
  background-color: inherit;
  width: 15px;
  height: 15px;
  padding: 0;
`;
export const IconBtnMoveTask = styled(MoveTask)`
position: relative;
  stroke: var(--primary-text-color);
  :hover {
    stroke: var(--accent-bgc-color);
    transition: 200ms;
  }
`;
export const IconBtnEditTask = styled(EditTask)`
  stroke: var(--primary-text-color);
  :hover {
    stroke: var(--accent-bgc-color);
    transition: 200ms;
  }
`
export const IconBtnDeleteTask = styled(DeleteTask)`
  stroke: var(--primary-text-color);
  :hover {
    stroke: var(--accent-bgc-color);
    transition: 200ms;
  }
`