import React, { useRef,  useState} from 'react';

import {
  DateContainer, DateForm, DateHeader, DateButtonWrap, 
  DateLeftButton, DateRightButton, DateTopline, DateFormContainer
} from './DateElements';
//import emailjs from 'emailjs-com';
import "./Form.scss";
//import s1 from '../BookImg/DateImg1.svg';
//import s2 from '../BookImg/DateImg2.svg';
function Date({isOpen, toggle}) {


  return (
<>

<DateContainer>
  <DateHeader>Choose which service best suits your needs to get the best price matching.</DateHeader>
  <DateTopline>Select from our affordable options to accomodate you.</DateTopline>
  <DateFormContainer>

      <DateForm>


   
      <DateButtonWrap>
        <DateLeftButton>BACK</DateLeftButton>
        <DateRightButton>NEXT</DateRightButton>
      </DateButtonWrap>
      </DateForm>
    </DateFormContainer>
  </DateContainer>
</>
  );
}
export default Date;