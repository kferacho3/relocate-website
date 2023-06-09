import React, {useState} from 'react';
import { ServicesInfoSection, ServicesInfoBg, ServicesInfoWrapper, ServicesInfoRow, ServicesDeco1, ServicesDeco2,
         ServicesInfoHeader, ServicesInfoTextSection, ServicesInfoIcon, ServicesInfoTextHeader,
         ServicesInfoText, ServicesInfoButton, ServicesInfoIconWrap, Column1, Column2, Column22, Column3 } from './ServicesInfoElements';


import deco1 from './ServImg/servDeco1.svg';
import deco2 from './ServImg/servDeco2.svg';
import deco3 from './ServImg/servDeco3.svg';

import s1 from '../../logos/servlogo1.svg';
import s2 from '../../logos/servlogo2.svg';
import s3 from '../../logos/servlogo3.svg';

import dec1 from '../../images/deco3.svg';
import dec2 from '../../images/deco4.svg';
//import deco3 from './ServicesImg/servDeco.svg';




const Info = () => {
    const [isOpen, setIsOpen] = useState(false)
   
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
    
      
         
     
      <>
     <ServicesInfoSection >
        
         <ServicesInfoHeader>Our services are:</ServicesInfoHeader>
         <ServicesInfoWrapper>
             <ServicesInfoRow>
                <Column1>
                <ServicesInfoBg src = {deco1} />
                    <ServicesInfoTextSection>
                        <ServicesDeco1 src={dec1}/>
                        <ServicesInfoIconWrap>
                            <ServicesInfoIcon src = {s1} />
                        </ServicesInfoIconWrap>
                        <ServicesDeco2 src={dec2}/>
                        <ServicesInfoTextHeader>Accessible!</ServicesInfoTextHeader>
                        <ServicesInfoText>Relocate takes pride in providing a personalized moving experience.
                         Our team is committed to ensuring that your move is stress-free and seamless, from start 
                         to finish. We prioritize open communication and collaboration, so you can count on us to
                          be available and responsive whenever you need us. </ServicesInfoText>
                    </ServicesInfoTextSection>
                </Column1>
                
                <Column2>
                <ServicesInfoBg src = {deco2} />
                        <ServicesInfoTextSection>
                        <ServicesDeco1 src={dec1}/>
                        <ServicesInfoIconWrap>
                            <ServicesInfoIcon src = {s2} />
                        </ServicesInfoIconWrap>
                        <ServicesDeco2 src={dec2}/>
                            <ServicesInfoTextHeader>Economical!</ServicesInfoTextHeader>
                            <ServicesInfoText>Our estimates are conducted in real-time, using human verification and
                             accurate assessment to determine the cost of your move and ensure you're not overspending.
                              You can rest easy knowing that you're getting a fair and accurate quote for your moving services.</ServicesInfoText>
                        </ServicesInfoTextSection>
                </Column2>
                
                <Column3>
                <ServicesInfoBg src = {deco3} />
                    <ServicesInfoTextSection>
                
                        
                    <ServicesDeco1 src={dec1}/>
                        <ServicesInfoIconWrap>
                            <ServicesInfoIcon src = {s3} />
                        </ServicesInfoIconWrap>
                        <ServicesDeco2 src={dec2}/>
                        <ServicesInfoTextHeader>Efficient</ServicesInfoTextHeader>
                        <ServicesInfoText>You can now book our services without an in-home estimate and manage your entire experience
                         through your online dashboard. We will send vetted workers to complete your service efficiently while ensuring 
                         the safety of your belongings.</ServicesInfoText>
                    </ServicesInfoTextSection>
                </Column3>
             </ServicesInfoRow>
         </ServicesInfoWrapper>
     </ServicesInfoSection>

      </>
    
    );
  }
  
  export default Info;