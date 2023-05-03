import styled from 'styled-components';
import { ReactComponent as AddTask } from '../../../images/icons/plus-in-circle.svg';

export const Div = styled.div`

  margin-bottom: 31px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    margin-bottom: 35px;
}
`;

export const H2 = styled.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  color: var(--primary-text-color);

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

export const IconBtn = styled(AddTask)`
cursor: pointer;
  stroke: var(--primary-text-color);
  :hover {
    stroke: var(--accent-bgc-color);
    transition: 200ms;
  }
`;
