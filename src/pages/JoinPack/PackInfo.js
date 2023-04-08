import React, {useState} from 'react';
import { PackInfoSection, PackInfoBg, PackInfoWrapper, PackInfoRow, PackDeco1, PackDeco2,
         PackInfoHeader, PackInfoTextSection, PackInfoIcon, PackInfoTextHeader,
         PackInfoText, PackInfoButton, PackInfoIconWrap, Column1, Column2, Column22, Column3 } from './PackInfoElements';



import deco1 from './PackImg/packDeco1.svg';
import deco2 from './PackImg/packDeco2.svg';
import deco3 from './PackImg/packDeco3.svg';

import s1 from './PackImg/packogo1.svg';
import s2 from './PackImg/packogo2.svg';
import s3 from './PackImg/packogo3.svg';


import dec1 from '../../images/deco3.svg';
import dec2 from '../../images/deco4.svg';


const Info = () => {
    const [isOpen, setIsOpen] = useState(false)
   
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
    
      
         
     
      <>
     <PackInfoSection >
        
         <PackInfoHeader>Why should you join the pack?</PackInfoHeader>
         <PackInfoWrapper>
             <PackInfoRow>
                <Column1>
                <PackInfoBg src = {deco1} />
                    <PackInfoTextSection>

                   

                        <PackDeco1 src={dec1}/>
                        <PackInfoIconWrap>
                            <PackInfoIcon src = {s1} />
                        </PackInfoIconWrap>
                        <PackDeco2 src={dec2}/>
                        <PackInfoTextHeader>Flexibility!</PackInfoTextHeader>
                        <PackInfoText>Work on your own schedule and earn what you need. Choose to set your availability 
                        or schedule in advance and get bonuses based on distance. </PackInfoText>
                    </PackInfoTextSection>
                </Column1>
                
                <Column2>
                <PackInfoBg src = {deco2} />
                        <PackInfoTextSection>
                        <PackDeco1 src={dec1}/>
                        <PackInfoIconWrap>
                            <PackInfoIcon src = {s2} />
                        </PackInfoIconWrap>
                        <PackDeco2 src={dec2}/>
                            <PackInfoTextHeader>Incentives!</PackInfoTextHeader>
                            <PackInfoText>When you work with Relocate, you'll receive a flat rate of $35 per hour as
                             a standard Packer, with opportunities for performance bonuses, tips from customers, and weekly payouts.</PackInfoText>
                        </PackInfoTextSection>
                </Column2>
                
                <Column3>
                <PackInfoBg src = {deco3} />
                    <PackInfoTextSection>
                
                        
                    <PackDeco1 src={dec1}/>
                        <PackInfoIconWrap>
                            <PackInfoIcon src = {s3} />
                        </PackInfoIconWrap>
                        <PackDeco2 src={dec2}/>
                        <PackInfoTextHeader>Opportunities!</PackInfoTextHeader>
                        <PackInfoText>At Relocate, you'll interact with diverse people and customers daily, improving your 
                        leadership and problem-solving skills with each unique move.</PackInfoText>
                    </PackInfoTextSection>
                </Column3>
             </PackInfoRow>
         </PackInfoWrapper>
     </PackInfoSection>

      </>
    
    );
  }
  
  export default Info;