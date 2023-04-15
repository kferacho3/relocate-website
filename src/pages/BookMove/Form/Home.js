import React, { useRef,  useState} from 'react';

import {
  HomeContainer, HomeForm, HomeHeader, HomeButtonWrap, 
  HomeLeftButton, HomeRightButton, HomeTopline, HomeFormContainer
} from './HomeElements';
//import emailjs from 'emailjs-com';
import "./Form.scss";
//import s1 from '../BookImg/HomeImg1.svg';
//import s2 from '../BookImg/HomeImg2.svg';
function Home({isOpen, toggle}) {


  return (
<>

<HomeContainer>
  <HomeHeader>Choose which Home best suits your needs to get the best price matching.</HomeHeader>
  <HomeTopline>Select from our affordable options to accomoHome you.</HomeTopline>
  <HomeFormContainer>

      <HomeForm>


   
      <HomeButtonWrap>
        <HomeLeftButton>BACK</HomeLeftButton>
        <HomeRightButton>NEXT</HomeRightButton>
      </HomeButtonWrap>
      </HomeForm>
    </HomeFormContainer>
  </HomeContainer>
</>
  );
}
export default Home;