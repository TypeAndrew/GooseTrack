import styled from "styled-components";

export const Div = styled.div`
    height: 74px;
  
    margin-top: 24px;
    margin-bottom: 14px;
    margin-left: 20px;
    margin-right: 20px;
    background: var(--primary-bgc-color);
    border: 1px solid var(--auth-placeholder-color);
    border-radius: 8px;
  
    @media screen and (min-width: 768px) {
      height: 68px;
      margin-top: 32px;
      margin-bottom: 16px;
      margin-left: 32px;
      margin-right: 32px;
    }
  `
  