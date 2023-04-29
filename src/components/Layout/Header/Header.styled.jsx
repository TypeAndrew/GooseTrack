import styled from "styled-components";

export const HeaderPage= styled.header `
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 24px;
  margin-bottom: 64px;
  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media (min-width: 1280px) {
    padding-top: 40px;
  }
    color: var(--primary-text-color);
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Overlay = styled.div`
  display: none;
  @media (min-width: 1280px) {
    display: block;
  }
`;
export const MenuOpen = styled.svg`
  width: 24px;
  height: 24px;
  stroke: var(--calendar-digit-color);
  display: flex;
  cursor: pointer;
  @media (min-width: 768px) {
    width: 34px;
    height: 34px;
  }
  @media (min-width: 1280px) {
    display: none;
  }
`;
