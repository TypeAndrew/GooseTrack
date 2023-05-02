import styled from 'styled-components';
import svg from '../../images/homePage_images/Icon.svg';
import img from '../../images/homePage_images/logo.svg';
import { Link } from 'react-router-dom';

export const FlexHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--accent-text-color);
  height: 812px;
  margin-bottom: 0;
`;

export const TabletWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 55px;
    margin-bottom: 222px;
    direction: rtl;
  }

  @media (min-width: 1440px) {
    margin-top: 55px;
    margin-bottom: 200px;
  }
`;

export const MainLogo = styled.h1`
  font-family: var(--secondary-font);
  font-style: normal;
  font-weight: 400;
  font-size: 44px;
  line-height: 48px;
  color: var(--btn-text-color);
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
  font-weight: 800;
  height: 48px;
  margin-bottom: 32px;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 596px;
    height: 150px;
    font-size: 120px;
    line-height: 150px;
    margin: 0;
  }
`;

export const SpanLogo = styled.span`
  font-style: italic;
`;

export const StyledButton = styled.button`
  font-family: var(--primary-font);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 131px;
  height: 46px;
  left: 122px;
  top: 456px;
  color: var(--btn-text-color);
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
  border-radius: 16px;
  border: transparent;
  color: var(--accent-text-color);
  background-color: var(--btn-text-color);
  direction: ltr;
  cursor: pointer;
`;

export const LoginButtonLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: var(--accent-text-color);
`;

export const FlexedIMG = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLogoIMG = styled.svg`
  margin-right: auto;
  height: 292px;
  margin-left: -75px;
  background: url(${img});
  background-repeat: none;
`;

export const StyledIMG = styled.svg`
  width: 15px;
  height: 16px;
  background: url(${svg});
  background-repeat: none;
`;

export const StyledSignUpLink = styled(Link)`
  margin-top: 222px;
  font-family: var(--primary-font);
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  text-decoration-line: underline;
  color: var(--btn-text-color);
  cursor: pointer;

  @media (min-width: 768px) {
    margin-top: 0;
    margin-right: 24px;
    font-family: var(--primary-font);
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    text-decoration-line: underline;
    color: var(--btn-text-color);
    cursor: pointer;
  }
`;
