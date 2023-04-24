import React, { useRef, useState } from 'react';


//import insp from '../../images/inspection.svg'


import {
  ApplyCity,
  ApplyCompany, ApplyDOT,
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
  ApplyPageLogo,
  ApplyPageLogoWrap,
  ApplyPageRow,
  ApplyPageTextContainer,
  ApplyPageWrapper,
  ApplyPhone,
  ApplyRef, ApplyTruckQuantity,
  Column1,
  Column2,
  Heading,
  Subtitle,
  TextWrapper
} from './ApplyPageElements';
//import deco3 from './ApplyPageImg/servDeco.svg';



                

const ApplyPage4 = ({pageBg, id, imgStart, divStart, deco1, deco2, img, divBg, logo, darkText, description, headline, alt}) => {
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
                <ApplyPageRow imgStart={imgStart}>
                    <Column1  >
                      <ApplyPageTextContainer style={{ background:`${divBg}`}}>
                        <ApplyPageDeco1 src={deco1.default}/>
                        <ApplyPageLogoWrap>
                            <ApplyPageLogo src={logo.default}/>
                        </ApplyPageLogoWrap>
                        <ApplyPageDeco2 src={deco2.default}/>
                        <Heading>{headline}</Heading>
                        <TextWrapper>
                            <Subtitle darkText={darkText} class='font2'>{description}</Subtitle> 
                        </TextWrapper>
                        <ApplyPageButton>Apply Now!</ApplyPageButton>
                      </ApplyPageTextContainer>
                 
                    </Column1>


                    <Column2>
                        <ApplyPageFormContainer ref={form} >{//onSubmit={sendEmail}
                        }
                
        
                            <ApplyPageFormHeader>Become a Driver for Relocate!</ApplyPageFormHeader>
                                <div className="field">
                                    <ApplyCompany onChange={handleChange} value={formValues.company} id='name' name='name' type="text" placeholder="*Name" required={true}/>
                                </div>
                            

                                <div className="field">
                                    <ApplyDOT onChange={handleChange} value={formValues.dot} id='address' name='address'  type="text" placeholder="*Address" required={true}/>
                                </div>
                            

                                <div className="field">
                                    <ApplyCity onChange={handleChange} value={formValues.city} id='city' name='city' type="text" placeholder="*City" required={true}/>
                                </div>

                            
                                <div className="field">
                                    <ApplyRef  onChange={handleChange} value={formValues.ref} id='name' name='zip' type="text" placeholder="*Zip" required={true}/>
                                </div>

                            
                                <div className="field">
                                    <ApplyTruckQuantity onChange={handleChange} value={formValues.truckNumber} id='phone' name='phone' type="text" placeholder="*Phone" required={true}/>
                                </div>

                                <div className="field">
                                    <ApplyFirstName onChange={handleChange} value={formValues.firstName} id='phone' name='phone' type="text" placeholder="*Phone" required={true}/>
                                </div>

                                <div className="field">
                                    <ApplyLastName onChange={handleChange} value={formValues.lastName} id='phone' name='phone' type="text" placeholder="*Phone" required={true}/>
                                </div>


                                <div className="field">
                                    <ApplyPhone onChange={handleChange} value={formValues.phone} id='phone' name='phone' type="text" placeholder="*Phone" required={true}/>
                                </div>


                                <div className="field">
                                    <ApplyEmail onChange={handleChange} value={formValues.email} id='email' name='email' type="text" placeholder="*Email" required={true}/>
                                </div>
                               {// <ErrL for="email">{formErrors.email}</ErrL>}

                            
                               }
                            <ApplyFormBtn>SEND</ApplyFormBtn>

                        </ApplyPageFormContainer>
                    </Column2>
                    
                </ApplyPageRow>
            </ApplyPageWrapper>
        </ApplyPageContainer>  
            
      
  )
}

export default ApplyPage4