import React from 'react';

import {
  HomeButtonWrap,
  HomeContainer, HomeForm,
  HomeFormContainer,
  HomeFormHeader,
  HomeFormTopLine,
  HomeHeader,
  HomeImg,
  HomeImgContainer,
  HomeInput,
  HomeLeftButton,
  HomeOptContainer,
  HomeOptWrap,
  HomeRightButton,
  HomeRow,
  HomeText,
  HomeTextHeader,
  HomeTextSection,
  HomeTopLine,
  HomeWrapper
} from './FormElements';
//import emailjs from 'emailjs-com';
import "./Form.scss";
//import s1 from '../BookImg/HomeImg1.svg';
//import s2 from '../BookImg/HomeImg2.svg';
import h1 from '../../../../logos/homeFormLogos1.svg';
import h2 from '../../../../logos/homeFormLogos2.svg';
import h3 from '../../../../logos/homeFormLogos3.svg';
import h4 from '../../../../logos/homeFormLogos4.svg';
import h5 from '../../../../logos/homeFormLogos5.svg';
import h6 from '../../../../logos/homeFormLogos6.svg';
function Home({isOpen, toggle, nextStep, prevStep }) {

  const handleNext = () => {
    nextStep();
  };

  const handlePrevious = () => {
    prevStep();
  };


  return (
<>

<HomeContainer>
  <HomeHeader>Choose which Home best suits your needs to get the best price matching.</HomeHeader>
  <HomeTopLine>Select from our affordable options to accomoHome you.</HomeTopLine>
  <HomeFormContainer>

      <HomeForm>
        <HomeFormHeader>Choose type of Home for address:</HomeFormHeader>
        <HomeFormTopLine>511 S Grand Ave Spencer, Idaho 51301</HomeFormTopLine>
        <HomeWrapper>
                  <HomeRow>
                  <div>
                  <HomeOptWrap>
                  <HomeInput 
                      type="radio"
                      class="radio isHidden"
                      value="Standard Home"
                      name="home"
                      id='home' />
                  <HomeOptContainer>
                  <HomeImgContainer>
                    <HomeImg style={{ backgroundImage:`url(${h1})` }}/>
                    </HomeImgContainer>
                    <HomeTextSection>
                      <HomeTextHeader>Standard Home</HomeTextHeader>
                      <HomeText>A single-family homeowner typically owns the building and the land the building sits on. </HomeText>
                    </HomeTextSection>
                  </HomeOptContainer>
                  </HomeOptWrap>

                  <HomeOptWrap>
                  <HomeInput  
                      type="radio"
                      class="radio isHidden"
                      value="Apartment"
                      name="home"
                      id='home' />
                  <HomeOptContainer>
                  <HomeImgContainer>
                    <HomeImg style={{ backgroundImage:`url(${h2})` }}/>
                    </HomeImgContainer>
                    <HomeTextSection>
                      <HomeTextHeader>Apartment</HomeTextHeader>
                      <HomeText>An apartment is a unit inside of a building structure composed of similarly styled individual units.</HomeText>
                    </HomeTextSection>
                  </HomeOptContainer>
                  </HomeOptWrap>
                  
                  <HomeOptWrap>
                  <HomeInput 
                      type="radio"
                      class="radio isHidden"
                      value="Storage Unit"
                      name="home"
                      id='home' />
                  <HomeOptContainer>
                  <HomeImgContainer>
                    <HomeImg style={{ backgroundImage:`url(${h3})` }}/>
                    </HomeImgContainer>
                    <HomeTextSection>
                      <HomeTextHeader>Storage Unit</HomeTextHeader>
                      <HomeText>A storage unit may consist of a personal garage or a purchased unit at an establisgment such as “Public Storage”. </HomeText>
                    </HomeTextSection>
                  </HomeOptContainer>
                  </HomeOptWrap>

                  </div>

                  <div>
                  <HomeOptWrap>
                  <HomeInput 
                      type="radio"
                      class="radio isHidden"
                      value="Townhome"
                      name="home"
                      id='home' />
                  <HomeOptContainer>
                  <HomeImgContainer>
                    <HomeImg style={{ backgroundImage:`url(${h4})` }}/>
                    </HomeImgContainer>
                    <HomeTextSection>
                      <HomeTextHeader>Townhome</HomeTextHeader>
                      <HomeText>Townhomes are multifloor homes with their own entrance, bathroom and kitchen space. 
                                Townhomes share two walls with neighbors unless the townhome is located at the end of a building. </HomeText>
                    </HomeTextSection>
                  </HomeOptContainer>
                  </HomeOptWrap>

                  <HomeOptWrap>
                  <HomeInput 
                      type="radio"
                      class="radio isHidden"
                      value="Condomonium"
                      name="home"
                      id='home' />
                  <HomeOptContainer>
                  <HomeImgContainer>
                    <HomeImg style={{ backgroundImage:`url(${h5})` }}/>
                    </HomeImgContainer>
                    <HomeTextSection>
                      <HomeTextHeader>Condomonium</HomeTextHeader>
                      <HomeText>Condominiums, or condos for short, are buildings made up of individual units that are owned. 
                                They can look and feel like an apartment building or community.</HomeText>
                    </HomeTextSection>
                  </HomeOptContainer>
                  </HomeOptWrap>

              <HomeOptWrap>
                  <HomeInput 
                      type="radio"
                      class="radio isHidden"
                      value="Pod Container"
                      name="home"
                      id='home' />
                  <HomeOptContainer>
                  <HomeImgContainer>
                    <HomeImg style={{ backgroundImage:`url(${h6})` }}/>
                    </HomeImgContainer>
                    <HomeTextSection>
                      <HomeTextHeader>Pod Container</HomeTextHeader>
                      <HomeText>Pods are long, rectanguar containers used for storing moving items. 
                                Properties containing pods usually have more than one which all may vary in length.</HomeText>
                    </HomeTextSection>
                  </HomeOptContainer>
                  </HomeOptWrap>

        
                  </div>

                  </HomeRow>
                </HomeWrapper>

            
                <HomeButtonWrap>
                    <HomeLeftButton onClick={handlePrevious}>BACK</HomeLeftButton>
                    <HomeRightButton onClick={handleNext}>NEXT</HomeRightButton>
                </HomeButtonWrap>
            </HomeForm>
          </HomeFormContainer>
        </HomeContainer>
      </>
  );
}
export default Home;