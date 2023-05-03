import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0px 8px 0 0;
  gap: 14px;
  margin-bottom: 14px;
  overflow-y: auto;
  max-height: 372px;

  ::-webkit-scrollbar {
    width: 6px;
    background-color: #f2f2f2;
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #e7e5e5;
    border-radius: 12px;
  }

  ::-webkit-scrollbar-track{
    gap: 6px;
  }

  @media screen and (min-width: 768px) {
    gap: 18px;
    margin-bottom: 32px;
  }
`;
