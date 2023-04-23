import styled from 'styled-components';
import { Form } from 'formik';

export const FormComponent = styled(Form)`
  min-height: 469px;
  border-radius: 8px;
  width: 100%;
  padding: 40px 24px;
  
  background: #ffffff;
  color: #111111;
  
  font-weight: 600;
  font-size: 14px;
  line-height: 1.214;
  @media screen and (min-width: 375px) {
    width: 335px;
  }
  @media screen and (min-width: 768px) {
    width: 480px;
    padding: 40px;
  }
`;
export const Title = styled.h2`
  margin-bottom: 32px;
  
  color: #3e85f3;
  
  font-weight: 600;
  font-size: 18px;
  line-height: 1.33;
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;

    font-size: 24px;
  }
`;
