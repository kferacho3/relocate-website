//import emailjs from 'emailjs-com';
import React, { useRef, useState } from 'react';
import main from '../ContactImg/exit.svg';
import {
  InputWrap,
  PButton,
  PEmail,
  PExit,
  PMessage,
  PName,
  PPhone,
  PReason,
  PopUpContentWrap,
  PopUpFormContainer,
  PopUpHeader,
  PopUpImg,
  PopUpImgWrap,
  PopUpSubtitle,
  PopUpTopLine,
  PopUpTopLine2
} from './ContactElements';
function PopUp(props) {
    const initialValues = { name: "",  phone: "", email: "", message: "" };
      const [formValues, setFormValues] = useState(initialValues);
      const [formErrors, setFormErrors] = useState({});
      const [isSubmit, setIsSubmit] = useState(false);
  
  
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };
  
      const form = useRef();
  
  
  
  
   const sendEmail = (e) => {
     
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
      /*
      if (Object.keys(validate(formValues)).length === 0) {
  
     
      emailjs.sendForm('gmail', '', form.current, '')
        .then((result) => {
            console.log(result.text);
       
        }, (error) => {
            console.log(error.text);
        });
    
      }*/
      setFormValues("")
      setIsSubmit(false);
      e.target.reset();
    }
    const validate = (v) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!v.name) {
          errors.name = "Name field can't be empty";
        }
        if (!v.email) {
          errors.email = "Email field can't be empty";
        } else if (!regex.test(v.email)) {
          errors.email = "Incorrect email";
        }
   
        if (!v.phone) {
          errors.phone = "Phone field can't be empty";
        }
        if (!v.message) {
          errors.message = "Message field can't be empty";
        }
    
        return errors;
      };
    return (props.trigger) ? (

                   <PopUpFormContainer ref={form} onSubmit={sendEmail}>


                          <PopUpContentWrap>
                            <PopUpImgWrap>
                              <PopUpImg src={'https://relocate-storage.s3.us-east-2.amazonaws.com/relocate-images/ContactPages/connectImg.svg'} />
                            </PopUpImgWrap>

                            <PopUpHeader>Connect With Us!</PopUpHeader>
                            <PopUpTopLine>Call: +1-(312)-933-4773</PopUpTopLine>
                            <PopUpTopLine2></PopUpTopLine2>
                            <PopUpSubtitle>We value your feedback and inquiries. Please utilize the form on this page to request a quote or contact us. We appreciate your interest and look forward to hearing from you. Thank you.</PopUpSubtitle>
                            
                          </PopUpContentWrap>


                          <PExit className='close-btn' onClick={() => props.setTrigger(false)}  style={{ backgroundImage:`url(${main})` }}></PExit>
                          <InputWrap>
                            <PName  onChange={handleChange} value={formValues.name} id='name' name='name' type="text" placeholder="*Name" required={true}/>
                            <PReason onChange={handleChange} value={formValues.reason} id='reason' name='reason' type="text" placeholder="*Reason" required={true}/>
                            <PPhone onChange={handleChange} value={formValues.phone} id='phone' name='phone' type="text" placeholder="*Phone" required={true}/>
                            <PEmail onChange={handleChange} value={formValues.email} id='email' name='email' type="text" placeholder="*Email" required={true}/>
                            <PMessage onChange={handleChange} value={formValues.message} id='message' name='message' type="text" placeholder="*Message" required={true}/>
                            <PButton>CONTACT US NOW →</PButton>
                          </InputWrap>
                          {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div style = {{marginLeft: `50%`, transform: `translateX(-50%)`, color: `green`, 
        fontSize: `4rem`, position: `absolute`, zIndex: `9999999`, background: `black`, 
        borderRadius: `5px`, borderColor: `black` }} className="ui message success">  Message Sent!  </div>
      ) : (
        <pre></pre>
      )}

</PopUpFormContainer>   
               
        
    ) : "";
}

export default PopUp;