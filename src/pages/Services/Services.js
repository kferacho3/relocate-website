import React from 'react';
import { BottomToTop} from '../../components/animations/animations';
import "./services.scss";

//import insp from '../../images/inspection.svg'

import { 
  ServicesContainer,
  ServicesWrapper,
  ServicesRow, 
  ServicesLogo,
  ServicesLogoWrap,
  ServicesDeco1,
  ServicesDeco2,
  ServicesButton,
  ServicesTextContainer,
  Column1, 
  Column2, 
  TextWrapper, 
  DivBg,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  Img2
  
} from './ServicesElements';
import "./services.scss";
import { motion} from 'framer-motion';
import deco1 from '../../images/deco1.svg';
import deco2 from '../../images/deco2.svg';
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
              
                <DivBg divStart={divStart} src={divBg}/> 

                <ServicesTextContainer>
                  <ServicesDeco1 src={deco1}/>
                  <ServicesLogoWrap>
                      <ServicesLogo src={logo}/>
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





