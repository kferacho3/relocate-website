import React, { useRef,  useState} from 'react';

import {
  InformationContainer, InformationForm, InformationHeader, InformationButtonWrap, IButton,
  InformationLeftButton, InformationRightButton, InformationTopline, InformationFormContainer, 
  InfoInputContainer, Col1, Col2, IFirstName, ILastName, IPhoneNumber, IEmail, ILocationContainer, 
  ILocationText, ILocation, IInputContainer, IInputText, ILocationButtonText, ILocationButton, ILocationRemove
} from './InformationElements';
//import emailjs from 'emailjs-com';
import "./Form.scss";
import butt from '../BookImg/InfoLocationButton.svg';
import butt2 from '../BookImg/InfoLocationRemoveButton.svg';
//import s1 from '../BookImg/InformationImg1.svg';
//import s2 from '../BookImg/InformationImg2.svg';
function Information({isOpen, toggle}) {
  //RIGHT SIDE
  const [locationList, setLocationList] = useState([{ location: "" }]);

  const handleLocationChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...locationList];
    list[index][name] = value;
    setLocationList(list);
  };

  const handleLocationRemove = (index) => {
    const list = [...locationList];
    list.splice(index, 1);
    setLocationList(list);
  };

  const handleLocationAdd = () => {
    setLocationList([...locationList, { location: "" }]);
  };


  //LEFT SIDE
  const initialValues = { fname: "", lname: "", phone: "", email: "", add1: "", add2: "", add3: "", add4: "", add5: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [name, setName] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
   
    
    setFormValues({ ...formValues, [name]: value });
  };

  const form = useRef();


/*

const sendEmail = (e) => {
 
  e.preventDefault();
  setFormErrors(validate(formValues));
  if (Object.keys(validate(formValues)).length === 0) {

 
  emailjs.sendForm('', '', form.current, '')
    .then((result) => {
        console.log(result.text);
        
   
    }, (error) => {
        console.log(error.text);
     });
    
    }
    setIsSubmit(true);
    setFormValues("")
    e.target.reset();
  }
*/
  const validate = (v) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!v.email) {
      errors.email = "Refresh to send another message";
    } else if (!regex.test(v.email)) {
      errors.email = "Refresh to send another message";
    }
    if (!v.name) {
      errors.name = "Name field can't be empty";
    }

    if (!v.address) {
      errors.address = "Address field can't be empty";
    }
    if (!v.city) {
      errors.city = "City field can't be empty";
    }
    if (!v.zip) {
      errors.zip = "Zipcode field can't be empty";
    }
    if (!v.phone) {
      errors.phone = "Phone field can't be empty";
    }
    if (!v.message) {
      errors.message = "Message field can't be empty";
    }

    return errors;
  };


  return (
<>

<InformationContainer>
  <InformationHeader>Choose which service best suits your needs to get the best price matching.</InformationHeader>
  <InformationTopline>Select from our affordable options to accomodate you.</InformationTopline>
  <InformationFormContainer>

      <InformationForm>
          <InfoInputContainer>
          
            <Col1>
            <IInputContainer>
                <IInputText>First Name</IInputText>
                <IFirstName onChange={handleChange} value={formValues.fname} id='fname' name='fname' type="text" placeholder="*First Name" required={true}/>
              </IInputContainer>

              <IInputContainer>
                <IInputText>Last Name</IInputText>
                <ILastName onChange={handleChange} value={formValues.lname} id='lname' name='lname' type="text" placeholder="*Last Name" required={true}/>
              </IInputContainer>

              <IInputContainer>
                <IInputText>Phone Number</IInputText>
                <IPhoneNumber onChange={handleChange} value={formValues.phone} id='phone' name='phone' type="text" placeholder="*Phone Number" required={true}/>
              </IInputContainer>

              <IInputContainer>
                <IInputText>Email Address</IInputText>
                <IEmail onChange={handleChange} value={formValues.email} id='email' name='email' type="text" placeholder="*Email Address" required={true}/>
              </IInputContainer>
            

            </Col1>
  

            <Col2>
      
             
            
                {locationList.map((singleLocation, index) => (
            <div key={index + 1} className="locations">
       
            <div >
            <ILocationContainer>
            <ILocationText>Location {index + 1}</ILocationText>
              <ILocation
                name="location"
                type="text"
                id="location"
                placeholder="*Location"
                type="text"
                id="location"
                value={singleLocation.location}
                onChange={(e) => handleLocationChange(e, index)}
                required
              />
                </ILocationContainer>
              {locationList.length - 1 === index && locationList.length < 5 && (
                <IButton>
                <ILocationButton  type="button"
                  onClick={handleLocationAdd}
                  className="add-btn" style = {{ backgroundImage: `url(${butt})`}}>
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
                  style = {{ backgroundImage: `url(${butt2})`}}
                >
                </ILocationRemove>
              )}
            </div>
          </div>
        ))}
            
            
         
            </Col2>

          </InfoInputContainer>
      <InformationButtonWrap>
        <InformationLeftButton>BACK</InformationLeftButton>
        <InformationRightButton>NEXT</InformationRightButton>
      </InformationButtonWrap>
      </InformationForm>
    </InformationFormContainer>
  </InformationContainer>
</>
  );
}
export default Information;