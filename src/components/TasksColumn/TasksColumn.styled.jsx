import styled from 'styled-components';

export const Li = styled.li`
  padding: 25px 18px 10px 18px;
  min-width: 280px;
  max-height: 568px;
  background: var(--primary-bgc-color);
  border: 1px solid var(--auth-placeholder-color);
  border-radius: 8px;

  display: block;

  @media screen and (min-width: 768px) {
    padding: 18px 20px 28px;
  }
`;
