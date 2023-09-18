import React, { useEffect, useState } from 'react';

import {
  BookMoveHeader,
  BookMoveTopLine,
  Col1Info, Col2Info,
  FormSection,
  IButton,
  IEmail,
  IFirstName,
  IInputContainer, IInputText,
  ILastName,
  ILocationButton,
  ILocationButtonText,
  ILocationContainer,
  ILocationRemove,
  ILocationText,
  IPhoneNumber,
  InfoInputContainer,
  InfoRow,
  InfoWrapper,
  InformationContainer, InformationForm,
  LocationsRow
} from './FormElements';
//import emailjs from 'emailjs-com';
import butt from '../BookImg/InfoLocationButton.svg';
import butt2 from '../BookImg/InfoLocationRemoveButton.svg';
import "./Form.scss";
import PropertyForm from './PropertyForm';
//import s1 from '../BookImg/InformationImg1.svg';
//import s2 from '../BookImg/InformationImg2.svg';
const initialFormValues = {
  firstname: '',
  lastname: '',
  phone: '',
  email: '',
  addresses: [{ location: '' }],
};

function Information({             locationList,
  setLocationList,
  selectedSquareFootage,
  selectedDistance,
  unitNumber,
  isElevatorReserved,
  floorLevel,
  podUnits,  
   setSelectedSquareFootage,
  setSelectedDistance,
  setUnitNumber,
  setIsElevatorReserved,
  setFloorLevel,
  setPodUnits,
  propertyType, 
  setPropertyType,
   isOpen, toggle, state, handleLocationSelect, handleInput, addLocation }) {


  
  const [formValues, setFormValues] = useState(initialFormValues);

  useEffect(() => {
    // Load form values and locationList from localStorage when the Information component mounts
    const storedFormValues = JSON.parse(localStorage.getItem('formValues'));
    const storedLocationList = JSON.parse(localStorage.getItem('locationList'));

    if (storedFormValues) {
      setFormValues(storedFormValues);
    }

    if (storedLocationList) {
      setLocationList(storedLocationList);
    }
  }, []);

  useEffect(() => {
    // Save form values to localStorage whenever the formValues change
    localStorage.setItem('formValues', JSON.stringify(formValues));
  }, [formValues]);

  useEffect(() => {
    // Save locationList to localStorage whenever the locationList changes
    localStorage.setItem('locationList', JSON.stringify(locationList));
  }, [locationList]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const handleLocationChange = (e, index) => {
    const { name, value } = e.target;
    setLocationList((prevLocationList) => {
      const newList = [...prevLocationList];
      newList[index][name] = value;
      return newList;
    });
  };

  const handleLocationRemove = (index) => {
    setLocationList((prevLocationList) => {
      const newList = [...prevLocationList];
      newList.splice(index, 1);
      return newList;
    });
  };

  const handleLocationAdd = () => {
    setLocationList((prevLocationList) => [...prevLocationList, { location: '' }]);
  };


  const handleAddLocation = () => {
    if (propertyType === 'apartment' || propertyType === 'condo') {
      // Create location data for apartment or condo
      const locationData = {
        propertyType,
        unit: unitNumber, // Replace with the actual unit number
        squareFootage: selectedSquareFootage, // Replace with the selected square footage
        isElevatorReserved: isElevatorReserved, // Replace with the elevator reservation status
        floorLevel: floorLevel, // Replace with the actual floor level
        distanceToTruck: selectedDistance, // Replace with the selected distance to truck
        // Add any other relevant data here for apartment or condo
      };
      
      // Call the addLocation function and pass the location data
      addLocation(locationData);
    } else if (propertyType === 'home') {
      // Create location data for a standard home
      const locationData = {
        propertyType,
        squareFootage: selectedSquareFootage, // Replace with the selected square footage
        floorLevel: floorLevel, // Replace with the actual floor level
        distanceToTruck: selectedDistance, // Replace with the selected distance to truck
        // Add any other relevant data here for a standard home
      };
      
      // Call the addLocation function and pass the location data
      addLocation(locationData);
    } else if (propertyType === 'townhouse') {
      // Create location data for a townhouse
      const locationData = {
        propertyType,
        unit: unitNumber, // Replace with the actual unit number
        squareFootage: selectedSquareFootage, // Replace with the selected square footage
        floorLevel: floorLevel, // Replace with the actual floor level
        distanceToTruck: selectedDistance, // Replace with the selected distance to truck
        // Add any other relevant data here for a townhouse
      };
      
      // Call the addLocation function and pass the location data
      addLocation(locationData);
    } else if (propertyType === 'storage') {
      // Create location data for a storage unit
      const locationData = {
        propertyType,
        squareFootage: selectedSquareFootage, // Replace with the selected square footage
        isElevatorReserved: isElevatorReserved, // Replace with the elevator reservation status
        floorLevel: floorLevel, // Replace with the actual floor level
        distanceToTruck: selectedDistance, // Replace with the selected distance to truck
        // Add any other relevant data here for a storage unit
      };
      
      // Call the addLocation function and pass the location data
      addLocation(locationData);
    } else if (propertyType === 'pod') {
      // Create location data for a Pod Container
      const locationData = {
        propertyType,
        podUnits: podUnits, // Replace with the number of Pod Units
        squareFootage: selectedSquareFootage, // Replace with the selected square footage
        floorLevel: floorLevel, // Replace with the actual floor level
        distanceToTruck: selectedDistance, // Replace with the selected distance to truck
        // Add any other relevant data here for a Pod Container
      };
      
      // Call the addLocation function and pass the location data
      addLocation(locationData);
    }
  };

  return (
    <>
      <InformationContainer>
        <BookMoveHeader>Choose which service best suits your needs to get the best price matching.</BookMoveHeader>
        <BookMoveTopLine>Select from our affordable options to accommodate your needed service.</BookMoveTopLine>
          <InformationForm>
            <InfoInputContainer>
            
              <Col1Info>
              <InfoWrapper>
              <InfoRow>
                <IInputContainer>
                  <IInputText>First Name</IInputText>
                  <IFirstName
                   onChange={handleInput}
                    value={state.firstname}
                    name="firstname"
                    type="text"
                    placeholder="*First Name"
                    required={true}
                  />
                </IInputContainer>

                <IInputContainer>
                  <IInputText>Last Name</IInputText>
                  <ILastName
                   onChange={handleInput}
                    value={state.lastname}
                    name="lastname"
                    type="text"
                    placeholder="*Last Name"
                    required={true}
                  />
                </IInputContainer>

                <IInputContainer>
                  <IInputText>Phone Number</IInputText>
                  <IPhoneNumber
                    onChange={handleInput}
                    value={state.phone}
                    name="phone"
                    type="text"
                    placeholder="*Phone Number"
                    required={true}
                  />
                </IInputContainer>

                <IInputContainer>
                  <IInputText>Email Address</IInputText>
                  <IEmail
                   onChange={handleInput}
                    value={state.email}
                    name="email"
                    type="text"
                    placeholder="*Email Address"
                    required={true}
                  />
                </IInputContainer>
                </InfoRow>
                </InfoWrapper>
              </Col1Info>

              <Col2Info>
              <InfoWrapper>
              <LocationsRow>
                {locationList.map((singleLocation, index) => (
                  <div key={index + 1}>
                  <FormSection>
                  <ILocationText>Location {index + 1}</ILocationText>
                      <PropertyForm    
                          locationList={locationList}
                          setLocationList={setLocationList}
                          selectedSquareFootage={selectedSquareFootage}
                          selectedDistance={selectedDistance}
                          unitNumber={unitNumber}
                          isElevatorReserved={isElevatorReserved}
                          floorLevel={floorLevel}
                          podUnits={podUnits}       setSelectedSquareFootage={setSelectedSquareFootage}
                          setSelectedDistance={setSelectedDistance}
                          setUnitNumber={setUnitNumber}
                          index = {index}
                          setIsElevatorReserved={setIsElevatorReserved}
                          setFloorLevel={setFloorLevel}
                          setPodUnits={setPodUnits} 
                          propertyType={propertyType} 
                          setPropertyType={setPropertyType}
                          handleAddLocation={handleAddLocation} addLocation={addLocation} 

                />
        

                    <div>
                      <ILocationContainer>
                     
                        {/*
                        <ILocation
                          name="location"
                          type="text"
                          id={`location-${index}`} // Use unique IDs for each location input
                          placeholder="*Location"
                          value={singleLocation.location}
                          onChange={(e) => handleLocationChange(e, index)}
                          required
                          
                        />
                        */}
                      
                      </ILocationContainer>
                  
                      {locationList.length - 1 === index && locationList.length < 5 && (
                        <IButton>
                          <ILocationButton
                            type="button"
                            onClick={() => {
                                handleLocationAdd();
                                handleAddLocation();
                              }}
                            className="add-btn"
                            style={{ backgroundImage: `url(${butt})` }}
                          >
                            <ILocationButtonText>Add More Locations</ILocationButtonText>
                          </ILocationButton>
                        </IButton>
                      )}
                  
                    </div>
                    <div className="second-division">
                      {locationList.length !== 1 && (
                        <ILocationRemove
                          type="button"
                          onClick={() => handleLocationRemove(index)}
                          className="remove-btn"
                          style={{ backgroundImage: `url(${butt2})` }}
                        ></ILocationRemove>
                        
                      )}
                      
                    </div>
                    </FormSection>
                  </div>
                  
                ))}
                </LocationsRow>
                </InfoWrapper>
              </Col2Info>
            </InfoInputContainer>
          </InformationForm>
      </InformationContainer>
    </>
  );
}

export default Information;