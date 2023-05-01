import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  position: relative;
  margin: 0 auto;
  background-color: var(--secondary-bgc-color);

  @media (min-width: 376px) {
    min-width: 375px;
    width: 100%;
    max-width:375px;
  }
  @media (min-width: 425px) {
    /* min-width: 425px; */
  }
  @media (min-width: 768px) {
    min-width: 768px;

    display: flex;
  }
  @media (min-width: 1280px) {
    min-width: 1280px;
    /* max-width: 1280px; */
  }
  /* @media (min-width: 1024px) {
    min-width: 1024px;
  }
  
  @media (min-width: 1440px) {
    min-width: 1440px;
  } */
`;

export const Wrapper = styled.div`
  display: block;
  width: 100%;
  @media (min-width: 1280px) {
    padding-left: 289px;
  }
`;
