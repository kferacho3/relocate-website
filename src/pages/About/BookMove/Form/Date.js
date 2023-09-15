import React from 'react';
import Calendar from 'react-calendar';
import "./Form.scss";
import {
  BookMoveHeader,
  BookMoveTopLine,
  CalendarContainer,
  DateContainer,
  DateFormContainer
} from './FormElements';

import 'react-calendar/dist/Calendar.css';

function Date() {
  return (
    <DateContainer>
      <BookMoveHeader>Please select a preferred date for your move:</BookMoveHeader>
      <BookMoveTopLine>Please note that you may reschedule your move after booking if necessary.</BookMoveTopLine>
      <DateFormContainer>
          <CalendarContainer>
            <Calendar calendarType='US' />
          </CalendarContainer>
    
      </DateFormContainer>
    </DateContainer>
  );
}

export default Date;
