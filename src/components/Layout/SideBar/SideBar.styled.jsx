import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  position: fixed;
  padding: 24px 20px;
  background-color: var(--sidebar-bgc-color);
  width: 225px;
  height: 100vh;
  z-index: 2;
  @media (min-width: 768px) {
    width: 289px;
  }

  @media (max-width: 1439px) {
    left: 0;
    transform: translateX(-100%);
    &.openMobalMenu {
      display: block;
      transform: translateX(0%);
    }
  }
`;

export const LogoContainer = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 39px;
`;
export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 64px;
  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const Title = styled.div`
    display: flex;
    flex-direction: row;

    font-family: var(--secondary-font);
    font-size: 16px;
    line-height: 22px;
    color: var(--accent-text-color);
    text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
    @media (min-width: 768px) {
    font-weight: 400;
    font-size: 24px;
    line-height: 24px;
    }
    @media (min-width: 768px) {
      font-size: 18px;
      line-height: 24px;
    }
    @media (min-width: 1280px) {
      font-size: 24px;
      line-height: 24px;
    }
`;

export const SpanSpecial = styled.p` 
    font-style: italic;
    @media (min-width: 768px) {
      font-size: 18px;
      line-height: 24px;
    }
    @media (min-width: 1280px) {
      font-size: 24px;
      line-height: 24px;
    }
`;

export const CloseButton = styled.div` 
    border: none;
    background: rgba(0, 0, 0, 0);
    cursor: pointer;
    padding: 0;
    @media (min-width: 1280px) {
      display: none;
    }
`;

export const LogoImg = styled.img`
    margin-right: 6px;
    width: 36px;
    height: 35px;
    @media (min-width: 768px) {
    margin-right: 10px;
    width: 60px;
    height: 58px;
    }
`;

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  z-index: 1;
`;
