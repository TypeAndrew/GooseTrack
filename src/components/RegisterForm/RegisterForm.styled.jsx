import styled from 'styled-components';

export const ErrorDiv = styled.div`
  position: absolute;
  bottom: -18px;
left:16px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: var(--error-validation-color);
`;

export const ButtonToggleIcon = styled.button`
  cursor: pointer;
  position: absolute;
  right: 12px;
  top: 16px;
  border: none;
  width: 16px;
  height: 16px;
  padding: 0;
  background-color: inherit;
`;

export const DivWrap = styled.div`
  position: relative;
`;
