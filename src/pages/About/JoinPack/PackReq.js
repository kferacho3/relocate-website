import React, { useState } from 'react';
import {
  PackDeco1, PackDeco2,
  PackJobDivBg,
  PackReqContainer,
  PackReqHeader,
  PackReqImg,
  PackReqImgContainer,
  PackReqRow,
  PackReqSection,
  PackReqText,
  PackReqTextHeader,
  PackReqTextSection,
  PackReqWrapper
} from './PackReqElements';

import j1 from '../../../logos/jobLogo1.svg';
import j2 from '../../../logos/jobLogo2.svg';
import j3 from '../../../logos/jobLogo3.svg';
import j4 from '../../../logos/jobLogo4.svg';
import j5 from '../../../logos/jobLogo5.svg';
import j6 from '../../../logos/jobLogo6.svg';

import d1 from '../../../logos/miniDeco1.svg';
import d2 from '../../../logos/miniDeco2.svg';
import d3 from '../../../logos/miniDeco3.svg';
import d4 from '../../../logos/miniDeco4.svg';


import deco1 from '../../../images/deco1.svg';
import deco2 from '../../../images/deco2.svg';




const PackReq = () => {
    const [isOpen, setIsOpen] = useState(false)
   
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
      <>
        <PackReqSection>
        <PackReqHeader>Job Requirements</PackReqHeader>
              <PackReqWrapper>
                <PackReqRow>
                <div>

                <PackJobDivBg style={{ backgroundImage:`url(${d1})` }}/> 
                <PackReqContainer>
                <PackDeco1 src = {deco1}/>
                <PackDeco2 src={deco2}/>
                <PackReqImgContainer>
                  <PackReqImg style={{ backgroundImage:`url(${j1})` }}/>
                  </PackReqImgContainer>
                  <PackReqTextSection>
                    <PackReqTextHeader>CELLPHONE</PackReqTextHeader>
                    <PackReqText>Must have a working cellphone for alerts on your move, payouts, and other relevant Relocate information you need. </PackReqText>
                  </PackReqTextSection>
                </PackReqContainer>

                <PackJobDivBg style={{ backgroundImage:`url(${d2})` }}/> 
                <PackReqContainer>
                <PackDeco1 src = {deco1}/>
                <PackDeco2 src={deco2}/>
                <PackReqImgContainer>
                  <PackReqImg style={{ backgroundImage:`url(${j2})` }}/>
                  </PackReqImgContainer>
                  <PackReqTextSection>
                    <PackReqTextHeader>BACKGROUND CHECK</PackReqTextHeader>
                    <PackReqText>Need to be able to pass a background check and physical screening if needed.</PackReqText>
                  </PackReqTextSection>
                </PackReqContainer>

                <PackJobDivBg style={{ backgroundImage:`url(${d3})` }}/> 
                <PackReqContainer>
                <PackDeco1 src = {deco1}/>
                <PackDeco2 src={deco2}/>
                <PackReqImgContainer>
                  <PackReqImg style={{ backgroundImage:`url(${j3})` }}/>
                  </PackReqImgContainer>
                  <PackReqTextSection>
                    <PackReqTextHeader>TRANSPORTATION</PackReqTextHeader>
                    <PackReqText>Need a reliable source of transportation or vehicle to get to move your location(s).</PackReqText>
                  </PackReqTextSection>
                </PackReqContainer>
                </div>

                <div>
                <PackJobDivBg style={{ backgroundImage:`url(${d4})` }}/> 
                <PackReqContainer>
                <PackDeco1 src = {deco1}/>
                <PackDeco2 src={deco2}/>
                <PackReqImgContainer>
                  <PackReqImg style={{ backgroundImage:`url(${j4})` }}/>
                  </PackReqImgContainer>
                  <PackReqTextSection>
                    <PackReqTextHeader>ADULT</PackReqTextHeader>
                    <PackReqText>Must be 18 years of age or older to apply!</PackReqText>
                  </PackReqTextSection>
                </PackReqContainer>

                <PackJobDivBg style={{ backgroundImage:`url(${d1})` }}/> 
                <PackReqContainer>
                <PackDeco1 src = {deco1}/>
                <PackDeco2 src={deco2}/>
                <PackReqImgContainer>
                  <PackReqImg style={{ backgroundImage:`url(${j5})` }}/>
                  </PackReqImgContainer>
                  <PackReqTextSection>
                    <PackReqTextHeader>STRENGTH</PackReqTextHeader>
                    <PackReqText> Are you able to carry 60lbs with ease? You need to have good muscular endurance as well..</PackReqText>
                  </PackReqTextSection>
                </PackReqContainer>

                <PackJobDivBg style={{ backgroundImage:`url(${d2})` }}/> 
                <PackReqContainer>
                <PackDeco1 src = {deco1}/>
                <PackDeco2 src={deco2}/>
                <PackReqImgContainer>
                  <PackReqImg style={{ backgroundImage:`url(${j6})` }}/>
                  </PackReqImgContainer>
                  <PackReqTextSection>
                    <PackReqTextHeader>CHECKING ACCOUNT</PackReqTextHeader>
                    <PackReqText>Payouts are distributed electronically, thus requiring that you need access to a checking account to receive payments.</PackReqText>
                  </PackReqTextSection>
                </PackReqContainer>

                </div>

                </PackReqRow>
              </PackReqWrapper>
           
            </PackReqSection>
        
      </>
    );
  }
  
  export default PackReq;