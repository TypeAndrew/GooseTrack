import styled from 'styled-components';
import { Field } from 'formik';

export const InputComponent = styled(Field)`
  display: block;
  margin-bottom: 24px;
  margin-top: 8px;
  border: 1px solid #dce3e5;
  border-radius: 8px;
  height: 46px;
  width: 100%;
  padding-left: 14px;

  @media screen and (min-width: 768px) {
    margin-bottom: 18px;
  }
`;
