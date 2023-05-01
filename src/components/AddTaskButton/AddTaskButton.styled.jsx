import styled from 'styled-components';
import { ReactComponent as Plus } from '../../images/icons/plus.svg';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
  gap: 8px;
  isolation: isolate;
  cursor: pointer;

  width: 100%;
  height: 48px;

  background: var(--active-item-sidebar-background);
  border: var(--border-add-btn);
  border-radius: 8px;
`;

export const AddTask = styled.span`
  font-family: var(--primary-font);
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;

  color: var(--primary-text-color);
`;
export const IconPlus = styled(Plus)`
  stroke: var(--primary-text-color);
`;
