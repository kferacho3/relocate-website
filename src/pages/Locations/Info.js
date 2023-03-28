import React, {useState} from 'react';
import { LocationsInfoSection, LocationsInfoBg, LocationsInfoWrapper, LocationsInfoRow,
         LocationsInfoHeader, LocationsInfoTextSection, LocationsInfoIcon, LocationsInfoTextHeader,
         LocationsInfoText, LocationsInfoButton, LocationsInfoIconWrap, Column1, Column2, Column3 } from './LocationsElements';



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
        
         <LocationsInfoHeader>Moving services we can coordinate for you.</LocationsInfoHeader>
         <LocationsInfoWrapper>
             <LocationsInfoRow>
                <Column1>
                <LocationsInfoBg src = {deco1} />
                    <LocationsInfoTextSection>
                        <LocationsInfoIconWrap>
                        <LocationsInfoIcon src = {sm} />
                        </LocationsInfoIconWrap>
                        <LocationsInfoTextHeader>Standard Moving</LocationsInfoTextHeader>
                        <LocationsInfoText>Standard In-state moving service that includes Loading & Unloading services together or individually. A standard moving service includes Loading & Unloading, or both separate if need be.</LocationsInfoText>
                        <LocationsInfoButton>Book Now</LocationsInfoButton>
                    </LocationsInfoTextSection>
                </Column1>
                
                <Column2>
                <LocationsInfoBg src = {deco2} />
                        <LocationsInfoTextSection>
                            <LocationsInfoIconWrap>
                            <LocationsInfoIcon src = {ldm} />
                            </LocationsInfoIconWrap>
                            <LocationsInfoTextHeader>Long Distance Moving</LocationsInfoTextHeader>
                            <LocationsInfoText>We offer budget friendly moving services to accommodate long-distance moves in which the final destination is out of state. We can combine this with our storage options and labor only for each part of the moving service.</LocationsInfoText>
                            <LocationsInfoButton>Book Now</LocationsInfoButton>
                        </LocationsInfoTextSection>
                </Column2>
                
                <Column3>
                <LocationsInfoBg src = {deco3} />
                    <LocationsInfoTextSection>
                
                        
                        <LocationsInfoIconWrap>
                        <LocationsInfoIcon src = {hl} />
                        </LocationsInfoIconWrap>
                        <LocationsInfoTextHeader>Hourly Labor</LocationsInfoTextHeader>
                        <LocationsInfoText>Physical Jobs that require strong hands can be done with the Hourly Labor Service. We will send a pack of workers to complete your task.</LocationsInfoText>
                        <LocationsInfoButton>Book Now</LocationsInfoButton>
                    </LocationsInfoTextSection>
                </Column3>
             </LocationsInfoRow>
         </LocationsInfoWrapper>
     </LocationsInfoSection>

      </>
    
    );
  }
  
  export default Info;