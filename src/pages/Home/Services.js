import React, { useState } from 'react';
import {
  HeroDeco1, HeroDeco2,
  HeroServicesHeader,
  HeroServicesSection
} from './HeroElements';

import hour from '../../logos/ClockIcon.svg';
import house from '../../logos/HouseIcon.svg';
import night from '../../logos/NightIcon.svg';
import pack from '../../logos/PackingIcon.svg';
import storage from '../../logos/StorageIcon.svg';
import tv from '../../logos/TVIcon.svg';
import trash from '../../logos/TrashIcon.svg';
import vip from '../../logos/VIPIcon.svg';

import d1 from '../../images/heroServicesDivBg1.svg';
import d2 from '../../images/heroServicesDivBg2.svg';


import deco1 from '../../images/deco1.svg';
import deco2 from '../../images/deco2.svg';

import {
  HeroServicesContainer,
  HeroServicesDivBg,
  HeroServicesImg,
  HeroServicesImgContainer,
  HeroServicesRow,
  HeroServicesText,
  HeroServicesTextHeader,
  HeroServicesTextSection,
  HeroServicesWrapper
} from './HeroElements';








const Services = () => {
    const [isOpen, setIsOpen] = useState(false)
   
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
      <>
        <HeroServicesSection>
        <HeroServicesHeader>See what our pack can do!</HeroServicesHeader>
              <HeroServicesWrapper>
                <HeroServicesRow>
                <div>

                <HeroServicesDivBg style={{ backgroundImage:`url(${d1})` }}/> 
                <HeroServicesContainer>
                <HeroDeco1 src = {deco1}/>
                <HeroDeco2 src={deco2}/>
                <HeroServicesImgContainer>
                  <HeroServicesImg style={{ backgroundImage:`url(${house})` }}/>
                  </HeroServicesImgContainer>
                  <HeroServicesTextSection>
                    <HeroServicesTextHeader>Moving Service</HeroServicesTextHeader>
                    <HeroServicesText>Standard In-state moving service that includes Loading & Unloading services together or individually. </HeroServicesText>
                  </HeroServicesTextSection>
                </HeroServicesContainer>

                <HeroServicesDivBg style={{ backgroundImage:`url(${d2})` }}/> 
                <HeroServicesContainer>
                <HeroDeco1 src = {deco1}/>
                <HeroDeco2 src={deco2}/>
                <HeroServicesImgContainer>
                  <HeroServicesImg style={{ backgroundImage:`url(${pack})` }}/>
                  </HeroServicesImgContainer>
                  <HeroServicesTextSection>
                    <HeroServicesTextHeader>Packing & Unpacking</HeroServicesTextHeader>
                    <HeroServicesText>Packing of items for moving and/or storage. Unpacking can be added to moving service or done as a stand alone service.</HeroServicesText>
                  </HeroServicesTextSection>
                </HeroServicesContainer>

                <HeroServicesDivBg style={{ backgroundImage:`url(${d1})` }}/> 
                <HeroServicesContainer>
                <HeroDeco1 src = {deco1}/>
                <HeroDeco2 src={deco2}/>
                <HeroServicesImgContainer>
                  <HeroServicesImg style={{ backgroundImage:`url(${hour})` }}/>
                  </HeroServicesImgContainer>
                  <HeroServicesTextSection>
                    <HeroServicesTextHeader>Hourly Labor</HeroServicesTextHeader>
                    <HeroServicesText>Physical Jobs that require strong hands can be done with the Hourly Labor Service. We will send a pack of workers to complete your task.</HeroServicesText>
                  </HeroServicesTextSection>
                </HeroServicesContainer>

                <HeroServicesDivBg style={{ backgroundImage:`url(${d2})` }}/> 
                <HeroServicesContainer>
                <HeroDeco1 src = {deco1}/>
                <HeroDeco2 src={deco2}/>
                <HeroServicesImgContainer>
                  <HeroServicesImg style={{ backgroundImage:`url(${trash})` }}/>
                  </HeroServicesImgContainer>
                  <HeroServicesTextSection>
                    <HeroServicesTextHeader>Junk Removal</HeroServicesTextHeader>
                    <HeroServicesText>Removal of Junk, Garbage, or Large Items at your designated location.</HeroServicesText>
                  </HeroServicesTextSection>
                </HeroServicesContainer>
                </div>

                <div>
                <HeroServicesDivBg style={{ backgroundImage:`url(${d2})` }}/> 
                <HeroServicesContainer>
                <HeroDeco1 src = {deco1}/>
                <HeroDeco2 src={deco2}/>
                <HeroServicesImgContainer>
                  <HeroServicesImg style={{ backgroundImage:`url(${night})` }}/>
                  </HeroServicesImgContainer>
                  <HeroServicesTextSection>
                    <HeroServicesTextHeader>Overnight Moving</HeroServicesTextHeader>
                    <HeroServicesText>Some moves may need extra time or may simply not fall within your schedule. We provide Overnight moving services to help deviate from these issues.</HeroServicesText>
                  </HeroServicesTextSection>
                </HeroServicesContainer>

                <HeroServicesDivBg style={{ backgroundImage:`url(${d1})` }}/> 
                <HeroServicesContainer>
                <HeroDeco1 src = {deco1}/>
                <HeroDeco2 src={deco2}/>
                <HeroServicesImgContainer>
                  <HeroServicesImg style={{ backgroundImage:`url(${vip})` }}/>
                  </HeroServicesImgContainer>
                  <HeroServicesTextSection>
                    <HeroServicesTextHeader>VIP Moving Services</HeroServicesTextHeader>
                    <HeroServicesText>For special or large scale moves, we will provide the ultimate pack to ensure a Premium moving services is delivered!</HeroServicesText>
                  </HeroServicesTextSection>
                </HeroServicesContainer>

                <HeroServicesDivBg style={{ backgroundImage:`url(${d2})` }}/> 
                <HeroServicesContainer>
                <HeroDeco1 src = {deco1}/>
                <HeroDeco2 src={deco2}/>
                <HeroServicesImgContainer>
                  <HeroServicesImg style={{ backgroundImage:`url(${storage})` }}/>
                  </HeroServicesImgContainer>
                  <HeroServicesTextSection>
                    <HeroServicesTextHeader>Storage</HeroServicesTextHeader>
                    <HeroServicesText>We can simply load all of your items and unload them within a storage unit from our partnered facilities or one of your choice.</HeroServicesText>
                  </HeroServicesTextSection>
                </HeroServicesContainer>

                <HeroServicesDivBg style={{ backgroundImage:`url(${d1})` }}/> 
                <HeroServicesContainer>
                <HeroDeco1 src = {deco1}/>
                <HeroDeco2 src={deco2}/>
                <HeroServicesImgContainer>
                  <HeroServicesImg style={{ backgroundImage:`url(${tv})` }}/>
                  </HeroServicesImgContainer>
                  <HeroServicesTextSection>
                    <HeroServicesTextHeader>TV Mounting</HeroServicesTextHeader>
                    <HeroServicesText>Simple jobs such as T.V. mounting can be done by our Handy-man!</HeroServicesText>
                  </HeroServicesTextSection>
                </HeroServicesContainer>
                </div>

                </HeroServicesRow>
              </HeroServicesWrapper>
           
            </HeroServicesSection>
        
      </>
    );
  }
  
  export default Services;