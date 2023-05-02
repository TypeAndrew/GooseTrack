import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  margin: 0 auto;
  background-color: var(--secondary-bgc-color);

  max-width: 1600px;
`;

export const Wrapper = styled.div`
  display: block;
  width: 100%;
  padding: 20px;
  height: 100vh;
  @media (min-width: 768px) {
    padding: 32px;
    // width:704px;
  }
  @media (min-width: 1280px) {
    margin-left: 289px;
    padding-left: auto;
    padding-right: auto;
    width:1087px
  }
`;
