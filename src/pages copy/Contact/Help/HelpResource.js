import React from 'react';


//import insp from '../../images/inspection.svg'

import {
    HelpResourceButton,
    HelpResourceColumn1,
    HelpResourceColumn2,
    HelpResourceColumn3,
    HelpResourceContainer,
    HelpResourceHeading,
    HelpResourceImg,
    HelpResourceImgWrap,
    HelpResourceRow,
    HelpResourceSubtitle,
    HelpResourceTextWrapper,
    HelpResourceWrapper
} from './HelpElements';
//import deco3 from './HelpResourceImg/servDeco.svg';



                

const HelpResource = ({lightBg, id, imgStart, topLine, img, img2, img3, divBg, btnCol,
      logo, darkText, description, description2, description3, headline, headline2, headline3, alt, btnLabel, onClk}) => {
  return (
    <>
        <HelpResourceContainer lightBg={lightBg} id={id} className='background2'>
        
  
        
            <HelpResourceWrapper>
                <HelpResourceRow imgStart={imgStart}>
     
                
                <HelpResourceColumn1  >
                    <HelpResourceImgWrap>
                        <HelpResourceImg src={img.default} alt={alt} />
                    </HelpResourceImgWrap>
                    <HelpResourceTextWrapper>
                        <HelpResourceHeading>{headline}</HelpResourceHeading>
                        <HelpResourceSubtitle darkText={darkText} class='font2'>{description}</HelpResourceSubtitle> 
                    </HelpResourceTextWrapper>
                    <HelpResourceButton btnCol={btnCol}>{btnLabel}</HelpResourceButton>
                 </HelpResourceColumn1>


                 <HelpResourceColumn2  >
                    <HelpResourceImgWrap>
                        <HelpResourceImg src={img2.default} alt={alt} />
                    </HelpResourceImgWrap>
                    <HelpResourceTextWrapper>
                        <HelpResourceHeading>{headline2}</HelpResourceHeading>
                        <HelpResourceSubtitle darkText={darkText} class='font2'>{description2}</HelpResourceSubtitle> 
                    </HelpResourceTextWrapper>
                    <HelpResourceButton btnCol={btnCol}>{btnLabel}</HelpResourceButton>
                 </HelpResourceColumn2>

                 <HelpResourceColumn3  >
                    <HelpResourceImgWrap>
                        <HelpResourceImg src={img3.default} alt={alt} />
                    </HelpResourceImgWrap> 
                    <HelpResourceTextWrapper>
                        <HelpResourceHeading>{headline3}</HelpResourceHeading>
                        <HelpResourceSubtitle darkText={darkText} class='font2'>{description3}</HelpResourceSubtitle> 
                    </HelpResourceTextWrapper>
                    <HelpResourceButton btnCol={btnCol}>{btnLabel}</HelpResourceButton>
                 </HelpResourceColumn3>
                    
                </HelpResourceRow>
            </HelpResourceWrapper>

            </HelpResourceContainer>  
       
             </>
      
  )
}

export default HelpResource;