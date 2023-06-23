import React from 'react';

import {
  TimeButtonWrap,
  TimeContainer, TimeForm,
  TimeFormContainer,
  TimeFormHeader,
  TimeFormTopLine,
  TimeHeader,
  TimeImg,
  TimeImgContainer,
  TimeInput,
  TimeLeftButton,
  TimeOptContainer,
  TimeOptWrap,
  TimeRow,
  TimeText,
  TimeTextHeader,
  TimeTextSection,
  TimeTopLine,
  TimeWrapper
} from './FormElements';
//import emailjs from 'emailjs-com';
import "./Form.scss";

import t1 from './FormImg/formTime1.svg';
import t2 from './FormImg/formTime2.svg';
import t3 from './FormImg/formTime3.svg';
import t4 from './FormImg/formTime4.svg';

function Time({isOpen, toggle, nextStep, prevStep }) {

  const handleNext = () => {
    nextStep();
  };

  const handlePrevious = () => {
    prevStep();
  };


  return (
<>

<TimeContainer>
  <TimeHeader>Please indicate the preferred start time for your selected move on:</TimeHeader>
  <TimeTopLine>We kindly ask that you select a time that suits your schedule best.</TimeTopLine>
  <TimeFormContainer>



      <TimeForm>
        <TimeFormHeader>Choose type of Time for address:</TimeFormHeader>
        <TimeFormTopLine>511 S Grand Ave Spencer, Idaho 51301</TimeFormTopLine>
        <TimeWrapper>
                  <TimeRow>
                  <div>
                  <TimeOptWrap>
                  <TimeInput 
                      type="radio"
                      class="radio isHidden"
                      value="Morning Service"
                      name="Time"
                      id='Time' />
                  <TimeOptContainer>
                  <TimeImgContainer>
                    <TimeImg style={{ backgroundImage:`url(${t1})` }}/>
                    </TimeImgContainer>
                    <TimeTextSection>
                      <TimeTextHeader>Morning Service</TimeTextHeader>
                      <TimeText>The period from sunrise until noon. Ideal if you want to complete your move early in the day. </TimeText>
                    </TimeTextSection>
                  </TimeOptContainer>
                  </TimeOptWrap>

                  <TimeOptWrap>
                  <TimeInput  
                      type="radio"
                      class="radio isHidden"
                      value="Evening Service"
                      name="Time"
                      id='Time' />
                  <TimeOptContainer>
                  <TimeImgContainer>
                    <TimeImg style={{ backgroundImage:`url(${t2})` }}/>
                    </TimeImgContainer>
                    <TimeTextSection>
                      <TimeTextHeader>Evening Service</TimeTextHeader>
                      <TimeText>The time from sunset until bedtime. May be convenient if you have daytime commitments</TimeText>
                    </TimeTextSection>
                  </TimeOptContainer>
                  </TimeOptWrap>
                  </div>

                  <div>
                  <TimeOptWrap>
                  <TimeInput 
                      type="radio"
                      class="radio isHidden"
                      value="Afternoon Service"
                      name="Time"
                      id='Time' />
                  <TimeOptContainer>
                  <TimeImgContainer>
                    <TimeImg style={{ backgroundImage:`url(${t3})` }}/>
                    </TimeImgContainer>
                    <TimeTextSection>
                      <TimeTextHeader>Afternoon Service</TimeTextHeader>
                      <TimeText> The period from noon until evening. A great option for a midday move.</TimeText>
                    </TimeTextSection>
                  </TimeOptContainer>
                  </TimeOptWrap>

                  <TimeOptWrap>
                  <TimeInput 
                      type="radio"
                      class="radio isHidden"
                      value="Night Service"
                      name="Time"
                      id='Time' />
                  <TimeOptContainer>
                  <TimeImgContainer>
                    <TimeImg style={{ backgroundImage:`url(${t4})` }}/>
                    </TimeImgContainer>
                    <TimeTextSection>
                      <TimeTextHeader>Night Service</TimeTextHeader>
                      <TimeText>The period from bedtime until dawn. Please note that night time moves will incur an additional service fee</TimeText>
                    </TimeTextSection>
                  </TimeOptContainer>
                  </TimeOptWrap>
        
                  </div>

                  </TimeRow>
                </TimeWrapper>

            
                <TimeButtonWrap>
                <TimeLeftButton onClick={handlePrevious}>BACK</TimeLeftButton>
                </TimeButtonWrap>
            </TimeForm>
    </TimeFormContainer>
  </TimeContainer>
</>
  );
}
export default Time;