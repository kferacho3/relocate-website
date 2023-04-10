import React, {useState} from 'react';
import { HeroServContainer, HeroServImg, HeroServTextSection, HeroServTextHeader,
         HeroServImgContainer, HeroServDivBg, HeroDeco1, HeroDeco2, HeroServeWrapper,
         HeroServeRow, HeroServText, HeroServicesSection, HeroServHeader} from './HeroElements';

import house from '../../logos/HouseIcon.svg';
import pack from '../../logos/PackingIcon.svg';
import hour from '../../logos/ClockIcon.svg';
import trash from '../../logos/TrashIcon.svg';
import night from '../../logos/NightIcon.svg';
import vip from '../../logos/VIPIcon.svg';
import storage from '../../logos/StorageIcon.svg';
import tv from '../../logos/TVIcon.svg';

import d1 from '../../logos/miniDeco1.svg';
import d2 from '../../logos/miniDeco2.svg';
import d3 from '../../logos/miniDeco3.svg';
import d4 from '../../logos/miniDeco4.svg';

import deco1 from '../../images/deco1.svg';
import deco2 from '../../images/deco2.svg';




const Services = () => {
    const [isOpen, setIsOpen] = useState(false)
   
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
      <>
        <HeroServicesSection>
              <HeroServeWrapper>
                <HeroServeRow>
                <div>

                <HeroServDivBg style={{ backgroundImage:`url(${d1})` }}/> 
                <HeroServContainer>
                <HeroDeco1 src = {deco1}/>
                <HeroDeco2 src={deco2}/>
                <HeroServImgContainer>
                  <HeroServImg style={{ backgroundImage:`url(${house})` }}/>
                  </HeroServImgContainer>
                  <HeroServTextSection>
                    <HeroServTextHeader>Moving Service</HeroServTextHeader>
                    <HeroServText>Standard In-state moving service that includes Loading & Unloading services together or individually. </HeroServText>
                  </HeroServTextSection>
                </HeroServContainer>

                <HeroServDivBg style={{ backgroundImage:`url(${d2})` }}/> 
                <HeroServContainer>
                <HeroDeco1 src = {deco1}/>
                <HeroDeco2 src={deco2}/>
                <HeroServImgContainer>
                  <HeroServImg style={{ backgroundImage:`url(${pack})` }}/>
                  </HeroServImgContainer>
                  <HeroServTextSection>
                    <HeroServTextHeader>Packing & Unpacking</HeroServTextHeader>
                    <HeroServText>Packing of items for moving and/or storage. Unpacking can be added to moving service or done as a stand alone service.</HeroServText>
                  </HeroServTextSection>
                </HeroServContainer>

                <HeroServDivBg style={{ backgroundImage:`url(${d3})` }}/> 
                <HeroServContainer>
                <HeroDeco1 src = {deco1}/>
                <HeroDeco2 src={deco2}/>
                <HeroServImgContainer>
                  <HeroServImg style={{ backgroundImage:`url(${hour})` }}/>
                  </HeroServImgContainer>
                  <HeroServTextSection>
                    <HeroServTextHeader>Hourly Labor</HeroServTextHeader>
                    <HeroServText>Physical Jobs that require strong hands can be done with the Hourly Labor Service. We will send a pack of workers to complete your task.</HeroServText>
                  </HeroServTextSection>
                </HeroServContainer>

                <HeroServDivBg style={{ backgroundImage:`url(${d4})` }}/> 
                <HeroServContainer>
                <HeroDeco1 src = {deco1}/>
                <HeroDeco2 src={deco2}/>
                <HeroServImgContainer>
                  <HeroServImg style={{ backgroundImage:`url(${trash})` }}/>
                  </HeroServImgContainer>
                  <HeroServTextSection>
                    <HeroServTextHeader>Junk Removal</HeroServTextHeader>
                    <HeroServText>Removal of Junk, Garbage, or Large Items at your designated location.</HeroServText>
                  </HeroServTextSection>
                </HeroServContainer>
                </div>

                <div>
                <HeroServDivBg style={{ backgroundImage:`url(${d1})` }}/> 
                <HeroServContainer>
                <HeroDeco1 src = {deco1}/>
                <HeroDeco2 src={deco2}/>
                <HeroServImgContainer>
                  <HeroServImg style={{ backgroundImage:`url(${night})` }}/>
                  </HeroServImgContainer>
                  <HeroServTextSection>
                    <HeroServTextHeader>Overnight Moving</HeroServTextHeader>
                    <HeroServText>Some moves may need extra time or may simply not fall within your schedule. We provide Overnight moving services to help deviate from these issues.</HeroServText>
                  </HeroServTextSection>
                </HeroServContainer>

                <HeroServDivBg style={{ backgroundImage:`url(${d2})` }}/> 
                <HeroServContainer>
                <HeroDeco1 src = {deco1}/>
                <HeroDeco2 src={deco2}/>
                <HeroServImgContainer>
                  <HeroServImg style={{ backgroundImage:`url(${vip})` }}/>
                  </HeroServImgContainer>
                  <HeroServTextSection>
                    <HeroServTextHeader>VIP Moving Services</HeroServTextHeader>
                    <HeroServText>For special or large scale moves, we will provide the ultimate pack to ensure a Premium moving services is delivered!</HeroServText>
                  </HeroServTextSection>
                </HeroServContainer>

                <HeroServDivBg style={{ backgroundImage:`url(${d3})` }}/> 
                <HeroServContainer>
                <HeroDeco1 src = {deco1}/>
                <HeroDeco2 src={deco2}/>
                <HeroServImgContainer>
                  <HeroServImg style={{ backgroundImage:`url(${storage})` }}/>
                  </HeroServImgContainer>
                  <HeroServTextSection>
                    <HeroServTextHeader>Storage</HeroServTextHeader>
                    <HeroServText>We can simply load all of your items and unload them within a storage unit from our partnered facilities or one of your choice.</HeroServText>
                  </HeroServTextSection>
                </HeroServContainer>

                <HeroServDivBg style={{ backgroundImage:`url(${d4})` }}/> 
                <HeroServContainer>
                <HeroDeco1 src = {deco1}/>
                <HeroDeco2 src={deco2}/>
                <HeroServImgContainer>
                  <HeroServImg style={{ backgroundImage:`url(${tv})` }}/>
                  </HeroServImgContainer>
                  <HeroServTextSection>
                    <HeroServTextHeader>TV Mounting</HeroServTextHeader>
                    <HeroServText>Simple jobs such as T.V. mounting can be done by our Handy-man!</HeroServText>
                  </HeroServTextSection>
                </HeroServContainer>
                </div>

                </HeroServeRow>
              </HeroServeWrapper>
           
            </HeroServicesSection>
        
      </>
    );
  }
  
  export default Services;