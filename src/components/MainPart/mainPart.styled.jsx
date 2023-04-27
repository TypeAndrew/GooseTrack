import styled from 'styled-components';
import {
  mainTextFontFamily,
  primaryAccentColor,
  secondaryAccentColor,
  primaryTextColor,
} from '../../Helpers/variables/globalStyles.styled';

export const FlexedCalendar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 64px;

  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (min-width: 1280px) {
    align-items: flex-start;
    flex-direction: row;
    padding-left: 205px;
    padding-right: 128px;
    gap: 157px;
    margin-top: 64px;
  }
`;

export const AllTextWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    direction: ltr;
  }

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    direction: rtl;
  }
`;

export const BlockNumber = styled.h2`
  display: flex;
  justify-content: flex-start;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 80px;
  line-height: 100%;
  letter-spacing: -4px;
  color: ${primaryAccentColor};
  margin-bottom: 15px;
  direction: ltr;

  @media (min-width: 768px) {
    font-size: 104px;
  }
`;

export const CalendarButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  padding-left: 10px;
  padding-right: 10px;
  height: 56px;
  background: ${secondaryAccentColor};
  border-radius: 44px;
`;

export const FlexedCalendarSecond = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (min-width: 768px) {
    direction: rtl;
    display: flex;
    align-items: flex-start;
  }

  @media (min-width: 1200px) {
    direction: rtl;
    display: flex;
    align-items: flex-start;
  }
`;

export const ButtonLink = styled.a`
  font-family: ${mainTextFontFamily};
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  text-transform: uppercase;
  color: ${primaryAccentColor};

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 44px;
  }
`;

export const BlockTitle = styled.h2`
  font-family: ${mainTextFontFamily};
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  text-transform: uppercase;
  color: ${primaryTextColor};
  margin-top: 8px;
  margin-bottom: 14px;

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 44px;
    margin-bottom: 24px;
  }
  @media (min-width: 1280px) {
    display: flex;
    justify-content: flex-end;
  }
`;

export const WrapperBlocktext = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  max-width: 375px;

  @media (min-width: 768px) {
    width: 275px;
  }

  @media (min-width: 1280px) {
    display: flex;
    justify-content: flex-start;
    direction: ltr;
  }
`;

export const BlockText = styled.p`
  font-family: ${mainTextFontFamily};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: ${primaryTextColor};
  margin-bottom: 40px;

  @media (min-width: 768px) {
    margin-bottom: 48px;
  }

  @media (min-width: 1280px) {
    display: flex;
    justify-content: flex-end;
  }
`;

export const BlockPicture = styled.img`
  width: 335px;
  height: 457px;
  background-image: url(${props => props.imageUrl});
  object-fit: cover;
  border-radius: 30px;

  @media (min-width: 768px) {
    width: 704px;
    height: 700px;
    background-image: url(${props => props.imageUrlx2});
    object-fit: cover;
  }

  @media (min-width: 1280px) {
    width: 604px;
    height: 700px;
    background-image: url(${props => props.imageUrlx2});
    object-fit: cover;
  }
`;
