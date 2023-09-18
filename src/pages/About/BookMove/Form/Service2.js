import React from 'react';

import hour from '../../../../logos/ClockIcon.svg';
import house from '../../../../logos/HouseIcon.svg';
import night from '../../../../logos/NightIcon.svg';
import pack from '../../../../logos/PackingIcon.svg';
import storage from '../../../../logos/StorageIcon.svg';
import tv from '../../../../logos/TVIcon.svg';
import trash from '../../../../logos/TrashIcon.svg';
import vip from '../../../../logos/VIPIcon.svg';


import {
  BookMoveHeader,
  BookMoveTopLine,
  ServicesImg,
  ServicesImgContainer,
  ServicesInput,
  ServicesOptContainer,
  ServicesRow,
  ServicesText,
  ServicesTextHeader,
  ServicesTextSection,
  ServicesWrapper,
  StartContainer, StartForm
} from './FormElements';
//import emailjs from 'emailjs-com';
import "./Form.scss";
function Service({handleInput, state }) {


  return (
    <>
      <StartContainer>
        <BookMoveHeader>Choose which service best suits your needs to get the best price matching.</BookMoveHeader>
        <BookMoveTopLine>Select from our affordable options to accommodate your needed service.</BookMoveTopLine>
     
          <StartForm className="radio-group">
          <ServicesWrapper>
                <ServicesRow>
            <label>
              <ServicesInput
                type="radio"
                className="radio isHidden"
                value="Moving Service"
                name="service"
                id='Moving Service'
                checked={state.service === 'Moving Service'}
                onChange={handleInput}
              />
              <ServicesOptContainer className='radio' >
              <ServicesImgContainer>
                  <ServicesImg style={{ backgroundImage:`url(${house})` }}/>
                  </ServicesImgContainer>
                  <ServicesTextSection>
                    <ServicesTextHeader>Moving Service</ServicesTextHeader>
                    <ServicesText>Standard In-state moving service that includes Loading & Unloading services together or individually. </ServicesText>
                  </ServicesTextSection>
              </ServicesOptContainer>
            </label>

            <label>
              <ServicesInput
                type="radio"
                className="radio isHidden"
                value="Packing & Unpacking"
                name="service"
                id='Packing & Unpacking'
                checked={state.service === 'Packing & Unpacking'}
                onChange={handleInput}
              />
              <ServicesOptContainer className='radio' >
              <ServicesImgContainer>
                  <ServicesImg style={{ backgroundImage:`url(${pack})` }}/>
                  </ServicesImgContainer>
                  <ServicesTextSection>
                    <ServicesTextHeader>Packing & Unpacking</ServicesTextHeader>
                    <ServicesText>Packing of items for moving and/or storage. Unpacking can be added to moving service or done as a stand alone service.</ServicesText>
                  </ServicesTextSection>
              </ServicesOptContainer>
            </label>

            <label>
              <ServicesInput
                type="radio"
                className="radio isHidden"
                value="Hourly Labor"
                name="services"
                id='Hourly Labor'
                checked={state.service === 'Hourly Labor'}
                onChange={handleInput}
              />
              <ServicesOptContainer className='radio' >
              <ServicesImgContainer>
                  <ServicesImg style={{ backgroundImage:`url(${hour})` }}/>
                  </ServicesImgContainer>
                  <ServicesTextSection>
                    <ServicesTextHeader>Hourly Labor</ServicesTextHeader>
                    <ServicesText>Physical Jobs that require strong hands can be done with the Hourly Labor Service. We will send a pack of workers to complete your task.</ServicesText>
                  </ServicesTextSection>
              </ServicesOptContainer>
            </label>

            <label>
              <ServicesInput
                type="radio"
                className="radio isHidden"
                value="Junk Removal"
                name="service"
                id='Junk Removal'
                checked={state.service === 'Junk Removal'}
                onChange={handleInput}
              />
              <ServicesOptContainer className='radio' >
              <ServicesImgContainer>
                  <ServicesImg style={{ backgroundImage:`url(${trash})` }}/>
                  </ServicesImgContainer>
                  <ServicesTextSection>
                    <ServicesTextHeader>Junk Removal</ServicesTextHeader>
                    <ServicesText>Removal of Junk, Garbage, or Large Items at your designated location.</ServicesText>
                  </ServicesTextSection>
              </ServicesOptContainer>
            </label>

            <label>
              <ServicesInput
                type="radio"
                className="radio isHidden"
                value="Overnight Moving"
                name="service"
                id='Overnight Moving'
                checked={state.service === 'Overnight Moving'}
                onChange={handleInput}
              />
              <ServicesOptContainer className='radio' >
              <ServicesImgContainer>
                  <ServicesImg style={{ backgroundImage:`url(${night})` }}/>
                  </ServicesImgContainer>
                  <ServicesTextSection>
                    <ServicesTextHeader>Overnight Moving</ServicesTextHeader>
                    <ServicesText>Some moves may need extra time or may simply not fall within your schedule. We provide Overnight moving services to help deviate from these issues.</ServicesText>
                  </ServicesTextSection>
              </ServicesOptContainer>
            </label>

            <label>
              <ServicesInput
                type="radio"
                className="radio isHidden"
                value="VIP Moving Service"
                name="service"
                id='VIP Moving Service'
                checked={state.service === 'VIP Moving Service'}
                onChange={handleInput}
              />
              <ServicesOptContainer className='radio' >
              <ServicesImgContainer>
                  <ServicesImg style={{ backgroundImage:`url(${vip})` }}/>
                  </ServicesImgContainer>
                  <ServicesTextSection>
                    <ServicesTextHeader>VIP Moving Services</ServicesTextHeader>
                    <ServicesText>For special or large scale moves, we will provide the ultimate pack to ensure a Premium moving services is delivered!</ServicesText>
                  </ServicesTextSection>
              </ServicesOptContainer>
            </label>

            <label>
              <ServicesInput
                type="radio"
                className="radio isHidden"
                value="Storage"
                name="service"
                id='Storage'
                checked={state.service === 'Storage'}
                onChange={handleInput}
              />
              <ServicesOptContainer className='radio' >
              <ServicesImgContainer>
                  <ServicesImg style={{ backgroundImage:`url(${storage})` }}/>
                  </ServicesImgContainer>
                  <ServicesTextSection>
                    <ServicesTextHeader>Storage</ServicesTextHeader>
                    <ServicesText>We can simply load all of your items and unload them within a storage unit from our partnered facilities or one of your choice.</ServicesText>
                  </ServicesTextSection>
              </ServicesOptContainer>
            </label>

            <label>
              <ServicesInput
                type="radio"
                className="radio isHidden"
                value="TV Mounting"
                name="service"
                id='TV Mounting'
                checked={state.service === 'TV Mounting'}
                onChange={handleInput}
              />
              <ServicesOptContainer className='radio' >
              <ServicesImgContainer>
                  <ServicesImg style={{ backgroundImage:`url(${tv})` }}/>
                  </ServicesImgContainer>
                  <ServicesTextSection>
                    <ServicesTextHeader>TV Mounting</ServicesTextHeader>
                    <ServicesText>Simple jobs such as T.V. mounting can be done by our Handy-man!</ServicesText>
                  </ServicesTextSection>
              </ServicesOptContainer>
            </label>
            </ServicesRow>
              </ServicesWrapper>
            
          </StartForm>
      
      </StartContainer>
    </>
  );
}

export default Service;