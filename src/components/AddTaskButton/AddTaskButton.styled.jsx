import styled from 'styled-components';

export const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  width: 100%;
  height: 52px;
  gap: 8px;  
  margin-top: auto;

  color: var(--primary-text-color);
  background: var(--active-item-sidebar-background);
  border: 1px dashed #3E85F3;
  border-radius: 8px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px; 

  :hover{
    background: #c6e6ff;
    transition: 200ms;
  }
`