import React, { useEffect, useState } from 'react';

//import insp from '../../images/inspection.svg'

import {
  HelpHeroButton,
  HelpHeroButtonWrap,
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
        const [scrollNav, setScrollNav] = useState(false)

        const changeNav = ()=> {
          if(window.scrollY >= 10) {
              setScrollNav(true)
          } else {
              setScrollNav(false)
          }
      }
  
      useEffect(() => {
          window.addEventListener('scroll', changeNav)
      }, [])
  
        return (
    <>
        <HelpHeroContainer scrollNav={scrollNav} lightBg={lightBg} id={id} className='background2'>
        
  
        
            <HelpHeroWrapper>
                <HelpHeroRow imgStart={imgStart}>
     
                
                <HelpHeroColumn1  >
              
                  <HelpHeroHeading>{headline}</HelpHeroHeading>
                  <HelpHeroTopLine>{topLine}</HelpHeroTopLine>
                  <HelpHeroTextWrapper>
                      
                      <HelpHeroSubtitle darkText={darkText} class='font2'>{description}</HelpHeroSubtitle> 
                  </HelpHeroTextWrapper>
                  <HelpHeroButtonWrap to='helpQuestions' smooth={true} duration={500} spy={true} exact='true' offset={500}>
                  <HelpHeroButton  >{btnLabel}</HelpHeroButton>
                  </HelpHeroButtonWrap>
                 
                    </HelpHeroColumn1>


                    <HelpHeroColumn2 id='helpQuestions'>
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