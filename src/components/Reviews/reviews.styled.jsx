import styled from "styled-components";
import {
  mainTextFontFamily,
  primaryAccentColor,
  secondaryAccentColor,
  ReviewTextColor,
} from "../../Helpers/variables/globalStyles.styled";

export const ReviewsTitle = styled.h2`
  width: 129px;
  height: 32px;
  margin-top: 64px;
  font-family: ${mainTextFontFamily};
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  text-transform: uppercase;
  color: ${primaryAccentColor};

  @media (min-width: 768px) {
    width: 184px;
    height: 44px;
    font-size: 40px;
    line-height: 44px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px;
  max-width: 335px;
  height: 150px;
  text-align: center;
  border: 1px solid ${secondaryAccentColor};
  border-radius: 10px;
  padding: 20px;

  @media (min-width: 768px) {
    max-width: 604px;
  }

  @media (min-width: 1280px) {
    max-width: 504px;
  }
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const Name = styled.h3`
  margin-top: 10px;
`;

export const Rating = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 60px;
  margin-top: 0;
`;

export const Star = styled.span`
  margin: 0 5px;
  font-size: 15px;
  color: ${(props) => (props.active ? "#FFC107" : "#E0E0E0")};
  cursor: pointer;
`;

export const ReviewText = styled.p`
  margin: 10px 0;
  width: 100%;
  height: 36px;
  font-family: ${mainTextFontFamily};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: ${ReviewTextColor};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0px;
  margin-bottom: 80px;
`;

export const Button = styled.button`
  margin: 0 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: transparent;
  font-size: 16px;
  cursor: pointer;
  outline: none;
`;

export const FlexConteiner = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
`;

export const WrapperReviewConteiner = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
  }
`;
