import styled from 'styled-components';

import { ReactComponent as MoveTask } from '../../images/icons/move-task.svg';

export const IconBtnMoveTask = styled(MoveTask)`
  stroke: var(--btn-arrow-accent-color);
  :hover {
    stroke: var(--accent-bgc-color);
    transition: 200ms;
  }
`;

export const Overlay = styled.div`
  /* position: fixed; 
   left: 0;
  top: 0;
  right: 0;
  bottom: 0;  */
  /* width: 100vw;
  height: 100vh; */
  background-color: transparent;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  position: absolute;
  bottom: -68px;
  right: 0;
  z-index: 1001;
  padding: 14px;
  width: 115px;
  height: 70px;

  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0px 4px 16px rgba(17, 17, 17, 0.1);
  background-color: var(--secondary-bgc-color);
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    padding: 20px 24px;
    width: 147px;
    height: 90px;
  }
`;
export const Button = styled.button`
  width: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: var(--btn-arrow-accent-color);
  background-color: var(--secondary-bgc-color);

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 18px;
    width: 99px;
  }

  :hover {
    stroke: var(--accent-bgc-color);
    transition: 200ms;
  }
`;

export const Li = styled.li`
  display: block;
`;
export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;

  gap: 6px;
`;
