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
  Img
  
} from './LocationsElements';
import "./Locations.scss";
import { motion} from 'framer-motion';

function NewlineText(props) {
  const text = props.text;
  return text.split('\n').map(str => <p>{str}</p>);
}
const Locations = ({lightBg, id, imgStart, lightText,  img,darkText, description,
   alt, headline}) => {

  return (
      <>
        <LocationsContainer lightBg={lightBg} id={id} className='background2'>
        
  
        
            <LocationsWrapper>
                <LocationsRow imgStart={imgStart}>
     

                    <Column1  >
                      <TextWrapper>
                            <TopLine lightText={lightText}>{lightText}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText} ><NewlineText text ={description}/></Subtitle>
                    
                            
                          
                        </TextWrapper>
                 
                    </Column1>


                    <Column2>
                        <Img  src={img.default} alt={alt} />
                    </Column2>
                    
                </LocationsRow>
            </LocationsWrapper>

            </LocationsContainer>  
            </>
            
      
  )
}

export default Locations