import styled from 'styled-components';

export const FormComponent = styled.form`
  height: 469px;
  background: #ffffff;
  border-radius: 8px;
  width: 100%;
  margin: auto;
  padding: 40px 24px;

  font-weight: 600;
  font-size: 14px;
  line-height: 1.214;

  color: #111111;

  @media screen and (min-width: 375px) {
    width: 335px;
  }
  @media screen and (min-width: 768px) {
    width: 480px;
    margin: auto;
    padding: 40px;
  }
`;
export const Title = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.33;
  margin-bottom: 32px;

  color: #3e85f3;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 40px;
  }
`;
