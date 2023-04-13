import React, { useRef,  useState} from 'react';

import {
  StartContainer, StartForm, StartInput1, StartInput1Head, StartInput1Text, StartInput1Img,
  StartInput2, StartInput2Head, StartInput2Text, StartInput2Img, Col1, Col2, Sec1, Sec2
} from './StartElements';
//import emailjs from 'emailjs-com';



function Start({isOpen, toggle}) {


  return (
<>

<StartContainer>
    <StartForm>
    
    <StartInput1/>
    <Col1>
    <Sec1>
      <StartInput2Head>Truck & Packers</StartInput2Head>
      <StartInput2Text>Need both a truck and a set of packers for your move? 
                      Select this option and you will receive a 26 foot truck,
                      a certified and licensed CDL driver, and packers for your move!</StartInput2Text>
</Sec1>
<Sec2>
      <StartInput1Img src='https://relocate-storage.s3.us-east-2.amazonaws.com/relocate-images/BookImg/startImg1.svg'/>
      </Sec2>
</Col1>

    <StartInput2/>
    <Col2>
    <Sec2>
      <StartInput2Img src='https://relocate-storage.s3.us-east-2.amazonaws.com/relocate-images/BookImg/startImg2.svg'/>
      </Sec2>
      <Sec1>
      <StartInput2Head>Packers Only</StartInput2Head>
      <StartInput2Text>Already have a truck or need a labor service? Select
                       this option and we will send an appropriate amount of 
                       packers to complete your service.</StartInput2Text>

</Sec1>
</Col2>
    </StartForm>
  </StartContainer>
</>
  );
}
export default Start;