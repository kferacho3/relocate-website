import React, {useState} from 'react';
import { ServicesInfoSection, ServicesInfoBg, ServicesInfoWrapper, ServicesInfoRow,
         ServicesInfoHeader, ServicesInfoTextSection2, ServicesInfoIcon, ServicesInfoTextHeader,
         ServicesInfoText, ServicesInfoButton, ServicesInfoIconWrap, Column1, Column22, Column3 } from './ServicesInfoElements';



import deco4 from './ServImg/servDeco4.svg';
import deco5 from './ServImg/servDeco5.svg';
import deco6 from './ServImg/servDeco6.svg';


import s4 from './ServImg/servlogo4.svg';
import s5 from './ServImg/servlogo5.svg';
import s6 from './ServImg/servlogo6.svg';



const Info2 = () => {
    const [isOpen, setIsOpen] = useState(false)
   
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
    
      
         
     
      <>
     <ServicesInfoSection >
        
         <ServicesInfoHeader>Our packers provide:</ServicesInfoHeader>
         <ServicesInfoWrapper>
             <ServicesInfoRow>
                <Column1>
                <ServicesInfoBg src = {deco4} />
                    <ServicesInfoTextSection2>
                        <ServicesInfoIconWrap>
                        <ServicesInfoIcon src = {s4} />
                        </ServicesInfoIconWrap>
                        <ServicesInfoTextHeader>Profssionalism</ServicesInfoTextHeader>
                        <ServicesInfoText>At our company, we prioritize our clients and approach every 
                        task with positivity, enthusiasm, and professionalism. Our guiding principle is 
                        to always give more than we receive, and we are dedicated to providing exceptional 
                        service and building lasting relationships based on trust and mutual respect.</ServicesInfoText>
                    </ServicesInfoTextSection2>
                </Column1>
                
                <Column22>
                <ServicesInfoBg src = {deco5} />
                        <ServicesInfoTextSection2>
                            <ServicesInfoIconWrap>
                            <ServicesInfoIcon src = {s5} />
                            </ServicesInfoIconWrap>
                            <ServicesInfoTextHeader>Humanity</ServicesInfoTextHeader>
                            <ServicesInfoText>Our team of packers are guided by a humanitarian approach,
                             putting our clients' needs first and ensuring a stress-free and seamless move.
                              Our goal is to provide our clients with an exceptional moving experience that is second to none.</ServicesInfoText>
                        </ServicesInfoTextSection2>
                </Column22>
                
                <Column3>
                <ServicesInfoBg src = {deco6} />
                    <ServicesInfoTextSection2>
                
                        
                        <ServicesInfoIconWrap>
                        <ServicesInfoIcon src = {s6} />
                        </ServicesInfoIconWrap>
                        <ServicesInfoTextHeader>Experience</ServicesInfoTextHeader>
                        <ServicesInfoText>At Relocate, our vetted and experienced associates are trained 
                        to provide exceptional moving services. We strive to identify opportunities and create 
                        innovative solutions to better serve our customers. </ServicesInfoText>    
                    </ServicesInfoTextSection2>
                </Column3>
             </ServicesInfoRow>
         </ServicesInfoWrapper>
     </ServicesInfoSection>

      </>
    
    );
  }
  
  export default Info2;