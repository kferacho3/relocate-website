import React, { useState } from 'react';
import {
    Column1, Column2,
    Column3,
    HeroDeco1, HeroDeco2,
    HeroInfoBg,
    HeroInfoHeader,
    HeroInfoIcon,
    HeroInfoIconWrap,
    HeroInfoRow,
    HeroInfoSection,
    HeroInfoText,
    HeroInfoTextHeader,
    HeroInfoTextSection,
    HeroInfoWrapper
} from './HeroInfoElements';



import deco1 from '../../images/decoM1.svg';
import deco2 from '../../images/decoM2.svg';
import deco3 from '../../images/decoM3.svg';

import s1 from '../../logos/heroInfoLogo1.svg';
import s2 from '../../logos/heroInfoLogo2.svg';
import s3 from '../../logos/heroInfoLogo3.svg';


import dec1 from '../../images/deco3.svg';
import dec2 from '../../images/deco4.svg';


const Info = () => {
    const [isOpen, setIsOpen] = useState(false)
   
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
    
      
         
     
      <>
     <HeroInfoSection >
        
         <HeroInfoHeader>Why book with Relocate?</HeroInfoHeader>
         <HeroInfoWrapper>
             <HeroInfoRow>
                <Column1>
                <HeroInfoBg src = {deco1} />
                    <HeroInfoTextSection>

                   

                        <HeroDeco1 src={dec1}/>
                        <HeroInfoIconWrap>
                            <HeroInfoIcon src = {s1} />
                        </HeroInfoIconWrap>
                        <HeroDeco2 src={dec2}/>
                        <HeroInfoTextHeader>Easy Booking</HeroInfoTextHeader>
                        <HeroInfoText>Our user-friendly platform offers a stress-free experience with no in-person
                         consultation required. Our booking process is completed within minutes and without the
                          need of in person consultation, allowing you to entrust us with facilitating a seamless move. </HeroInfoText>
                    </HeroInfoTextSection>
                </Column1>
                
                <Column2>
                <HeroInfoBg src = {deco2} />
                        <HeroInfoTextSection>
                        <HeroDeco1 src={dec1}/>
                        <HeroInfoIconWrap>
                            <HeroInfoIcon src = {s2} />
                        </HeroInfoIconWrap>
                        <HeroDeco2 src={dec2}/>
                            <HeroInfoTextHeader>Customer Support</HeroInfoTextHeader>
                            <HeroInfoText>At our company, we believe that moving homes should feel like settling into 
                            a new place you can call home. That's why we strive to make you feel comfortable and at 
                            ease from the moment you make your reservation until the final farewell from our movers. </HeroInfoText>
                        </HeroInfoTextSection>
                </Column2>
                
                <Column3>
                <HeroInfoBg src = {deco3} />
                    <HeroInfoTextSection>
                
                        
                    <HeroDeco1 src={dec1}/>
                        <HeroInfoIconWrap>
                            <HeroInfoIcon src = {s3} />
                        </HeroInfoIconWrap>
                        <HeroDeco2 src={dec2}/>
                        <HeroInfoTextHeader>Optimized Matching</HeroInfoTextHeader>
                        <HeroInfoText>We provide top-notch service by matching clients with our best packers,
                         who are selected through our performance-tracking app with an incorporated rating system.
                          This ensures that our clients receive flawless moves with excellent service.</HeroInfoText>
                    </HeroInfoTextSection>
                </Column3>
             </HeroInfoRow>
         </HeroInfoWrapper>
     </HeroInfoSection>

      </>
    
    );
  }
  
  export default Info;
