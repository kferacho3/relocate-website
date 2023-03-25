import React, {useState} from 'react';
import { LocationsInfoSection, LocationsInfoBg, LocationsInfoWrapper, LocationsInfoRow,
         LocationsInfoHeader, LocationsInfoTextSection, LocationsInfoIcon, LocationsInfoTextHeader,
         LocationsInfoText, LocationsInfoButton  } from './LocationsElements';


import deco1 from './LocationsImg/locDeco0.svg';
import deco2 from './LocationsImg/locDeco1.svg';
import deco3 from './LocationsImg/locDeco2.svg';

import sm from '../../logos/HouseIcon.svg';

import ldm from '../../logos/LDIcon.svg';

import hl from '../../logos/ClockIcon.svg';


const Info = () => {
    const [isOpen, setIsOpen] = useState(false)
   
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
    
      
         
     
      <>
     <LocationsInfoSection >
        
         <LocationsInfoHeader></LocationsInfoHeader>
         <LocationsInfoWrapper>
             <LocationsInfoRow>
                <LocationsInfoTextSection>
                <LocationsInfoBg style = {{backgroundImage: `url${deco1}` }} />
                    <LocationsInfoIcon style = {{backgroundImage: `url${sm}` }} />
                    <LocationsInfoTextHeader>Standard Moving</LocationsInfoTextHeader>
                    <LocationsInfoText></LocationsInfoText>
                    <LocationsInfoButton>Book Now</LocationsInfoButton>
                </LocationsInfoTextSection>
                 
                <LocationsInfoTextSection>
                <LocationsInfoBg style = {{backgroundImage: `url${deco2}` }} />
                    <LocationsInfoIcon style = {{backgroundImage: `url${ldm}` }} />
                    <LocationsInfoTextHeader>Long Distance Moving</LocationsInfoTextHeader>
                    <LocationsInfoText></LocationsInfoText>
                    <LocationsInfoButton>Book Now</LocationsInfoButton>
                </LocationsInfoTextSection>

                <LocationsInfoTextSection>
                <LocationsInfoBg style = {{backgroundImage: `url${deco3}` }} />
                    <LocationsInfoIcon style = {{backgroundImage: `url${hl}` }} />
                    <LocationsInfoTextHeader>Hourly Labor</LocationsInfoTextHeader>
                    <LocationsInfoText></LocationsInfoText>
                    <LocationsInfoButton>Book Now</LocationsInfoButton>
                </LocationsInfoTextSection>
                
             </LocationsInfoRow>
         </LocationsInfoWrapper>
     </LocationsInfoSection>

      </>
    
    );
  }
  
  export default Info;