import styled from 'styled-components';

import { ReactComponent as MoveTask } from '../../../images/icons/move-task.svg';
import { ReactComponent as EditTask } from '../../../images/icons/edit-task.svg';
import { ReactComponent as DeleteTask } from '../../../images/icons/delete-task.svg';

export const Ul = styled.ul`
  padding: 0px;
  display: flex;
  gap: 10px;
`;
export const Li = styled.li``;
export const Button = styled.button`
  cursor: pointer;
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
`;
export const IconBtnDeleteTask = styled(DeleteTask)`
  stroke: var(--primary-text-color);
  :hover {
    stroke: var(--accent-bgc-color);
    transition: 200ms;
  }
`;

export const ModalWrapper = styled.div`
  background-color: #ffffff;
  text-align: center;
  padding: 20px;
  border-radius: 14px;
  box-shadow: 0px 0px 12px -2px rgb(0 0 0 / 50%);
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 26px;
`;

export const ModalBtn = styled.button`
  display: block;
  background-color: #3e85f3;
  color: #ffffff;
  border: none;
  width: 100px;
  height: 34px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  :hover {
    background-color: #61a0ffa6;
    box-shadow: 0px 0px 12px -2px rgb(0 0 0 / 50%);
  }
`;

export const ModalText = styled.p`
  margin: 12px 0px;
`;
