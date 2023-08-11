import React, { useRef, useState } from 'react';


//import insp from '../../images/inspection.svg'


import {
  ApplyCity,
  ApplyDOT,
  ApplyEmail,
  ApplyFirstName,
  ApplyFormBtn,
  ApplyLastName,
  ApplyPageButton,
  ApplyPageContainer,
  ApplyPageDeco1,
  ApplyPageDeco2,
  ApplyPageFormContainer,
  ApplyPageFormHeader,
  ApplyPageFormInputWrap,
  ApplyPageLogo,
  ApplyPageLogoWrap,
  ApplyPageRow4,
  ApplyPageTextContainer,
  ApplyPageWrapper,
  ApplyPhone,
  ApplyTruckQuantity,
  Column1b,
  Column2b,
  Heading,
  Subtitle4,
  TextWrapper
} from './ApplyPageElements';
//import deco3 from './ApplyPageImg/servDeco.svg';
import { PersonFill } from '@styled-icons/bootstrap/PersonFill';
import { PhoneFill } from '@styled-icons/bootstrap/PhoneFill';
import { Location } from '@styled-icons/entypo/Location';
import { Email } from '@styled-icons/evaicons-solid/Email';
import { TruckFast } from '@styled-icons/fa-solid/TruckFast';
import { GridDots } from '@styled-icons/fluentui-system-regular/GridDots';
import { HomeWork } from '@styled-icons/material-outlined/HomeWork';
import styled from 'styled-components';

           
const Company = styled(HomeWork)`
height: 24px;
width: 24px;
position:relative;top:0;left:0;
font-size: 24px;
z-index:200;
`
const McDot = styled(GridDots)`
height: 24px;
width: 24px;
position:relative;top:0;left:0;
font-size: 24px;
z-index:200;
top: 70px;
left: 320px;
`
const CityState = styled(Location)`
height: 24px;
width: 24px;
position:relative;top:0;left:0;
font-size: 24px;
z-index:200;
top: 117.5px;
left: 320px;
`
const TruckAmount = styled(TruckFast)`
height: 24px;
width: 24px;
position:relative;top:0;left:0;
font-size: 24px;
z-index:200;
top: 47.5px;
left: 50px;
`
const FirstName = styled(PersonFill)`
height: 24px;
width: 24px;
position:relative;top:0;left:0;
font-size: 24px;
z-index:200;
top: 25px;
left: 45px;
`
const LastName = styled(PersonFill)`
height: 24px;
width: 24px;
position:relative;top:0;left:0;
font-size: 24px;
z-index:200;
top: 0px;
left: 320px;
`
const Phone = styled(PhoneFill)`
height: 24px;
width: 24px;
position:relative;top:0;left:0;
font-size: 24px;
z-index:200;
top: 95px;
left: 50px;
`

const EmailAdd = styled(Email)`
height: 24px;
width: 24px;
position:relative;top:0;left:0;
font-size: 24px;
z-index:200;
top: 175px;
left: 52px;
`
const ApplyPage4 = ({pageBg, id, imgStart, divStart, deco1, deco2, img, divBg, logo, darkText, description, headline, alt, too}) => {
// This function validates emails

const initialValues = {  company: "", dot: "", city: "", ref: "", truckNumber: "", firstName: "", lastName: "", email: "",phone: "", message: "", error: "" };
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


emailjs.sendForm('gmail', '', form.current, '')
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

const validate = (v) => {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!v.email) {
    errors.email = "Refresh to send another message";
  } else if (!regex.test(v.email)) {
    errors.email = "Refresh to send another message";
  }
  if (!v.company) {
    errors.company = "Name field can't be empty";
  }

  if (!v.dot) {
    errors.dot = "Address field can't be empty";
  }
  if (!v.city) {
    errors.city = "City field can't be empty";
  }
  if (!v.truckNumber) {
    errors.truckNumber = "Zipcode field can't be empty";
  }
  if (!v.ref) {
    errors.ref = "Phone field can't be empty";
  }
  if (!v.firstName) {
    errors.firstName = "First name field can't be empty";
  }
  if (!v.lastName) {
    errors.lastName = "Last name field can't be empty";
  }
  if (!v.phone) {
    errors.phone = "Phone field can't be empty";
  }
  if (!v.email) {
    errors.email = "Email field can't be empty";
  }

  return errors;
};

