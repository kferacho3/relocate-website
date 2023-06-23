import React, { useState } from 'react';


//import insp from '../../images/inspection.svg'

import {
  Column1,
  Column2,
  ContactUsButton,
  ContactUsContainer,
  ContactUsRow,
  ContactUsWrapper,
  Heading,
  Img,
  ImgWrap,
  Subtitle,
  TextWrapper,
  TopLine
} from './ContactElements';
import PopUp from './ContactUsPopUp';
//import deco3 from './ContactUsImg/servDeco.svg';



                

const ContactHero = ({lightBg, id, imgStart, topLine, img, divBg, 
      logo, darkText, description, headline, alt, btnLabel, onClk}) => {
        const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <>
        <ContactUsContainer lightBg={lightBg} id={id} className='background2'>
        
  
        
            <ContactUsWrapper>
                <ContactUsRow imgStart={imgStart}>
     
                
                <Column1  >
              
                  <Heading>{headline}</Heading>
                  <TopLine>{topLine}</TopLine>
                  <TextWrapper>
                      
                      <Subtitle darkText={darkText} class='font2'>{description}</Subtitle> 
                  </TextWrapper>
                  
                  <ContactUsButton onClick={() => setButtonPopup({onClk})}>{btnLabel}</ContactUsButton>
               
                 
                    </Column1>


                    <Column2>
                      <ImgWrap>
                        <Img  src={img} alt={alt} />
                      </ImgWrap>
                    </Column2>
                    
                </ContactUsRow>
            </ContactUsWrapper>

            </ContactUsContainer>  
            <PopUp trigger ={buttonPopup} setTrigger = {setButtonPopup}>
  </PopUp>
             </>
      
  )
}

export default ContactHero;