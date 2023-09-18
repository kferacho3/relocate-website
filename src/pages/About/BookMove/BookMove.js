


import React, { useRef, useState } from 'react';
import "./BookMove.scss";
import Date from "./Form/Date";
import Heavy from "./Form/Heavy";
import Information from "./Form/Information";
import Rooms from './Form/Rooms';
//import Service from "./Form/Service";
import { BackButton, BookMoveContainer, ButtonContainer, NextButton, initialState } from './Form/FormElements';
import Service from './Form/Service2';
import Start from "./Form/Start";
import Time from "./Form/Time";



import i1 from './FormImg/formRooms1.svg';
import i2 from './FormImg/formRooms2.svg';
import i3 from './FormImg/formRooms3.svg';
import i4 from './FormImg/formRooms4.svg';
import i5 from './FormImg/formRooms5.svg';

import i10 from './FormImg/formRooms10.svg';
import i6 from './FormImg/formRooms6.svg';
import i7 from './FormImg/formRooms7.svg';
import i8 from './FormImg/formRooms8.svg';
import i9 from './FormImg/formRooms9.svg';

import i11 from './FormImg/formRooms11.svg';
import i12 from './FormImg/formRooms12.svg';
import i13 from './FormImg/formRooms13.svg';
import i14 from './FormImg/formRooms14.svg';
import i15 from './FormImg/formRooms15.svg';



import h1 from './FormImg/formHeavy1.svg';
import h2 from './FormImg/formHeavy2.svg';
import h3 from './FormImg/formHeavy3.svg';
import h4 from './FormImg/formHeavy4.svg';
import h5 from './FormImg/formHeavy5.svg';

import h10 from './FormImg/formHeavy10.svg';
import h6 from './FormImg/formHeavy6.svg';
import h7 from './FormImg/formHeavy7.svg';
import h8 from './FormImg/formHeavy8.svg';
import h9 from './FormImg/formHeavy9.svg';

import h11 from './FormImg/formHeavy11.svg';
import h12 from './FormImg/formHeavy12.svg';
import h13 from './FormImg/formHeavy13.svg';
import h14 from './FormImg/formHeavy14.svg';
import h15 from './FormImg/formHeavy15.svg';

function BookMove() {
  const initialValues = { packers: "", service: "", firstName: "", lastName: "", email: "", phone: "", locations: "", date: "", time: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [state, setState] = useState(initialState);
  const [error, setError] = useState('');
  const [step, setStep] = useState(1);

  //usestate for Rooms

  const [rooms, setRooms] = useState([
    { id: 1, count: 0, name: "Master Bedroom", src: i1 },
    { id: 2, count: 0, name: "Standard Bedroom", src: i2 },
    { id: 3, count: 0, name: "Living Room / Den", src: i3 },
    { id: 4, count: 0, name: "Playroom", src: i4 },
    { id: 5, count: 0, name: "Craft Room", src: i5 },
    { id: 6, count: 0, name: "Kids / Nursery Room", src: i6 },
    { id: 7, count: 0, name: "Attic", src: i7 },
    { id: 8, count: 0, name: "Storage / Closet", src: i8 },
    { id: 9, count: 0, name: "Dining Room", src: i9 },
    { id: 10, count: 0, name: "Kitchen", src: i10 },
    { id: 11, count: 0, name: "Garage", src: i11 },
    { id: 12, count: 0, name: "Patio / Deck", src: i12 },
    { id: 13, count: 0, name: "Exercise Room", src: i13 },
    { id: 14, count: 0, name: "Laundry Room", src: i14 },
    { id: 15, count: 0, name: "Office Space", src: i15 },
  ]);


  //useStates for Heavy Items
  const [items, setItems] = useState([
    { id: 1, count: 0, name: "Piano", src: h1 },
    { id: 2, count: 0, name: "Safe", src: h2 },
    { id: 3, count: 0, name: "Oven / Stove", src: h3 },
    { id: 4, count: 0, name: "Refrigerator", src: h4 },
    { id: 5, count: 0, name: "Large Freezer", src: h5 },
    { id: 6, count: 0, name: "Aquarium / Terrarium", src: h6 },
    { id: 7, count: 0, name: "Dishwasher", src: h7 },
    { id: 8, count: 0, name: "Fine Art / Sculptures", src: h8 },
    { id: 9, count: 0, name: "Washer / Dryer", src: h9 },
    { id: 10, count: 0, name: "Antique / Fragile Furniture", src: h10 },
    { id: 11, count: 0, name: "Grandfather Clock", src: h11 },
    { id: 12, count: 0, name: "Pool Table", src: h12 },
    { id: 13, count: 0, name: "Large Armoire", src: h13 },
    { id: 14, count: 0, name: "Riding Lawn Mower", src: h14 },
    { id: 15, count: 0, name: "Exercise Equipment", src: h15 },
  ]);




  
    //useStates for Location Properties
    const [propertyType, setPropertyType] = useState('');
    const [selectedSquareFootage, setSelectedSquareFootage] = useState('');
    const [selectedDistance, setSelectedDistance] = useState('');
    const [unitNumber, setUnitNumber] = useState(''); // Add other state variables as needed
    const [isElevatorReserved, setIsElevatorReserved] = useState(''); // Add other state variables as needed
    const [floorLevel, setFloorLevel] = useState(''); // Add other state variables as needed
    const [podUnits, setPodUnits] = useState(''); // Add other state variables as needed
  
    const [locationList, setLocationList] = useState([
      { location1: [] },
      { location2: [] },
      { location3: [] },
      { location4: [] },
      { location5: [] }
    ]);
  
// useState for Date

  const [date, setDate] = useState();


  const addLocation = (locationData) => {
    setState((prevState) => ({
      ...prevState,
      locations: [...prevState.locations, locationData],
    }));
  };

  //Handle change to next step
  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };
  
  //Handle change to previous step 
  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };



  const handleInput = (e) => {
    const { name, value, type, checked } = e.target;
    //e.preventDefault();
    // Handling checkboxes
    if (type === 'checkbox') {
      if (checked) {
        setState((prevState) => ({
          ...prevState,
          selectedHeavy: [...prevState.selectedHeavy, value], // Add the value to the array
        }));
      } else {
        setState((prevState) => ({
          ...prevState,
          selectedHeavy: prevState.selectedHeavy.filter(
            (item) => item !== value
          ), // Remove the value from the array
        }));
      }
    } else {
      setState({ ...state, [name]: value }); // Handling other input types
    }
  };
  
  
  const form = useRef();


