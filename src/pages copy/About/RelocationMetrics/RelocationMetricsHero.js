import React, { useState } from 'react';


//import insp from '../../images/inspection.svg'

import {
    HeroColumn1,
    HeroColumn2,
    HeroHeading,
    HeroImg,
    HeroImgWrap,
    HeroSubtitle,
    HeroTextWrapper,
    RelocationMetricsHeroUsContainer,
    RelocationMetricsHeroUsRow,
    RelocationMetricsHeroUsWrapper
} from './RelocationMetricsElements';
//import deco3 from './RelocationMetricsHeroUsImg/servDeco.svg';



                

const RelocationMetricsHero = ({lightBg, id, imgStart, topLine, img, divBg, 
      logo, darkText, description, headline, alt, btnLabel, onClk}) => {
        const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <>
        <RelocationMetricsHeroUsContainer lightBg={lightBg} id={id} className='background2'>
        
  
        
            <RelocationMetricsHeroUsWrapper>
                <RelocationMetricsHeroUsRow imgStart={imgStart}>
     
                
                <HeroColumn1  >
              
                  <HeroHeading>{headline}</HeroHeading>
                  <HeroTextWrapper>
                      
                      <HeroSubtitle darkText={darkText} class='font2'>{description}</HeroSubtitle> 
                  </HeroTextWrapper>
                 
                 
                    </HeroColumn1>


                    <HeroColumn2>
                      <HeroImgWrap>
                        <HeroImg  src={img} alt={alt} />
                      </HeroImgWrap>
                    </HeroColumn2>
                    
                </RelocationMetricsHeroUsRow>
            </RelocationMetricsHeroUsWrapper>

            </RelocationMetricsHeroUsContainer>  
        
             </>
      
  )
}

export default RelocationMetricsHero;