import React, { useState } from 'react';


//import insp from '../../images/inspection.svg'

import {
  Column1,
  Column2,
  Heading,
  HeadingBg,
  Img,
  ImgWrap,
  MovePrepInfoContainer,
  MovePrepInfoRow,
  MovePrepInfoWrapper,
  Subtitle,
  TextWrapper
} from './MovePrepElements';

//import deco3 from './MovePrepInfoImg/servDeco.svg';

import headBg from '../ContactImg/headingBg.svg';

                

const MovePrepInfo = ({lightBg, id, imgStart, topLine, img, divBg, 
      logo, darkText, description, description2, description3, headline, alt, btnLabel, onClk}) => {
        const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <>
        <MovePrepInfoContainer lightBg={lightBg} id={id} className='background2'>
        
  
        
            <MovePrepInfoWrapper>
                <MovePrepInfoRow imgStart={imgStart}>
     
                
                <Column1  >
                  <TextWrapper>
                        
                    <HeadingBg src={headBg} />
                    <Heading>{headline}</Heading>
                      <Subtitle darkText={darkText} class='font2'>{description}</Subtitle> 
                      <Subtitle darkText={darkText} class='font2'>{description2}</Subtitle> 
                      <Subtitle darkText={darkText} class='font2'>{description3}</Subtitle> 
                  </TextWrapper>
                  
                 
                 
                    </Column1>


                    <Column2>
                      <ImgWrap>
                        <Img  src={img.default} alt={alt} />
                      </ImgWrap>
                    </Column2>
                    
                </MovePrepInfoRow>
            </MovePrepInfoWrapper>

            </MovePrepInfoContainer>  
          
             </>
      
  )
}

export default MovePrepInfo;