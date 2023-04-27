import styled from 'styled-components';

export const ButtonComponent = styled.button`
  display: flex;
  justify-content: center;
  gap: 14px;
  align-items: center;
  width: 100%;
  height: 46px;
  cursor: pointer;

  background-color: #3e85f3;
  color: #ffffff;
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
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
    background: #DCEBF7;
}
  :hover {
    background: #2B78EF;
  }
`;