/*
  const handlePropertyChange = (index) => (propertyData) => {
    setFormData((prevData) => {
      const updatedLocations = [...prevData.step3.locations];
      updatedLocations[index] = propertyData;
      
      return {
        ...prevData,
        step3: {
          ...prevData.step3,
          locations: updatedLocations,
        },
      };
    });
  };
  */

  // Get the component corresponding to the current step
  // Each component receives the following props:
  const getStepComponent = () => {
    switch (step) {
      case 1:
        return (
          <Start
            nextStep={nextStep}
            handleInput={handleInput}
            state={state}
          />
        );
      case 2:
        return (
          <Service
            nextStep={nextStep}
            prevStep={prevStep}
            handleInput={handleInput}
            state={state}
           
          />
        );
      case 3:
        return (
          <Information
          nextStep={nextStep}
          prevStep={prevStep}
          handleInput={handleInput}
          state={state}


          addLocation={addLocation}
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
          setIsElevatorReserved={setIsElevatorReserved}
          setFloorLevel={setFloorLevel}
          setPodUnits={setPodUnits} 
          propertyType={propertyType} 
          setPropertyType={setPropertyType}
          //handlePropertyChange={handlePropertyChange} // Pass the function
      
        />
        );
      case 4:
        return (
          <Rooms
            nextStep={nextStep}
            prevStep={prevStep}
            state={state}
            handleInput={handleInput}
            rooms={rooms}
            setRooms={setRooms}
          />
        );
      case 5:
        return (
          <Heavy
            nextStep={nextStep}
            prevStep={prevStep}
            state={state}
            handleInput={handleInput}
            items={items}
            setItems={setItems}
          
          />
        );
      case 6:
        return (
          <Date
            nextStep={nextStep}
            prevStep={prevStep}
            state={state}
            handleInput={handleInput}
            date={date}
            setDate={setDate}
          />
        );
      case 7:
        return (
          <Time
            nextStep={nextStep}
            prevStep={prevStep}
            state={state}
            handleInput={handleInput}
          />
        );
      default:
        console.log('This is a multi-step form built with React.');
        return null;
    }
  };

  return (
    <BookMoveContainer ref = {form}>
      {step === 1 && (
        <>
          <Start
            nextStep={nextStep}
            handleInput={handleInput}
            state={state}
      
          />
          <ButtonContainer>
            <NextButton onClick={nextStep}>NEXT</NextButton>
          </ButtonContainer>
        </>
      )}

      {step === 7 && (
        <>
          <Time
            nextStep={nextStep}
            prevStep={prevStep}
            state={state}
            handleInput={handleInput}
     
          />
          <ButtonContainer>
            <BackButton onClick={prevStep}>BACK</BackButton>
          </ButtonContainer>
        </>
      )}

      {step !== 1 && step !== 7 && (
        <>
          {getStepComponent()}
          <ButtonContainer>
            <NextButton onClick={nextStep}>NEXT</NextButton>
            <BackButton onClick={prevStep}>BACK</BackButton>
          </ButtonContainer>
        </>
      )}
    </BookMoveContainer>
  );
}

export default BookMove;


/*

    step3: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      locations: [
        {
        street: '',
        property1: '',
        property2: '',
      }
    
    ],
    },

    this.props.locations.push({
      'street':
    })

    */