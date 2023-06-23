import React, { useState } from 'react';


//import insp from '../../images/inspection.svg'

import {
  Logo,
  MovePrepInfoContainer,
  MovePrepTipLogoWrap,
  MovePrepTipsHeading,
  MovePrepTipsRow,
  MovePrepTipsSubtitle,
  MovePrepTipsWrapper,
  TipsColumn1,
  TipsColumn2,
  TipsColumn3,
  TipsImg,
  TipsImgWrap,
  TipsTextWrapper
} from './MovePrepElements';

//import deco3 from './MovePrepInfoImg/servDeco.svg';



                

const MovePrepTips = ({lightBg, id, imgStart, topLine, img, img2, img3, divBg, headBg, logo, logo2, logo3, trans,
      darkText, description, description2, description3, headline, headline2, headline3, alt, btnLabel, onClk}) => {
        const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <>
        <MovePrepInfoContainer lightBg={lightBg} id={id} className='background2'>
        
    
          
              <MovePrepTipsWrapper>
                  <MovePrepTipsRow imgStart={imgStart}>
      
                  
                  <TipsColumn1  >
                    <TipsImgWrap>
                      <TipsImg  src={img} alt={alt} />
                    
                      <TipsTextWrapper trans= {trans}>
                          <MovePrepTipLogoWrap>
                              <Logo src={logo.default} />
                          </MovePrepTipLogoWrap>
                          <MovePrepTipsHeading >{headline}</MovePrepTipsHeading>
                          <MovePrepTipsSubtitle darkText={darkText} class='font2'>{description}</MovePrepTipsSubtitle> 
                      </TipsTextWrapper>
                    </TipsImgWrap>
                  </TipsColumn1>


                  <TipsColumn2  >
                    <TipsImgWrap>
                      <TipsImg  src={img2} alt={alt} />
                      <TipsTextWrapper trans= {trans}>
                          <MovePrepTipLogoWrap>
                            <Logo src={logo2.default} />
                          </MovePrepTipLogoWrap>
                          <MovePrepTipsHeading >{headline2}</MovePrepTipsHeading>
                          <MovePrepTipsSubtitle darkText={darkText} class='font2'>{description2}</MovePrepTipsSubtitle> 
                      </TipsTextWrapper>
                    </TipsImgWrap>
                  </TipsColumn2>

                  <TipsColumn3  >
                    <TipsImgWrap>
                      <TipsImg  src={img3} alt={alt} />
                    
                      <TipsTextWrapper trans= {trans}>
                          <MovePrepTipLogoWrap>
                            <Logo src={logo3.default} />
                          </MovePrepTipLogoWrap>
                          <MovePrepTipsHeading >{headline3}</MovePrepTipsHeading>
                          <MovePrepTipsSubtitle  darkText={darkText} class='font2'>{description3}</MovePrepTipsSubtitle> 
                      </TipsTextWrapper>
                    </TipsImgWrap>
                  </TipsColumn3>
                      
                  </MovePrepTipsRow>
              </MovePrepTipsWrapper>

          </MovePrepInfoContainer>  
          
      </>
      
  )
}

export default MovePrepTips;