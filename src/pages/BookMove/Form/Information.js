import React, { useRef,  useState} from 'react';

import {
  InformationContainer, InformationForm, InformationHeader, InformationButtonWrap, 
  InformationLeftButton, InformationRightButton, InformationTopline, InformationFormContainer, 
  InfoInputContainer, Col1, Col2, IFirstName, ILastName, IPhoneNumber, IEmail, ILocationContainer, 
  ILocationText, ILocation
} from './InformationElements';
//import emailjs from 'emailjs-com';
import "./Form.scss";
//import s1 from '../BookImg/InformationImg1.svg';
//import s2 from '../BookImg/InformationImg2.svg';
function Information({isOpen, toggle}) {


  return (
<>

<InformationContainer>
  <InformationHeader>Choose which service best suits your needs to get the best price matching.</InformationHeader>
  <InformationTopline>Select from our affordable options to accomodate you.</InformationTopline>
  <InformationFormContainer>

      <InformationForm>
          <InfoInputContainer>
            <Col1>
            <IFirstName></IFirstName>
            <ILastName></ILastName>
            <IPhoneNumber></IPhoneNumber>
            <IEmail></IEmail>

            </Col1>
              <ILocationContainer>
                <ILocationText></ILocationText>
                <ILocation></ILocation>
              </ILocationContainer>
            <Col2>

            </Col2>
          </InfoInputContainer>
      <InformationButtonWrap>
        <InformationLeftButton>BACK</InformationLeftButton>
        <InformationRightButton>NEXT</InformationRightButton>
      </InformationButtonWrap>
      </InformationForm>
    </InformationFormContainer>
  </InformationContainer>
</>
  );
}
export default Information;