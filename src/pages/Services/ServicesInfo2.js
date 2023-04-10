import React, {useState} from 'react';
import { ServicesInfoSection, ServicesInfoBg, ServicesInfoWrapper, ServicesInfoRow, ServicesDeco1, ServicesDeco2,
         ServicesInfoHeader, ServicesInfoTextSection2, ServicesInfoIcon, ServicesInfoTextHeader,
         ServicesInfoText, ServicesInfoButton, ServicesInfoIconWrap, Column1, Column22, Column3 } from './ServicesInfoElements';



import deco4 from './ServImg/servDeco1.svg';
import deco5 from './ServImg/servDeco2.svg';
import deco6 from './ServImg/servDeco3.svg';


import s4 from '../../logos/servlogo1.svg';
import s5 from '../../logos/servlogo2.svg';
import s6 from '../../logos/servlogo3.svg';

import dec1 from '../../images/deco1.svg';
import dec2 from '../../images/deco2.svg';


const Info2 = () => {
    const [isOpen, setIsOpen] = useState(false)
   
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
    
      
         
     
      <>
     <ServicesInfoSection style = {{marginBottom: `-150px`}}>
        
         <ServicesInfoHeader style = {{marginBottom: `-50px`}}>Our packers provide:</ServicesInfoHeader>
         <ServicesInfoWrapper>
             <ServicesInfoRow>
                <Column1>
                <ServicesInfoBg src = {deco4} />
                    <ServicesInfoTextSection2>
                    <ServicesDeco1 src={dec1}/>
                        <ServicesInfoIconWrap>
                            <ServicesInfoIcon src = {s4} />
                        </ServicesInfoIconWrap>
                        <ServicesDeco2 src={dec2}/>
                        <ServicesInfoTextHeader>Profssionalism</ServicesInfoTextHeader>
                        <ServicesInfoText>At our company, we prioritize our clients and approach every task
                         with professionalism and enthusiasm.  We are dedicated to providing exceptional 
                         service that exceeds our clients' expectations.</ServicesInfoText>
                    </ServicesInfoTextSection2>
                </Column1>
                
                <Column22>
                <ServicesInfoBg src = {deco5} />
                        <ServicesInfoTextSection2>
                        <ServicesDeco1 src={dec1}/>
                        <ServicesInfoIconWrap>
                            <ServicesInfoIcon src = {s5} />
                        </ServicesInfoIconWrap>
                        <ServicesDeco2 src={dec2}/>
                            <ServicesInfoTextHeader>Humanity</ServicesInfoTextHeader>
                            <ServicesInfoText>Our team of packers are guided by a humanitarian approach,
                             putting our clients' needs first and ensuring a stress-free and seamless move.
                              Our goal is to provide our clients with an exceptional moving experience that is second to none.</ServicesInfoText>
                        </ServicesInfoTextSection2>
                </Column22>
                
                <Column3>
                <ServicesInfoBg src = {deco6} />
                    <ServicesInfoTextSection2>
                
                        
                    <ServicesDeco1 src={dec1}/>
                        <ServicesInfoIconWrap>
                            <ServicesInfoIcon src = {s6} />
                        </ServicesInfoIconWrap>
                        <ServicesDeco2 src={dec2}/>
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