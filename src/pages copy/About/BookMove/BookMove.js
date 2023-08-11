import React, { useState } from 'react';
import "./BookMove.scss";
import Date from "./Form/Date";
import Heavy from "./Form/Heavy";
import Home from "./Form/Home";
import Information from "./Form/Information";
import Rooms from './Form/Rooms';
//import Service from "./Form/Service";
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
    locations: [{ location: '' }],
  },
  step4: {
    homes: [], // An array to store the home selections for each location
  },
  step5: {
    selectedRooms: [],
  },
  step6: {
    selectedHeavy: [],
  },
  //step7
  step7: {
    date: '',
  },
  //step8
  step8: {
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

  // Handle fields change
  const handleChange = (stepKey) => (input) => (e) => {
    if (stepKey === 'step4') {
      // Handling home selections for step4 (Home component)
      const { name, value } = e.target;
      const locationIndex = parseInt(input); // Convert input (location index) to a number
  
      setFormData((prevData) => {
        const homes = [...prevData.step4.homes];
        homes[locationIndex] = { ...homes[locationIndex], [name]: value };
        return {
          ...prevData,
          step4: {
            ...prevData.step4,
            homes,
          },
        };
      });
    } else {
      // For other steps, update the formData as usual
      setFormData((prevData) => ({
        ...prevData,
        [stepKey]: {
          ...prevData[stepKey],
          [input]: e.target.value,
        },
      }));
    }
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
            values={formData.step3}
          />
        );
        case 4:
          return (
            <Home
              nextStep={nextStep}
              prevStep={prevStep}
              handleChange={handleChange('step4')}
              values={{
                locations: formData.step3.locations,
                homes: formData.step4.homes,
              }}
            />
          );
      case 5:
        return (
          <Rooms
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange('step5')}
            values={formData.step5}
          />
        );
      case 6:
        return (
          <Heavy
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange('step6')}
            values={formData.step6}
          />
        );
      case 7:
        return (
          <Date
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange('step7')}
            values={formData.step7}
          />
        );
      case 8:
        return (
          <Time
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange('step8')}
            values={formData.step8}
          />
        );
      default:
        console.log('This is a multi-step form built with React.');
        return null;
    }
  };

  return (
    <div className="book-move">
      {getStepComponent()}
    </div>
  );
}

export default BookMove;
