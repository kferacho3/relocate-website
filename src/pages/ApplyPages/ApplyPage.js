import React from 'react';

import Navbar2 from '../../components/Navbar/NavbarApplyForm';
import {
  ApplyPageContainer, ApplyPageForm,
  ApplyPageFormContainer,
  ApplyPageHeader,
  ApplyPageInput1Img,
  ApplyPageInput2Head,
  ApplyPageInput2Img,
  ApplyPageInput2Text,
  ApplyPageTopLine,
  Col1, Col2, Col3, Col4, Col5,
  Sec1, Sec2
} from './ApplyPageElements';
//import emailjs from 'emailjs-com';
import a1 from './ApplyImg/appImg1.svg';
import a2 from './ApplyImg/appImg2.svg';
import a3 from './ApplyImg/appImg3.svg';
import a4 from './ApplyImg/appImg4.svg';
import a5 from './ApplyImg/appImg5.svg';
function ApplyPage({isOpen, toggle}) {


  return (
<>
<Navbar2 isOpen={isOpen} toggle={toggle}/>
<ApplyPageContainer id={'/applyPage'}>
  <ApplyPageHeader>Join the Pack!</ApplyPageHeader>
  <ApplyPageTopLine>Select the Position Best Suited for you</ApplyPageTopLine>
  <ApplyPageFormContainer>

      <ApplyPageForm class="radio-group">
    
  
        <Col1 
                    to='/applyInfoNav/applyPacker' class='radio' >
        <Sec1>
            <ApplyPageInput2Head>Packer</ApplyPageInput2Head>
            <ApplyPageInput2Text>Need both a truck and a set of packers for your move? 
                            Select this option and you will receive a 26 foot truck,
                            a certified and licensed CDL driver, and packers for your move!</ApplyPageInput2Text>
       </Sec1>
        <Sec2>
          <ApplyPageInput1Img src={a1}/>
        </Sec2>
      </Col1>

     
          <Col2  to='/applyInfoNav/applyDriver' class='radio' >
            <Sec2>
              <ApplyPageInput2Img src={a2}/>
            </Sec2>
            <Sec1>
                <ApplyPageInput2Head>Driver</ApplyPageInput2Head>
                <ApplyPageInput2Text>Already have a truck or need a labor service? Select
                                this option and we will send an appropriate amount of 
                                packers to complete your service.</ApplyPageInput2Text>

            </Sec1>
          </Col2>
  
          <Col3  to='/applyInfoNav/applyHandman' class='radio' >
            <Sec2>
              <ApplyPageInput1Img src={a3}/>
            </Sec2>
            <Sec1>
                <ApplyPageInput2Head>Handman</ApplyPageInput2Head>
                <ApplyPageInput2Text>Already have a truck or need a labor service? Select
                                this option and we will send an appropriate amount of 
                                packers to complete your service.</ApplyPageInput2Text>

            </Sec1>
          </Col3>

     
          <Col4  to='/applyInfoNav/applyPackman' class='radio' >
            <Sec2>
              <ApplyPageInput2Img src={a4}/>
            </Sec2>
            <Sec1>
                <ApplyPageInput2Head>Packman</ApplyPageInput2Head>
                <ApplyPageInput2Text>Already have a truck or need a labor service? Select
                                this option and we will send an appropriate amount of 
                                packers to complete your service.</ApplyPageInput2Text>

            </Sec1>
          </Col4>

    
          <Col5 to='/applyInfoNav/applyCarrier' class='radio' >
            <Sec2>
              <ApplyPageInput2Img src={a5}/>
            </Sec2>
            <Sec1>
                <ApplyPageInput2Head>Carrier</ApplyPageInput2Head>
                <ApplyPageInput2Text>Already have a truck or need a labor service? Select
                                this option and we will send an appropriate amount of 
                                packers to complete your service.</ApplyPageInput2Text>

            </Sec1>
          </Col5>

      </ApplyPageForm>
    </ApplyPageFormContainer>
  </ApplyPageContainer>
</>

  );
}
export default ApplyPage;