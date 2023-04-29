import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  background-color: var(--secondary-bgc-color);
  @media (min-width: 376px) {
    max-width: 376px;
  }
  @media (min-width: 425px) {
    min-width: 425px;
  }
  @media (min-width: 768px) {
    min-width: 768px;
    display: flex;
  }
  @media (min-width: 1024px) {
    min-width: 1024px;
  }
  @media (min-width: 1440px) {
    min-width: 1440px;
  }
`;

export const Wrapper = styled.div`
  display: block;
  width: 100%;
  @media (min-width: 1280px) {
    margin-left: 289px;
  }
`;
