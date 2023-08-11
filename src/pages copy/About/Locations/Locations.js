import React from 'react';

import { 
  LocationsContainer,
  LocationsWrapper,
  LocationsRow, 
  Column1, 
  Column2, 
  TextWrapper, 
  TopLine,
  Heading,
  Subtitle,
  Img,
  ImgWrap
  
} from './LocationsElements';
import "./Locations.scss";
import { motion} from 'framer-motion';

function NewlineText(props) {
  const text = props.text;
  return text.split('\n').map(str => <p>{str}</p>);
}
const Locations = ({lightBg, id, imgStart, lightText, topLine, img,darkText, description,
   alt, headline}) => {

  return (
      <>
        <LocationsContainer lightBg={lightBg} id={id} className='background2'>
        
  
        
            <LocationsWrapper>
                <LocationsRow imgStart={imgStart}>
     

                    <Column1  >
                      <TextWrapper>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <TopLine lightText={lightText}>{topLine}</TopLine>
                            <Subtitle darkText={darkText} ><NewlineText text ={description}/></Subtitle>
                        </TextWrapper>
                 
                    </Column1>


                    <Column2>
                      <ImgWrap>
                        <Img  src={img} alt={alt} />
                      </ImgWrap>
                    </Column2>
                    
                </LocationsRow>
            </LocationsWrapper>

            </LocationsContainer>  
            </>
            
      
  )
}

export default Locations