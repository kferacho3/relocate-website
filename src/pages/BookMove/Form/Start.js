import React, { useRef,  useState} from 'react';

import {
  StartContainer, StartForm, StartInput1, StartInput1Head, StartInput1Text, 
  StartInput1Img, StartHeader, StartInput2, StartInput2Head, StartInput2Text, 
  StartInput2Img, Col1, Col2, Sec1, Sec2, StartButtonWrap, StartLeftButton,
  StartRightButton, StartTopline, StartFormContainer
} from './StartElements';
//import emailjs from 'emailjs-com';
import "./Form.scss";
import s1 from '../BookImg/startImg1.svg';
import s2 from '../BookImg/startImg2.svg';
function Start({isOpen, toggle}) {


  return (
<>

<StartContainer>
  <StartHeader>Choose which service best suits your needs to get the best price matching.</StartHeader>
  <StartTopline>Select from our affordable options to accomodate you.</StartTopline>
  <StartFormContainer>

      <StartForm class="radio-group">
      <label>
      <StartInput1 type="radio"
      class="radio isHidden"
                    value="Truck & Packers"
                    name="start"
                    id='start'
                    //checked={state.service === 'Start'}
                    //onChange={handleInput}
                    />
        <Col1 class='radio' >
        <Sec1>
            <StartInput2Head>Truck & Packers</StartInput2Head>
            <StartInput2Text>Need both a truck and a set of packers for your move? 
                            Select this option and you will receive a 26 foot truck,
                            a certified and licensed CDL driver, and packers for your move!</StartInput2Text>
       </Sec1>
        <Sec2>
          <StartInput1Img src={s1}/>
        </Sec2>
      </Col1>
      </label>

      <label>
          <StartInput2 type="radio"
          class="radio isHidden"
                        value="Packers Only"
                        name="start"
                        id='start'
                      // checked={state.service === 'Start'}
                      // onChange={handleInput}
                      />
          <Col2 class='radio' >
            <Sec2>
              <StartInput2Img src={s2}/>
            </Sec2>
            <Sec1>
                <StartInput2Head>Packers Only</StartInput2Head>
                <StartInput2Text>Already have a truck or need a labor service? Select
                                this option and we will send an appropriate amount of 
                                packers to complete your service.</StartInput2Text>

            </Sec1>
          </Col2>
      </label>
      <StartButtonWrap>
        <StartLeftButton>BACK</StartLeftButton>
        <StartRightButton>NEXT</StartRightButton>
      </StartButtonWrap>
      </StartForm>
    </StartFormContainer>
  </StartContainer>
</>
  );
}
export default Start;