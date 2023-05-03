import styled from "styled-components";

export const Ul = styled.ul`

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  overflow-x: auto;
  width: 100%;
  padding-bottom: 12px;
  gap: 20px;

  ::-webkit-scrollbar {
    height: 12px;
    border-radius: 12px;
    @media screen and (min-width: 768px) {
      height: 14px;
  }
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--overflow-color);
    border: 4px solid var(--overflow-color);
    border-radius: 12px;
  }

  ::-webkit-scrollbar-track{
    right: 6px;
  }
  ::-webkit-scrollbar-button {
  width: 0px;
  border: 1px solid var(--overflow-color);
}

@media screen and (min-width: 768px) {
  gap: 16px;
  }
`