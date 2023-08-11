import React, { useEffect, useState } from 'react';

import {
  Col1Info, Col2Info,
  IButton,
  IEmail,
  IFirstName,
  IInputContainer, IInputText,
  ILastName,
  ILocation,
  ILocationButton,
  ILocationButtonText,
  ILocationContainer,
  ILocationRemove,
  ILocationText,
  IPhoneNumber,
  InfoInputContainer,
  InformationButtonWrap,
  InformationContainer, InformationForm,
  InformationFormContainer,
  InformationHeader,
  InformationLeftButton, InformationRightButton, InformationTopLine
} from './FormElements';
//import emailjs from 'emailjs-com';
import butt from '../BookImg/InfoLocationButton.svg';
import butt2 from '../BookImg/InfoLocationRemoveButton.svg';
import "./Form.scss";
//import s1 from '../BookImg/InformationImg1.svg';
//import s2 from '../BookImg/InformationImg2.svg';
const initialFormValues = {
  fname: '',
  lname: '',
  phone: '',
  email: '',
  addresses: [{ location: '' }],
};

function Information({ isOpen, toggle, nextStep, prevStep, handleChange, values, handleLocationSelect }) {
  const handleNext = () => {
    nextStep();
  };

  const handlePrevious = () => {
    prevStep();
  };

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
        <InformationHeader>Choose which service best suits your needs to get the best price matching.</InformationHeader>
        <InformationTopLine>Select from our affordable options to accommodate your needed service.</InformationTopLine>
        <InformationFormContainer>
          <InformationForm>
            <InfoInputContainer>
              <Col1Info>
                <IInputContainer>
                  <IInputText>First Name</IInputText>
                  <IFirstName
                    onChange={handleChange}
                    value={formValues.fname}
                    name="fname"
                    type="text"
                    placeholder="*First Name"
                    required={true}
                  />
                </IInputContainer>

                <IInputContainer>
                  <IInputText>Last Name</IInputText>
                  <ILastName
                    onChange={handleChange}
                    value={formValues.lname}
                    name="lname"
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
              </Col1Info>

              <Col2Info>
                {locationList.map((singleLocation, index) => (
                  <div key={index + 1} className="locations">
                    <div>
                      <ILocationContainer>
                        <ILocationText>Location {index + 1}</ILocationText>
                        <ILocation
                          name="location"
                          type="text"
                          id={`location-${index}`} // Use unique IDs for each location input
                          placeholder="*Location"
                          value={singleLocation.location}
                          onChange={(e) => handleLocationChange(e, index)}
                          required
                        />
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
                  </div>
                ))}
              </Col2Info>
            </InfoInputContainer>
            <InformationButtonWrap>
              <InformationLeftButton onClick={handlePrevious}>BACK</InformationLeftButton>
              <InformationRightButton onClick={handleNext}>NEXT</InformationRightButton>
            </InformationButtonWrap>
          </InformationForm>
        </InformationFormContainer>
      </InformationContainer>
    </>
  );
}

export default Information;