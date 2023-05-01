import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
  gap: 14px;
  margin-bottom: 14px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    gap: 18px;
    margin-bottom: 32px;
  }
`;
