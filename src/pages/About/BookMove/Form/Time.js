import React from 'react';

import "./Form.scss";
import {
  BookMoveHeader,
  BookMoveTopLine,
  TimeContainer,
  TimeForm,
  TimeFormHeader,
  TimeImg,
  TimeImgContainer,
  TimeInput,
  TimeOptContainer,
  TimeRow,
  TimeText,
  TimeTextHeader,
  TimeTextSection,
  TimeWrapper
} from './FormElements';

import t1 from './FormImg/formTime1.svg';
import t2 from './FormImg/formTime2.svg';
import t3 from './FormImg/formTime3.svg';
import t4 from './FormImg/formTime4.svg';

function Time({ state, handleInput }) {

  return (
    <TimeContainer>
      <BookMoveHeader>Please indicate the preferred start time for your selected move on:</BookMoveHeader>
      <BookMoveTopLine>We kindly ask that you select a time that suits your schedule best.</BookMoveTopLine>
        <TimeForm className="radio-group">
          <TimeFormHeader>Choose a start time for location:</TimeFormHeader>
          <TimeWrapper>
            <TimeRow>
              <div>
              <label>
              <TimeInput
                    type="radio"
                    className="radio isHidden"
                    value="Morning Service"
                    name="time"
                    id='Morning Service'
                    checked={state.time === 'Morning Service'}
                    onChange={handleInput}
                  />
           
                  <TimeOptContainer>
                    <TimeImgContainer>
                      <TimeImg style={{ backgroundImage: `url(${t1})` }} />
                    </TimeImgContainer>
                    <TimeTextSection>
                      <TimeTextHeader>Morning Service</TimeTextHeader>
                      <TimeText>The period from sunrise until noon. Ideal if you want to complete your move early in the day.</TimeText>
                    </TimeTextSection>
                  </TimeOptContainer>
                </label>

                <label>
                <TimeInput
                    type="radio"
                    className="radio isHidden"
                    value="Evening Service"
                    name="time"
                    id='Evening Service'
                    checked={state.time === 'Evening Service'}
                    onChange={handleInput}
                  />
                  <TimeOptContainer>
                    <TimeImgContainer>
                      <TimeImg style={{ backgroundImage: `url(${t2})` }} />
                    </TimeImgContainer>
                    <TimeTextSection>
                      <TimeTextHeader>Evening Service</TimeTextHeader>
                      <TimeText>The time from sunset until bedtime. May be convenient if you have daytime commitments</TimeText>
                    </TimeTextSection>
                  </TimeOptContainer>
                </label>
              </div>

              <div>
              <label>
              <TimeInput
                    type="radio"
                    className="radio isHidden"
                    value="Afternoon Service"
                    name="time"
                    id='Afternoon Service'
                    checked={state.time === 'Afternoon Service'}
                    onChange={handleInput}
                  />
           
                  <TimeOptContainer>
                    <TimeImgContainer>
                      <TimeImg style={{ backgroundImage: `url(${t3})` }} />
                    </TimeImgContainer>
                    <TimeTextSection>
                      <TimeTextHeader>Afternoon Service</TimeTextHeader>
                      <TimeText>The period from noon until evening. A great option for a midday move.</TimeText>
                    </TimeTextSection>
                  </TimeOptContainer>
                </label>
                <label>
                <TimeInput
                    type="radio"
                    className="radio isHidden"
                    value="Night Service"
                    name="time"
                    id='Night Service'
                    checked={state.time === 'Night Service'}
                    onChange={handleInput}
                  />
            
                  <TimeOptContainer>
                    <TimeImgContainer>
                      <TimeImg style={{ backgroundImage: `url(${t4})` }} />
                    </TimeImgContainer>
                    <TimeTextSection>
                      <TimeTextHeader>Night Service</TimeTextHeader>
                      <TimeText>The period from bedtime until dawn. Please note that night time moves will incur an additional service fee</TimeText>
                    </TimeTextSection>
                  </TimeOptContainer>
                </label>
              </div>
            </TimeRow>
          </TimeWrapper>
        </TimeForm>
    </TimeContainer>
  );
}

export default Time;




