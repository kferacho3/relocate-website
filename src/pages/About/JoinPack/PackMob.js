import React from 'react';


//import insp from '../../images/inspection.svg'

import {
    Column1,
    Column2,
    Heading,
    Img,
    ImgWrap,
    PackMobContainer,
    PackRow,
    PackWrapper,
    Subtitle,
    TextWrapper,
    TopLine
} from './PackMobElements';


//import deco3 from './PackImg/servDeco.svg';



                
function NewlineText(props) {
  const text = props.text;
  return text.split('\n').map(str => <p>{str}</p>);
}
const PackMob = ({lightBg, id, imgStart, topLine, img, divBg, logo, darkText, description, description2, description3, headline, alt, lxw, marg}) => {

  return (
      
        <PackMobContainer lightBg={lightBg} id={id} className='background2'>
        
  
        
            <PackWrapper>
                <PackRow imgStart={imgStart}>
     
                
                <Column1  >
              
                  <Heading>{headline}</Heading>
                  <TopLine>{topLine}</TopLine>
                  <TextWrapper>
                      
                      <Subtitle darkText={darkText} class='font2'>{description}</Subtitle> 
                      <Subtitle darkText={darkText} class='font2'>{description2}</Subtitle> 
                      <Subtitle darkText={darkText} class='font2'>{description3}</Subtitle> 
                  </TextWrapper>
                  
               
                 
                    </Column1>


                    <Column2>
                      <ImgWrap lxw={lxw} >
                        <Img marg={marg} src={img} alt={alt} />
                      </ImgWrap>
                    </Column2>
                    
                </PackRow>
            </PackWrapper>

            </PackMobContainer>  
            
      
  )
}

export default PackMob