*/
  return (
      
        <ApplyPageContainer style={{ background:`${pageBg}`}}  id={id} className='background2'>
        
  
        
            <ApplyPageWrapper>
                <ApplyPageRow4 imgStart={imgStart}>
                    <Column1b  >
                      <ApplyPageTextContainer style={{ background:`${divBg}`}}>
                        <ApplyPageDeco1 src={deco1.default}/>
                        <ApplyPageLogoWrap>
                            <ApplyPageLogo src={logo.default}/>
                        </ApplyPageLogoWrap>
                        <ApplyPageDeco2 src={deco2.default}/>
                        <Heading>{headline}</Heading>
                        <TextWrapper>
                            <Subtitle4 darkText={darkText} class='font2'>{description}</Subtitle4> 
                        </TextWrapper>
                        <ApplyPageButton to={too}
                            
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact={true}
                            offset={-80}>Apply Now!</ApplyPageButton>
                      </ApplyPageTextContainer>
                 
                    </Column1b>


                    <Column2b>
                        <ApplyPageFormContainer ref={form} >{//onSubmit={sendEmail}
                        }
                
        
                            <ApplyPageFormHeader>Become a Driver for Relocate!</ApplyPageFormHeader>
                                <ApplyPageFormInputWrap>
                                <div className="field">
                                <FirstName/>
                                    <ApplyFirstName className = "fontAwesome"  onChange={handleChange} value={formValues.firstName} id='firstName' name='firstName' type="text" placeholder="*First Name" required={true}/>
                                </div>
                            
                                <div className="field">
                                <LastName/>

                                    <ApplyLastName className = "fontAwesome"  onChange={handleChange} value={formValues.lastName} id='lastName' name='lastName'  type="text" placeholder="*Last Name" required={true}/>
                                </div>
          
                                <div className="field">
                                <McDot/>
                                    <ApplyDOT className = "fontAwesome"   onChange={handleChange} value={formValues.dot} id='name' name='dot' type="text" placeholder="*Dot Number" required={true}/>
                                </div>

                            
                                <div className="field">
                                <TruckAmount/>
                                    <ApplyTruckQuantity className = "fontAwesome"  onChange={handleChange} value={formValues.truckNumber} id='truckNumber' name='truckNumber' type="text" placeholder="*Truck Amount" required={true}/>
                                </div>

                                <div className="field">
                                <CityState/>
                                    <ApplyCity className = "fontAwesome"  onChange={handleChange} value={formValues.city} id='city' name='city' type="text" placeholder="*City / State" required={true}/>
                                </div>

                                <div className="field">
                               <Phone/>
                                    <ApplyPhone className = "fontAwesome" onChange={handleChange} value={formValues.phone} id='phone' name='phone' type="text" placeholder="*Phone" required={true}/>
                                </div>


                                <div className="field">
                                <EmailAdd/>
                                    <ApplyEmail className = "fontAwesome"  onChange={handleChange} value={formValues.email} id='email' name='email' type="text" placeholder="*Email" required={true}/>
                                </div>
                               {// <ErrL for="email">{formErrors.email}</ErrL>}

                            
                               }
                            <ApplyFormBtn>SEND</ApplyFormBtn>
                            </ApplyPageFormInputWrap>

                        </ApplyPageFormContainer>
                    </Column2b>
                    
                </ApplyPageRow4>
            </ApplyPageWrapper>
        </ApplyPageContainer>  
            
      
  )
}

export default ApplyPage4