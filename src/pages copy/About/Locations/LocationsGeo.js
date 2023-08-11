import React from 'react';


//import insp from '../../images/inspection.svg'

import {
  Column1,
  Column2,
  DivBg,
  Img,
  ImgWrap,
  LocationsGeoContainer,
  LocationsGeoDeco1,
  LocationsGeoDeco2,
  LocationsGeoLogo,
  LocationsGeoLogoWrap,
  LocationsGeoRow,
  LocationsGeoTextContainer,
  LocationsGeoWrapper,
  Subtitle,
  TextWrapper
} from './LocationsGeoElements';

import deco1 from '../../../images/deco3.svg';
import deco2 from '../../../images/deco4.svg';
import logo from './LocationsImg/GeoLogo.svg';
//import deco3 from './LocationsGeoImg/servDeco.svg';



                
function NewlineText(props) {
  const text = props.text;
  return text.split('\n').map(str => <p>{str}</p>);
}
const LocationsGeo = ({lightBg, id, imgStart, divStart, img, divBg,  darkText, description, headline, alt}) => {

  return (
      
        <LocationsGeoContainer lightBg={lightBg} id={id} className='background2'>
        
  
        
            <LocationsGeoWrapper>
                <LocationsGeoRow imgStart={imgStart}>
     
                
                <Column1  >
              
                <DivBg divStart={divStart} src={divBg.default}/> 

                <LocationsGeoTextContainer>
                  <LocationsGeoDeco1 src={deco1}/>
                  <LocationsGeoLogoWrap>
                      <LocationsGeoLogo src={logo}/>
                  </LocationsGeoLogoWrap>
                  <LocationsGeoDeco2 src={deco2}/>
                  
                  <TextWrapper>
                      
                      <Subtitle darkText={darkText} class='font2'><NewlineText text ={description}/></Subtitle> 
                  </TextWrapper>
                  
                </LocationsGeoTextContainer>
                 
                    </Column1>


                    <Column2>
                      <ImgWrap>
                        <Img  src={img} alt={alt} />
                      </ImgWrap>
                    </Column2>
                    
                </LocationsGeoRow>
            </LocationsGeoWrapper>

            </LocationsGeoContainer>  
            
      
  )
}

export default LocationsGeo





