import styled from "styled-components";

export const HeaderPage= styled.header `
display: flex;
align-items: center;
justify-content: space-between;
max-width: 100%;
padding-top: 4px;
padding-bottom: 32px;
@media (min-width: 1280px) {
  min-height: 100px;
  padding-top: 8px;
}
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ActivePage = styled.div`
  display: none;
  @media (min-width: 1280px) {
    display: flex;
  }
`;
export const ActivePageName = styled.h2`
  display: none;
  @media (min-width: 1280px) {
    display: flex;
    font-family: var(--primary-font);
    font-weight: 700;
    font-size: 32px;
    line-height: 32px;
    color: var(--primary-text-color);
    margin-bottom: 8px;
  }
`;
export const MenuOpen = styled.svg`
  width: 24px;
  height: 24px;
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

export const CalendarLogoImg = styled.img`

`

export const Text = styled.p`
  font-family: var(--primary-font);
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
`;

export const SpanStyled = styled.span`
  font-family: inherit;
  color: var(--accent-text-color);
`;