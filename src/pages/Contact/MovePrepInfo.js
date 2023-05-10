import React, { useState } from 'react';


//import insp from '../../images/inspection.svg'

import {
    Column1,
    Column2,
    Heading,
    Img,
    ImgWrap,
    MovePrepInfoButton,
    MovePrepInfoContainer,
    MovePrepInfoRow,
    MovePrepInfoWrapper,
    Subtitle,
    TextWrapper,
    TopLine
} from './ContactElements';

//import deco3 from './MovePrepInfoImg/servDeco.svg';



                

const ContactHero = ({lightBg, id, imgStart, topLine, img, divBg, 
      logo, darkText, description, headline, alt, btnLabel, onClk}) => {
        const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <>
        <MovePrepInfoContainer lightBg={lightBg} id={id} className='background2'>
        
  
        
            <MovePrepInfoWrapper>
                <MovePrepInfoRow imgStart={imgStart}>
     
                
                <Column1  >
              
                  <Heading>{headline}</Heading>
                  <TopLine>{topLine}</TopLine>
                  <TextWrapper>
                      
                      <Subtitle darkText={darkText} class='font2'>{description}</Subtitle> 
                  </TextWrapper>
                  
                  <MovePrepInfoButton onClick={() => setButtonPopup({onClk})}>{btnLabel}</MovePrepInfoButton>
               
                 
                    </Column1>


                    <Column2>
                      <ImgWrap>
                        <Img  src={img} alt={alt} />
                      </ImgWrap>
                    </Column2>
                    
                </MovePrepInfoRow>
            </MovePrepInfoWrapper>

            </MovePrepInfoContainer>  
          
             </>
      
  )
}

export default ContactHero;