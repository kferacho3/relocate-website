import React, { useState } from 'react';
import "./BookMove.scss";
import Date from "./Form/Date";
import Heavy from "./Form/Heavy";
import Information from "./Form/Information";
import Rooms from './Form/Rooms';
//import Service from "./Form/Service";
import { BackButton, BookMoveContainer, ButtonContainer, NextButton } from './Form/FormElements';
import Service from './Form/Service2';
import Start from "./Form/Start";
import Time from "./Form/Time";
function BookMove() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    step1: {
      packers: '',
    },


    step2: {
      service: '',
    },

    step3: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      locations: [
    ],
    },

    step4: {
      selectedRooms: [],
    },

    step5: {
      selectedHeavy: [],
    },

    //step7
    step6: {
      date: '',
    },

    //step8
    step7: {
      time: '',
    },
  });

  //Handle change to next step
  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };
  
  //Handle change to previous step 
  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

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

  const handleChange = (stepKey) => (input) => (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [stepKey]: {
        ...prevData[stepKey],
        [input]: e.target.value,
      },
    }));
  };

  // Get the component corresponding to the current step
  // Each component receives the following props:
  const getStepComponent = () => {
    switch (step) {
      case 1:
        return (
          <Start
            nextStep={nextStep}
            handleChange={handleChange('step1')}
            values={formData.step1}
          />
        );
      case 2:
        return (
          <Service
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange('step2')}
            values={formData.step2}
          />
        );
      case 3:
        return (
          <Information
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange('step3')}
          handlePropertyChange={handlePropertyChange} // Pass the function
          values={formData.step3}
        />
        );
      case 4:
        return (
          <Rooms
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange('step4')}
            values={formData.step4}
          />
        );
      case 5:
        return (
          <Heavy
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange('step5')}
            values={formData.step5}
          />
        );
      case 6:
        return (
          <Date
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange('step6')}
            values={formData.step6}
          />
        );
      case 7:
        return (
          <Time
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange('step7')}
            values={formData.step7}
          />
        );
      default:
        console.log('This is a multi-step form built with React.');
        return null;
    }
  };

  return (
    <BookMoveContainer>
      {step === 1 && (
        <>
          <Start
            nextStep={nextStep}
            handleChange={handleChange('step1')}
            values={formData.step1}
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
            handleChange={handleChange('step7')}
            values={formData.step7}
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