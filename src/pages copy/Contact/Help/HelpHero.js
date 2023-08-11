import React, { useState } from 'react';


//import insp from '../../images/inspection.svg'

import {
    HelpHeroButton,
    HelpHeroColumn1,
    HelpHeroColumn2,
    HelpHeroContainer,
    HelpHeroHeading,
    HelpHeroImg,
    HelpHeroImgWrap,
    HelpHeroRow,
    HelpHeroSubtitle,
    HelpHeroTextWrapper,
    HelpHeroTopLine,
    HelpHeroWrapper
} from './HelpElements';
//import deco3 from './HelpHeroImg/servDeco.svg';



                

const HelpHero = ({lightBg, id, imgStart, topLine, img, divBg, 
      logo, darkText, description, headline, alt, btnLabel, onClk}) => {
        const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <>
        <HelpHeroContainer lightBg={lightBg} id={id} className='background2'>
        
  
        
            <HelpHeroWrapper>
                <HelpHeroRow imgStart={imgStart}>
     
                
                <HelpHeroColumn1  >
              
                  <HelpHeroHeading>{headline}</HelpHeroHeading>
                  <HelpHeroTopLine>{topLine}</HelpHeroTopLine>
                  <HelpHeroTextWrapper>
                      
                      <HelpHeroSubtitle darkText={darkText} class='font2'>{description}</HelpHeroSubtitle> 
                  </HelpHeroTextWrapper>
                  
                  <HelpHeroButton>{btnLabel}</HelpHeroButton>
               
                 
                    </HelpHeroColumn1>


                    <HelpHeroColumn2>
                      <HelpHeroImgWrap>
                        <HelpHeroImg  src={img} alt={alt} />
                      </HelpHeroImgWrap>
                    </HelpHeroColumn2>
                    
                </HelpHeroRow>
            </HelpHeroWrapper>

            </HelpHeroContainer>  
             </>
      
  )
}

export default HelpHero;