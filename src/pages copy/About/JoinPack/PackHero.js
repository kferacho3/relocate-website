import React from 'react';


//import insp from '../../images/inspection.svg'

import {
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrap,
  PackHeroHeroButton,
  PackHeroHeroContainer,
  PackHeroRow,
  PackHeroWrapper,
  Subtitle,
  TextWrapper,
  TopLine
} from './PackHeroElements';


//import deco3 from './PackHeroImg/servDeco.svg';



                
function NewlineText(props) {
  const text = props.text;
  return text.split('\n').map(str => <p>{str}</p>);
}
const PackHero = ({lightBg, id, imgStart, topLine, img, divBg, logo, darkText, description, headline, alt}) => {

  return (
      
        <PackHeroHeroContainer lightBg={lightBg} id={id} className='background2'>
        
  
        
            <PackHeroWrapper>
                <PackHeroRow imgStart={imgStart}>
     
                
                <Column1  >
              
                  <Heading>{headline}</Heading>
                  <TopLine>{topLine}</TopLine>
                  <TextWrapper>
                      
                      <Subtitle darkText={darkText} class='font2'><NewlineText text ={description}/></Subtitle> 
                  </TextWrapper>
                  
                  <PackHeroHeroButton to='/applyPage'>Get started</PackHeroHeroButton>
               
                 
                    </Column1>


                    <Column2>
                      <ImgWrap>
                        <Img  src={img} alt={alt} />
                      </ImgWrap>
                    </Column2>
                    
                </PackHeroRow>
            </PackHeroWrapper>

            </PackHeroHeroContainer>  
            
      
  )
}

export default PackHero