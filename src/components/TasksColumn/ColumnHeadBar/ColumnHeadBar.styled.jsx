import styled from 'styled-components';
import { ReactComponent as AddTask } from '../../../images/icons/plus-in-circle.svg';

export const Div = styled.div`
  height: 38px;
  margin-bottom: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const H2 = styled.h2`
  color: var(--primary-text-color);
`;

export const IconBtn = styled(AddTask)`
  stroke: var(--primary-text-color);
  :hover {
    stroke: var(--accent-bgc-color);
    transition: 200ms;
  }
`;
