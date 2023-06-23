import React, { useState } from 'react';
import "./BookMove.scss";
import Date from "./Form/Date";
import Heavy from "./Form/Heavy";
import Home from "./Form/Home";
import Information from "./Form/Information";
import Items from "./Form/Items";
import Service from "./Form/Service";
import Start from "./Form/Start";
import Time from "./Form/Time";

function BookMove() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    packers: '',
    service: '',
    address: [],
    home: '',
    selectedItems: [],
    selectedHeavy: [],
    date: '',
    time: ''
    // Add service field to the form data
  });

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };
  
  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  // Handle fields change
  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  // Get the component corresponding to the current step
  const getStepComponent = () => {
    switch (step) {
      case 1:
        return (
          <Start
            nextStep={nextStep}
            handleChange={handleChange}
            values={formData}
          />
        );
      case 2:
        return (
          <Service
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={formData}
          />
        );
      case 3:
        return (
          <Information
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={formData}
          />
        );
      case 4:
        return (
          <Home
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={formData}
          />
        );
      case 5:
        return (
          <Items
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={formData}
            selectedItems={formData.selectedItems}
            setSelectedItems={(selectedItems) =>
              setFormData({ ...formData, selectedItems })
            }
          />
        );
      case 6:
        return (
          <Heavy
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={formData}
            selectedItems={formData.selectedHeavy}
            setSelectedItems={(selectedHeavy) =>
              setFormData({ ...formData, selectedHeavy })
            }
          />
        );
      case 7:
        return (
          <Date
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={formData}
          />
        );
      case 8:
        return (
          <Time
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={formData}
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