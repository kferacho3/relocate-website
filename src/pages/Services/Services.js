import React from 'react';
import "./services.scss";

//import insp from '../../images/inspection.svg'

import deco1 from '../../images/deco1.svg';
import deco2 from '../../images/deco2.svg';
import {
  Column1,
  Column2,
  DivBg,
  Heading,
  Img,
  ImgWrap,
  ServicesButton,
  ServicesContainer,
  ServicesDeco1,
  ServicesDeco2,
  ServicesLogo,
  ServicesLogoWrap,
  ServicesRow,
  ServicesTextContainer,
  ServicesWrapper,
  Subtitle,
  TextWrapper
} from './ServicesElements';
import "./services.scss";
//import deco3 from './ServicesImg/servDeco.svg';



                
function NewlineText(props) {
  const text = props.text;
  return text.split('\n').map(str => <p>{str}</p>);
}
const Services = ({lightBg, id, imgStart, divStart, img, divBg, logo, darkText, description, headline, alt}) => {

  return (
      
        <ServicesContainer lightBg={lightBg} id={id} className='background2'>
        
  
        
            <ServicesWrapper>
                <ServicesRow imgStart={imgStart}>
     
                
                <Column1  >
              
                <DivBg divStart={divStart} src={divBg.default}/> 

                <ServicesTextContainer>
                  <ServicesDeco1 src={deco1}/>
                  <ServicesLogoWrap>
                      <ServicesLogo src={logo.default}/>
                  </ServicesLogoWrap>
                  <ServicesDeco2 src={deco2}/>
                  <Heading>{headline}</Heading>
                  <TextWrapper>
                      
                      <Subtitle darkText={darkText} class='font2'><NewlineText text ={description}/></Subtitle> 
                  </TextWrapper>
                  
                  <ServicesButton>Apply Now!</ServicesButton>
                </ServicesTextContainer>
                 
                    </Column1>


                    <Column2>
                      <ImgWrap>
                        <Img  src={img} alt={alt} />
                      </ImgWrap>
                    </Column2>
                    
                </ServicesRow>
            </ServicesWrapper>

            </ServicesContainer>  
            
      
  )
}

export default Services





