import styled from 'styled-components';

export const LabelComponent = styled.label`
  display: block;
  margin-bottom: 8px;
  color: ${props => props.color || `var(--form-text-color)`};;

`;

