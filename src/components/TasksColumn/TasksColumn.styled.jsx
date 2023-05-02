import styled from 'styled-components';

export const Li = styled.li`
  padding: 25px 18px 10px 18px;
  min-width: calc(100vw - 40px);
  max-height: 568px;
  background: var(--primary-bgc-color);
  border: 1px solid var(--auth-placeholder-color);
  border-radius: 8px;

  display: block;

  @media screen and (min-width: 375px) {
    max-width: 335px;
    min-width: 335px;
  }
  @media screen and (min-width: 768px) {
    /* max-width: calc(100vw/2 - 30px);
    min-width: calc(100vw/2 - 30px); */
    padding: 18px 20px 28px;
    max-width: 344px;
    min-width: 344px;
  }
  @media screen and (min-width: 1280px) {
    padding: 25px 20px 28px;
    /* min-width: calc(100vw/3 - 176px); */
    max-width: 305px;
    min-width: 305px;
  }
`;
