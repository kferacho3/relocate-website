import React from 'react';
import Calendar from 'react-calendar';
import {
  CalendarContainer,
  DateButtonWrap,
  DateContainer, DateForm,
  DateFormContainer,
  DateHeader,
  DateLeftButton, DateRightButton, DateTopLine
} from './FormElements';
//import emailjs from 'emailjs-com';
import "./Form.scss";

import 'react-calendar/dist/Calendar.css';
//import s1 from '../BookImg/DateImg1.svg';
//import s2 from '../BookImg/DateImg2.svg';
function Date({isOpen, toggle, nextStep, prevStep }) {

  const handleNext = () => {
    nextStep();
  };

  const handlePrevious = () => {
    prevStep();
  };

  return (
<>

<DateContainer>
  <DateHeader>Please select a preferred date for your move:</DateHeader>
  <DateTopLine>Please note that you may reschedule your move after booking if necessary.</DateTopLine>
  <DateFormContainer>

      <DateForm>
      <CalendarContainer>
      <Calendar calendarType='US' />
    </CalendarContainer>

   
      <DateButtonWrap>
          <DateLeftButton onClick={handlePrevious}>BACK</DateLeftButton>
          <DateRightButton onClick={handleNext}>NEXT</DateRightButton>
      </DateButtonWrap>
      </DateForm>
    </DateFormContainer>
  </DateContainer>
</>
  );
}
export default Date;