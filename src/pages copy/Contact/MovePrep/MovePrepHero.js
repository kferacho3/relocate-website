import React from 'react';


//import insp from '../../images/inspection.svg'

import {
  MovePrepColumn1,
  MovePrepColumn2,
  MovePrepHeading,
  MovePrepHeroButton,
  MovePrepHeroContainer,
  MovePrepHeroRow,
  MovePrepHeroWrapper,
  MovePrepImg,
  MovePrepImgWrap,
  MovePrepSubtitle,
  MovePrepTextWrapper,
  MovePrepTopLine
} from './MovePrepElements';
//import deco3 from './MovePrepHeroImg/servDeco.svg';



                

const MovePrepHero = ({lightBg, id, imgStart, topLine, img, divBg, 
      logo, darkText, description, headline, alt, btnLabel, onClk}) => {
        
  return (
    <>
        <MovePrepHeroContainer lightBg={lightBg} id={id} className='background2'>
        
  
        
            <MovePrepHeroWrapper>
                <MovePrepHeroRow imgStart={imgStart}>
     
                
                <MovePrepColumn1  >
              
                  <MovePrepHeading>{headline}</MovePrepHeading>
                  <MovePrepTopLine>{topLine}</MovePrepTopLine>
                  <MovePrepTextWrapper>
                      
                      <MovePrepSubtitle darkText={darkText} class='font2'>{description}</MovePrepSubtitle> 
                  </MovePrepTextWrapper>
                  
                  <MovePrepHeroButton >{btnLabel}</MovePrepHeroButton>
               
                 
                    </MovePrepColumn1>


                    <MovePrepColumn2>
                      <MovePrepImgWrap>
                        <MovePrepImg  src={img} alt={alt} />
                      </MovePrepImgWrap>
                    </MovePrepColumn2>
                    
                </MovePrepHeroRow>
            </MovePrepHeroWrapper>

            </MovePrepHeroContainer>  
        
             </>
      
  )
}

export default MovePrepHero;