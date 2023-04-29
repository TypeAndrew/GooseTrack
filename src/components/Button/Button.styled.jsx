import styled from 'styled-components';

export const ButtonComponent = styled.button`
  display: flex;
  justify-content: center;
  gap: 14px;
  align-items: center;
  width: 100%;
  height: 46px;
  cursor: pointer;

  background-color: var(--accent-btn-background);
  color: var(--btn-text-color);
  box-shadow: 4px 2px 16px var(--btn-shadow-color);
  border-radius: 16px;
  border: none;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
 

  letter-spacing: -0.02em;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }

  :disabled {
    background: var(--disabled-btn-background);
}
  :hover {
    background: var(--hover-btn-background);}
`;
