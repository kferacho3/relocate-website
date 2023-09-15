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
import PropertyForm from './Home2';
//import s1 from '../BookImg/InformationImg1.svg';
//import s2 from '../BookImg/InformationImg2.svg';
const initialFormValues = {
  firstname: '',
  lastname: '',
  phone: '',
  email: '',
  addresses: [{ location: '' }],
};

function Information({ isOpen, toggle, values, handleLocationSelect }) {


  const [locationList, setLocationList] = useState([{ location: '' }]);
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
                    onChange={handleChange}
                    value={formValues.firstname}
                    name="firstname"
                    type="text"
                    placeholder="*First Name"
                    required={true}
                  />
                </IInputContainer>

                <IInputContainer>
                  <IInputText>Last Name</IInputText>
                  <ILastName
                    onChange={handleChange}
                    value={formValues.lastname}
                    name="lastname"
                    type="text"
                    placeholder="*Last Name"
                    required={true}
                  />
                </IInputContainer>

                <IInputContainer>
                  <IInputText>Phone Number</IInputText>
                  <IPhoneNumber
                    onChange={handleChange}
                    value={formValues.phone}
                    name="phone"
                    type="text"
                    placeholder="*Phone Number"
                    required={true}
                  />
                </IInputContainer>

                <IInputContainer>
                  <IInputText>Email Address</IInputText>
                  <IEmail
                    onChange={handleChange}
                    value={formValues.email}
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
                      <PropertyForm />
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
                            onClick={handleLocationAdd}
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