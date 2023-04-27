import styled from 'styled-components';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 335px;
  height: 653px;
  
  border-radius: 16px;
  @media screen and (min-width: 768px) {
    width: 704px;
    height: 854px;
  }
  @media screen and (min-width: 1440px) {
    width: 1087px;
    height: 752px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 4px;
  font-family: 'Inter';
  font-style: normal;
  
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
  @media screen and (min-width: 1440px) {
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
  width: 72px;
  height: 72px;
  
  @media screen and (min-width: 768px) {
    margin-top: 40px;
    margin-bottom: 14px;
    width: 124px;
    height: 124px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 60px;
    margin-bottom: 20px;
  }
`;

export const ImgBtn = styled.img`
  width: 24px;
  height: 24px;
`;

export const User = styled.p`
  margin-bottom: 40px;
  width: 28px;
  height: 14px;
  font-family: 'Inter';
  font-style: normal;
  
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 18px;
  }
   `;

export const Container = styled.div``;

export const LabelImg = styled.label`
  position: absolute;
  left: 188px;
  top: 55px;
  @media screen and (min-width: 768px) {
    left: 200px;
    top: 143px;
  }
  @media screen and (min-width: 1440px) {
    left: 400px;
    top: 167px;
  }
`;

export const LabelBtn = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
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
  :hover,
  :focus {
    background: #DCEBF7;
   }
  @media screen and (min-width: 768px) {
    width: 262px;
    height: 48px;
  }
 `;