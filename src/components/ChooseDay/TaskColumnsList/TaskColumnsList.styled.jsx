import styled from "styled-components";

export const Ul = styled.ul`

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  overflow-x: auto;
  width: 100%;
  /* margin-left: 20px;
  margin-right: 20px; */
  gap: 20px;

  ::-webkit-scrollbar {
    height: 14px;
    background-color: #f2f2f2;
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #e7e5e5;
    border-radius: 12px;
  }

  ::-webkit-scrollbar-track{
    right: 6px;
  }

@media screen and (min-width: 768px) {
  /* margin-left: 32px;
  margin-right: 32px; */
  gap: 16px;
  }
`