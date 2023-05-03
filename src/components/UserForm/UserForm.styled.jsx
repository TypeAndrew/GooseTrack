import styled from 'styled-components';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const Avatar = styled.div`
  position: absolute; 
  top: 35%; left: 50%; 
  transform: translate(-50%, -50%);
  text-align: center;
  
  @media screen and (min-width: 768px) {
    top: 9%; left: 50%; 
  }
  @media screen and (min-width: 1280px) {

    top: 15%; left: 50%;

  }
  `

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 335px;
  height: 653px;
  background: #FFFFFF;
  border-radius: 16px;
  @media screen and (min-width: 768px) {
    width: 704px;
    height: 920px;
  }
  @media screen and (min-width: 1280px) {
    width: 1087px;
    height: 752px;
  }
`;

export const Title = styled.h2`
    margin-bottom: 4px;
    font-family: Inter;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.3;
    color: rgb(52, 52, 52);

  @media screen and (max-width: 767px) {
    margin-top: 59px;
  }
  
  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
    
  }
`;

export const Forms = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

export const InputList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  p {
    margin-bottom: 8px;
  }
  @media screen and (min-width: 768px) {
    width: 354px;
    min-height: 458px;
    justify-content: space-between;
  }
  @media screen and (min-width: 1280px) {
    width: 758px;
    min-height: 264px;
  }
`;

export const Input = styled.input`
  width: 299px;
  height: 42px;
  padding-left: 18px;
  
  border-radius: 8px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;
  
  @media screen and (min-width: 768px) {
    width: 354px;
    
  }
`;

export const DatePick = styled(DatePicker)`
  width: 299px;
  height: 42px;
  padding-left: 18px;
 
  border-radius: 8px;
 
  font-family: 'Inter';
  font-style: normal;
 
  @media screen and (min-width: 768px) {
    width: 354px;
    height: 46px;
   
  }
`;

export const InputFile = styled.input`
  opacity: 0;
  height: 0;
  width: 0;
  line-height: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
`;

export const ImgAvatar = styled.img`
  text-align: center;
  width: 52px;
  height: 52px;
  
  
  
  @media screen and (min-width: 768px) {
    margin-top: 20px;
    margin-bottom: 24px;
    width: 90px;
    height: 90px;
  }
  @media screen and (min-width: 1280px) {

    margin-top: 20px;
    margin-bottom: 20px;

  }
`;

export const ImgBtnWrapper = styled.div`
 `;

export const ImgBtn = styled.img`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14px;
  height: 14px;
  
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const User = styled.p`
  margin-bottom: 40px;
  font-family: Inter;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.2;
  color: rgb(97, 97, 97);
  
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 18px;
  }
   `;

export const ContainerAvatar = styled.div`
 display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  border: 2px solid rgb(62, 133, 243);
  border-radius: 50%;
  overflow: hidden;

  @media screen and (max-width: 767px) {
    position: absolute;
    top: -36px;
    left: 132px;
    background-color: white;
  }

  @media screen and (min-width: 768px) {
    margin-top: 40px;
    margin-bottom: 20px;
    width: 124px;
    height: 124px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 60px;
    margin-bottom: 20px;
    width: 124px;
    height: 124px;
  }`;

export const LabelImg = styled.label`
  position: absolute;
    left: 177px;
    top: 23px;
  @media screen and (min-width: 768px) {
    left: 200px;
    top: 143px;
  }
  @media screen and (min-width: 1280px) {
    left: 400px;
    top: 167px;
  }
`;

export const LabelBtn = styled.label`
    display: flex;
    flex-direction: column;
    font-family: Inter;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.2;
    color: rgb(0, 0, 0);
  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
    }
`;

export const Btn = styled.button`
  margin-left: auto;
  margin-right: auto;
  padding: 0;
  width: 195px;
  height: 46px;
  border-radius: 16px;
  border: none;
  cursor: pointer;
  font-family: 'Inter';
  font-style: normal;
  color: white;
  background: #3E85F3;
  :hover,
  :focus {
    background: #2B78EF;
    color: rgb(255, 255, 255);
   }
  @media screen and (min-width: 768px) {
    width: 262px;
    height: 48px;
  }
 `;

 export const DatePickerWrapper = styled.div`
  & .react-datepicker {
    background-color: #3E85F3;
    color: #FFFFFF;
    border-radius: 16px;
  }

  & .react-datepicker .react-datepicker__header {
    background-color: #3E85F3;
    color: #FFFFFF;
    border-radius: 16px 16px 0 0;
    border-bottom: 1px solid #FFFFFF;
  }

  & .react-datepicker__navigation-icon {
    ::before {
      border-color: #FFFFFF;
    }
  }

  & .react-datepicker__current-month {
    color: #FFFFFF;
  }

  & .react-datepicker__day {
    background-color: #3E85F3;
    color: #FFFFFF;
    :hover,
    :focus {
      background-color: #DCEBF7;
      color: #3E85F3;
      border-radius: 24px;
    }
  }

  & .react-datepicker__day-name {
    color: #FFFFFF;
  }

  & .react-datepicker__day--selected {
    background-color: #FFFFFF;
    color: #3E85F3;
    border-radius: 24px;
  }

  & .react-datepicker__day--weekend {
    color: #FFFFFF;
  }

  & .react-datepicker__day--outside-month {
    color: #3E85F3;
  }
`;