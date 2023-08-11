import React from 'react';
import "./services.scss";

//import insp from '../../images/inspection.svg'

import {
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrap,
  ServicesHeroButton,
  ServicesHeroContainer,
  ServicesRow,
  ServicesWrapper,
  Subtitle,
  TextWrapper,
  TopLine
} from './ServicesHeroElements';
import "./services.scss";

//import deco3 from './ServicesImg/servDeco.svg';



                
function NewlineText(props) {
  const text = props.text;
  return text.split('\n').map(str => <p>{str}</p>);
}
const ServicesHero = ({lightBg, id, imgStart, topLine, img, divBg, logo, darkText, description, headline, alt}) => {

  return (
      
        <ServicesHeroContainer lightBg={lightBg} id={id} className='background2'>
        
  
        
            <ServicesWrapper>
                <ServicesRow imgStart={imgStart}>
     
                
                <Column1  >
              
                  <Heading>{headline}</Heading>
                  <TopLine>{topLine}</TopLine>
                  <TextWrapper>
                      
                      <Subtitle darkText={darkText} class='font2'><NewlineText text ={description}/></Subtitle> 
                  </TextWrapper>
                  
                  <ServicesHeroButton>Check Expenses</ServicesHeroButton>
               
                 
                    </Column1>


                    <Column2>
                      <ImgWrap>
                        <Img  src={img} alt={alt} />
                      </ImgWrap>
                    </Column2>
                    
                </ServicesRow>
            </ServicesWrapper>

            </ServicesHeroContainer>  
            
      
  )
}

export default ServicesHero