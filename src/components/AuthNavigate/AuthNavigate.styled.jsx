import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkComponent = styled(NavLink)`
  display: flex;
  justify-content: center;
  margin-top: 18px;
  font-size: 12px;
  line-height: 1.17;

  text-decoration-line: underline;

  color: var(--accent-btn-background);

  @media screen and (min-width: 768px) {
    margin-top: 24px;
    font-size: 18px;
    line-height: 1.33;
  }
`;
