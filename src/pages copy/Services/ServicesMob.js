import React from 'react';
import "./services.scss";

//import insp from '../../images/inspection.svg'

import {
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrap,
  ServicesMobContainer,
  ServicesRow,
  ServicesWrapper,
  Subtitle,
  TextWrapper,
  TopLine
} from './ServicesMobElements';
import "./services.scss";

//import deco3 from './ServicesImg/servDeco.svg';



                
function NewlineText(props) {
  const text = props.text;
  return text.split('\n').map(str => <p>{str}</p>);
}
const ServicesMob = ({lightBg, id, imgStart, topLine, img, divBg, logo, darkText, description, description2, description3, headline, alt, lxw, marg}) => {

  return (
      
        <ServicesMobContainer lightBg={lightBg} id={id} className='background2'>
        
  
        
            <ServicesWrapper>
                <ServicesRow imgStart={imgStart}>
     
                
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
                      <ImgWrap lxw={lxw}>
                        <Img marg={marg} src={img} alt={alt} />
                      </ImgWrap>
                    </Column2>
                    
                </ServicesRow>
            </ServicesWrapper>

            </ServicesMobContainer>  
            
      
  )
}

export default ServicesMob