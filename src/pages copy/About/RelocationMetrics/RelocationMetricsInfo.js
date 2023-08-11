import React, { useState } from 'react';


//import insp from '../../images/inspection.svg'

import {
    Column1,
    Column2,
    Heading,
    HeadingBg,
    Img,
    ImgBg,
    ImgWrap,
    RelocationMetricsInfoContainer,
    RelocationMetricsInfoRow,
    RelocationMetricsInfoWrapper,
    Subtitle
} from './RelocationMetricsElements.js';

//import deco3 from './RelocationMetricsInfoImg/servDeco.svg';

import headBg from './MetricsImg/headingBg.svg';

                

const RelocationMetricsInfo = ({lightBg, id, imgStart, topLine, img, divBg, bg,
      logo, darkText, description, description2, description3, headline, alt, btnLabel, onClk}) => {
        const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <>
        <RelocationMetricsInfoContainer lightBg={lightBg} id={id} className='background2'>
        
  
        
            <RelocationMetricsInfoWrapper>
                <RelocationMetricsInfoRow imgStart={imgStart}>
     
                
                <Column1  >
                        
                    <HeadingBg src={headBg} />
                    <Heading>{headline}</Heading>
                      <Subtitle darkText={darkText} class='font2'>{description}</Subtitle> 
                      <Subtitle darkText={darkText} class='font2'>{description2}</Subtitle> 
                      <Subtitle darkText={darkText} class='font2'>{description3}</Subtitle> 
              
                  
                 
                 
                    </Column1>


                    <Column2>

                        <ImgWrap>
                        <Img  src={img} alt={alt} />
                        </ImgWrap>


                    <ImgBg imgStart={imgStart} src={bg.default} />
                    </Column2>
                    
                </RelocationMetricsInfoRow>
            </RelocationMetricsInfoWrapper>

            </RelocationMetricsInfoContainer>  
          
             </>
      
  )
}

export default RelocationMetricsInfo;