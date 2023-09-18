import React from 'react';

import {
  BookMoveHeader,
  BookMoveTopLine,
  Col1Start, Col2Start,
  Sec1, Sec2,
  StartContainer, StartForm,
  StartFormContainer,
  StartInput1,
  StartInput1Img,
  StartInput2, StartInput2Head,
  StartInput2Img,
  StartInput2Text
} from './FormElements';
//import emailjs from 'emailjs-com';
import s1 from '../BookImg/startImg1.svg';
import s2 from '../BookImg/startImg2.svg';
import "./Form.scss";
function Start({ handleInput, state }) {


  return (
    <>
      <StartContainer>
     
        <StartFormContainer>
        <BookMoveHeader>Choose which service best suits your needs to get the best price matching.</BookMoveHeader>
        <BookMoveTopLine>Select from our affordable options to accommodate your needed service.</BookMoveTopLine>
          <StartForm className="radio-group">
            <label>
              <StartInput1
                type="radio"
                className="radio isHidden"
                value="Truck & Packers"
                name="packers"
                id='packersTruck'
                checked={state.packers === 'Truck & Packers'}
                onChange={handleInput} 
              />
              <Col1Start className='radio' >
                <Sec1>
                  <StartInput2Head>Truck & Packers</StartInput2Head>
                  <StartInput2Text>Need both a truck and a set of packers for your move? 
                            Select this option and you will receive a 26 foot truck,
                            a certified and licensed CDL driver, and packers for your move!</StartInput2Text>
                </Sec1>
                <Sec2>
                  <StartInput1Img src={s1}/>
                </Sec2>
              </Col1Start>
            </label>

            <label>
              <StartInput2
                type="radio"
                className="radio isHidden"
                value="Packers Only"
                name="packers"
                id='packersOnly'
                checked={state.packers === 'Packers Only'}
                onChange={handleInput} 
              />
              <Col2Start className='radio' >
                <Sec2>
                  <StartInput2Img src={s2}/>
                </Sec2>
                <Sec1>
                  <StartInput2Head>Packers Only</StartInput2Head>
                  <StartInput2Text>Already have a truck or need a labor service? Select
                                this option and we will send an appropriate amount of 
                                packers to complete your service.</StartInput2Text>
                </Sec1>
              </Col2Start>
            </label>
          
     
           
          </StartForm>
        </StartFormContainer>
      </StartContainer>
    </>
  );
}

export default Start;