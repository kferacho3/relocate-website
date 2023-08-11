import React, { useEffect, useState } from 'react';

import {
  HomeButtonWrap,
  HomeContainer, HomeForm,
  HomeFormContainer,
  HomeFormHeader,
  HomeFormTopLine,
  HomeHeader,
  HomeImg,
  HomeImgContainer,
  HomeInput,
  HomeLeftButton,
  HomeLeftSwitch,
  HomeOptContainer,
  HomeRightButton,
  HomeRightSwitch,
  HomeRow,
  HomeText,
  HomeTextHeader,
  HomeTextSection,
  HomeWrapper
} from './FormElements';
//import emailjs from 'emailjs-com';
import "./Form.scss";
//import s1 from '../BookImg/HomeImg1.svg';
//import s2 from '../BookImg/HomeImg2.svg';
import h1 from '../../../../logos/homeFormLogos1.svg';
import h2 from '../../../../logos/homeFormLogos2.svg';
import h3 from '../../../../logos/homeFormLogos3.svg';
import h4 from '../../../../logos/homeFormLogos4.svg';
import h5 from '../../../../logos/homeFormLogos5.svg';
import h6 from '../../../../logos/homeFormLogos6.svg';

import arrow from './FormImg/homeArrow.svg';
function Home({ values, handleChange, nextStep, prevStep }) {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [currentLocationIndex, setCurrentLocationIndex] = useState(0);

  useEffect(() => {
    setSelectedLocation(values.locations[0]?.location || ''); // Set the default selected location to the first location in the list
  }, [values.locations]);
  const handleHomeChange = (locationIndex) => (e) => {
    if (!e || !e.target) return; // Check if event or event.target is undefined
    const { value } = e.target;
    setSelectedLocation(value);
    handleChange('step4')(locationIndex, 'home', value);
  };
  const handleLocationSelect = (location) => {
    setSelectedLocation(location); // Update the selected location
    const locationIndex = values.locations.findIndex((loc) => loc.location === location);
    setCurrentLocationIndex(locationIndex); // Update the current location index
  };

  const handleNext = () => {
    if (currentLocationIndex < values.locations.length - 1) {
      setCurrentLocationIndex((prevIndex) => prevIndex + 1); // Move to the next location
      setSelectedLocation(values.locations[currentLocationIndex + 1]?.location || ''); // Update the selected location
    }
    nextStep();
  };

  const handlePrevious = () => {
    if (currentLocationIndex > 0) {
      setCurrentLocationIndex((prevIndex) => prevIndex - 1); // Move to the previous location
      setSelectedLocation(values.locations[currentLocationIndex - 1]?.location || ''); // Update the selected location
    }
    prevStep();
  };

  return (
    <>
      <HomeContainer>
        <HomeHeader>
          Choose which Home best suits your needs to get the best price matching.
        </HomeHeader>
        <HomeFormContainer>
          <HomeForm className="radio-group">
            {values.locations.map((location, index) => (
              <React.Fragment key={index}>
                <HomeFormHeader>Choose type of Home for address:</HomeFormHeader>
                <HomeFormTopLine>{selectedLocation}</HomeFormTopLine>
                <HomeWrapper>
                  <HomeRow>
                    <div>
                  
                      <HomeInput
                        type="radio"
                        className="radio isHidden"
                        value="Standard Home"
                        name={`home-${index}`} // Use unique names for each location's home selection
                        checked={values.homes[index]?.home === 'Standard Home'}
                        onChange={(e) => handleHomeChange(e, index)}
                      />
                        <HomeOptContainer >
                          <HomeImgContainer>
                            <HomeImg
                              style={{ backgroundImage: `url(${h1})` }}
                            />
                          </HomeImgContainer>
                          <HomeTextSection>
                            <HomeTextHeader>Standard Home</HomeTextHeader>
                            <HomeText>
                              A single-family homeowner typically owns the building and the land the building sits on.
                            </HomeText>
                          </HomeTextSection>
                        </HomeOptContainer>
              
                      <HomeInput
                          type="radio"
                          className="radio isHidden"
                          value="Apartment"
                          name={`home-${currentLocationIndex}`} // Use unique names for each location's home selection
                          checked={values.homes[currentLocationIndex]?.home === 'Apartment'}
                          onChange={(e) => handleHomeChange(e, index)}
                        />
                        <HomeOptContainer>
                          <HomeImgContainer>
                            <HomeImg
                              style={{ backgroundImage: `url(${h2})` }}
                            />
                          </HomeImgContainer>
                          <HomeTextSection>
                            <HomeTextHeader>Apartment</HomeTextHeader>
                            <HomeText>
                              An apartment is a unit inside of a building structure composed of similarly styled individual units.
                            </HomeText>
                          </HomeTextSection>
                        </HomeOptContainer>
                 
                      <HomeInput
                          type="radio"
                          className="radio isHidden"
                          value="Storage Unit"
                          name={`home-${currentLocationIndex}`} // Use unique names for each location's home selection
                          checked={values.homes[currentLocationIndex]?.home === 'Storage Unit'}
                          onChange={(e) => handleHomeChange(e, index)}
                        />
                        <HomeOptContainer >
                          <HomeImgContainer>
                            <HomeImg
                              style={{ backgroundImage: `url(${h3})` }}
                            />
                          </HomeImgContainer>
                          <HomeTextSection>
                            <HomeTextHeader>Storage Unit</HomeTextHeader>
                            <HomeText>
                              A storage unit may consist of a personal garage or a purchased unit at an establishment such as “Public Storage”.
                            </HomeText>
                          </HomeTextSection>
                        </HomeOptContainer>
                     
                    </div>

                    <div>
                  
                      <HomeInput
                        type="radio"
                        className="radio isHidden"
                        value="Townhouse"
                        name={`home-${currentLocationIndex}`} // Use unique names for each location's home selection
                        checked={values.homes[currentLocationIndex]?.home === 'Townhouse'}
                        onChange={(e) => handleHomeChange(e, index)}
                      />
                        <HomeOptContainer>
                          <HomeImgContainer>
                            <HomeImg
                              style={{ backgroundImage: `url(${h4})` }}
                            />
                          </HomeImgContainer>
                          <HomeTextSection>
                            <HomeTextHeader>Townhouse</HomeTextHeader>
                            <HomeText>
                           Townhouses are multi-floor homes with their own entrance, bathroom and kitchen space. Townhomes share two walls with neighbors unless the townhome is located at the end of a building.

                          </HomeText>
                          </HomeTextSection>
                        </HomeOptContainer>
                 
                      <HomeInput
                        type="radio"
                        className="radio isHidden"
                        value="Pod Container"
                        name={`home-${currentLocationIndex}`} // Use unique names for each location's home selection
                        checked={values.homes[currentLocationIndex]?.home === 'Pod Container'}
                        onChange={(e) => handleHomeChange(e, index)}
                      />
                        <HomeOptContainer>
                          <HomeImgContainer>
                            <HomeImg
                              style={{ backgroundImage: `url(${h5})` }}
                            />
                          </HomeImgContainer>
                          <HomeTextSection>
                            <HomeTextHeader>Condominium</HomeTextHeader>
                            <HomeText>
                              Condominiums, or condos for short, are buildings made up of individual units that are owned. They can look and feel like an apartment building or community.  </HomeText>
                          </HomeTextSection>
                        </HomeOptContainer>
                   

                     
                        <HomeInput
                          type="radio"
                          className="radio isHidden"
                          value="Pod Container"
                          name={`home-${index}`} // Use unique names for each location's home selection
                          checked={values.homes[index]?.home === 'Pod Container'}
                          onChange={(e) => handleHomeChange(e, index)}
                        />
                        <HomeOptContainer>
                          <HomeImgContainer>
                            <HomeImg
                              style={{ backgroundImage: `url(${h6})` }}
                            />
                          </HomeImgContainer>
                          <HomeTextSection>
                            <HomeTextHeader>Pod Container</HomeTextHeader>
                            <HomeText>
                              Pods are long, rectangular containers used for storing moving items. Properties containing pods usually have more than one which all may vary in length.
                            </HomeText>
                          </HomeTextSection>
                        </HomeOptContainer>
                     
                    </div>
                    {/* The rest of the code for other home options (Townhouse, Condominium, Pod Container) */}
                  </HomeRow>
                </HomeWrapper>
              </React.Fragment>
            ))}
            <HomeLeftSwitch
  src={arrow}
  onClick={() => {
    if (currentLocationIndex > 0) {
      setCurrentLocationIndex((prevIndex) => prevIndex - 1);
      setSelectedLocation(values.locations[currentLocationIndex - 1]?.location || '');
    }
  }}
/>
<HomeRightSwitch
  src={arrow}
  onClick={() => {
    if (currentLocationIndex < values.locations.length - 1) {
      setCurrentLocationIndex((prevIndex) => prevIndex + 1);
      setSelectedLocation(values.locations[currentLocationIndex + 1]?.location || '');
    }
  }}
/>
           
            <HomeButtonWrap>
              <HomeLeftButton onClick={handlePrevious}>BACK</HomeLeftButton>
              <HomeRightButton onClick={handleNext}>NEXT</HomeRightButton>
            </HomeButtonWrap>
          </HomeForm>
        </HomeFormContainer>
      </HomeContainer>
    </>
  );
}

export default Home;