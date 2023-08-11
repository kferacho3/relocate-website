//import emailjs from 'emailjs-com';
import React, { useRef, useState } from 'react';
//import "./Apply.scss";
import {
  ApplyForm,
  ApplyFormButton,
  ApplyFormContainer,
  ApplyFormError,
  ApplyFormFieldSet,
  ApplyFormInput,
  ApplyFormTextArea,
  initialState
} from "./ApplyFormElements";





function PackerForm() {


    
 
// This function validates emails

const initialValues = { name: "", email: "", message: "", error: "" };
const [formValues, setFormValues] = useState(initialValues);
const [state, setState] = useState(initialState);
const [error, setError] = useState('');
const [formErrors, setFormErrors] = useState({});
const [isSubmit, setIsSubmit] = useState(false);
const [name, setName] = useState("");

const handleInput = (e) => {
  const { name, value } = e.target;
 
  
  setState({ ...state, [name]: value });
};

const form = useRef();


/*
    const sendEmail = (e) => {
   
      e.preventDefault();
      setFormErrors(validate(state));
      if (Object.keys(validate(state)).length === 0) {
  
     
      emailjs.sendForm('gmail', '', form.current, '')
        .then((result) => {
            console.log(result.text);
            
       
        }, (error) => {
            console.log(error.text);
         });
        
        }
      
        setState("")
        setIsSubmit(true);
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
    
        if (!v.message) {
          errors.message = "Message field can't be empty";
        }
    
        return errors;
      };
  
    return (
      <>
        <ApplyFormContainer id = {'/packerForm'}>
        
        <div className='bit5'/>
          <ApplyForm ref = {form}  /*onSubmit={sendEmail}*/>
            <h2>Contact Form</h2>
            <label htmlFor="name">Name</label>
            <ApplyFormInput
              type="text"
              id='name'
              name="name"
              value={state.name}
              onChange={handleInput}
              required={true}
            />
            <label htmlFor="email">Email</label>
            <ApplyFormInput
              type="email"
              id='email'
              name="email"
              value={state.email}
              onChange={handleInput}
              required={true}
            />
                  <ApplyFormFieldSet>
              <legend>What kind of service do you need?</legend>
              <label>
                <input
                  type="radio"
                  value="Website Development"
                  name="service"
                  id='service'
                  checked={state.service === 'Website Development'}
                  onChange={handleInput}
                />
                Website Development
              </label>
              <label>
                <input
                  type="radio"
                  value="Web/App Design"
                  name="service"
                  id='service'
                  checked={state.service === 'Web/App Design'}
                  onChange={handleInput}
                />
                Website/Application Design
              </label>
              <label>
                <input
                  type="radio"
                  value="3D Model"
                  name="service"
                  id='service'
                  checked={state.service === '3D Model'}
                  onChange={handleInput}
                />
                3D Model
              </label>
              <label>
                <input
                  type="radio"
                  value="Svg Graphics"
                  name="service"
                  id='service'
                  checked={state.service === 'Svg Graphics'}
                  onChange={handleInput}
                />
                Svg Graphics
              </label>
              <label>
                <input
                  type="radio"
                  value="Audio Engineering"
                  name="service"
                  id='service'
                  checked={state.service === 'Audio Engineering'}
                  onChange={handleInput}
                />
                Audio Engineering 
              </label>
              <label>
                <input
                  type="radio"
                  value="AV Synchronization"
                  name="service"
                  id='service'
                  checked={state.service === 'AV Synchronization'}
                  onChange={handleInput}
                />
                AV Synchronization
              </label>
            </ApplyFormFieldSet>
            <ApplyFormFieldSet>
              <legend>What kind of website do you need?</legend>
              <label>
                <input
                  type="radio"
                  value="Personal"
                  name="website"
                  id='website'
                  checked={state.website === 'Personal'}
                  onChange={handleInput}
                />
                Personal
              </label>
              <label>
                <input
                  type="radio"
                  value="NFT"
                  name="website"
                  id='website'
                  checked={state.website === 'NFT'}
                  onChange={handleInput}
                />
                NFT
              </label>
              <label>
                <input
                  type="radio"
                  value="Landing Page"
                  name="website"
                  id='website'
                  checked={state.website === 'Landing Page'}
                  onChange={handleInput}
                />
                Landing Page
              </label>
              <label>
                <input
                  type="radio"
                  value="Other"
                  name="website"
                  id='website'
                  checked={state.website === 'Other'}
                  onChange={handleInput}
                />
                Other (Specify)
              </label>
              <label>
                <input
                  type="radio"
                  value="Other"
                  name="website"
                  id='website'
                  checked={state.website === 'Other'}
                  onChange={handleInput}
                />
                None
              </label>
            </ApplyFormFieldSet>
            <label htmlFor="message">Message</label>
            <ApplyFormTextArea
              id='message'
              name="message"
              value={state.message}
              onChange={handleInput}
              required={true}
            />
            {error && (
              <ApplyFormError>
                <p>{error}</p>
              </ApplyFormError>
            )}
            <ApplyFormButton type="submit">Send Message</ApplyFormButton>
          </ApplyForm>

        </ApplyFormContainer>
      </>
    )
  }
  
  export default PackerForm;