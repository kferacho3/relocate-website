import React from 'react';

import { CalendarComponent } from "@syncfusion/ej2-react-calendars";
import {
  DateButtonWrap,
  DateContainer, DateForm,
  DateFormContainer,
  DateHeader,
  DateLeftButton, DateRightButton, DateTopLine
} from './FormElements';
//import emailjs from 'emailjs-com';
import "./Form.scss";
//import s1 from '../BookImg/DateImg1.svg';
//import s2 from '../BookImg/DateImg2.svg';
function Date({isOpen, toggle}) {


  return (
<>

<DateContainer>
  <DateHeader>Please select a preferred date for your move:</DateHeader>
  <DateTopLine>Please note that you may reschedule your move after booking if necessary.</DateTopLine>
  <DateFormContainer>

      <DateForm>
      <div className="calendar">
        <CalendarComponent isMultiSelection={true} />
        {/* <Calendar/> */}
      </div>

   
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