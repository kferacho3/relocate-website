import React, { useRef,  useState} from 'react';

import {
  ServiceContainer, ServiceForm, ServiceHeader, ServiceButtonWrap, 
  ServiceLeftButton, ServiceRightButton, ServiceTopline, ServiceFormContainer
} from './ServiceElements';
//import emailjs from 'emailjs-com';
import "./Form.scss";
//import s1 from '../BookImg/ServiceImg1.svg';
//import s2 from '../BookImg/ServiceImg2.svg';
function Service({isOpen, toggle}) {


  return (
<>

<ServiceContainer>
  <ServiceHeader>Choose which service best suits your needs to get the best price matching.</ServiceHeader>
  <ServiceTopline>Select from our affordable options to accomoService you.</ServiceTopline>
  <ServiceFormContainer>

      <ServiceForm>


   
      <ServiceButtonWrap>
        <ServiceLeftButton>BACK</ServiceLeftButton>
        <ServiceRightButton>NEXT</ServiceRightButton>
      </ServiceButtonWrap>
      </ServiceForm>
    </ServiceFormContainer>
  </ServiceContainer>
</>
  );
}
export default Service;