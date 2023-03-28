import React, {useState} from 'react';
import "./joinPack.scss";
//import Carousel from "framer-motion-carousel";






import { 
  PackContainer,
  PackWrapper,
  PackRow,
  PackBanner,
  PackLogo,
  PackName,
  PackDeco1,
  PackDeco2,
  PackButton,
  PackTextContainer,
  Column1, 
  Column2, 
  TextWrapper, 
  PackDivBg,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  PackLogoWrap,
  PackNameWrap
  
} from './PackElements'


import deco1 from '../../images/deco1.svg';
import deco2 from '../../images/deco2.svg';

function NewlineText(props) {
  const text = props.text;
  return text.split('\n').map(str => <p>{str}</p>);
}
const JoinPack = ({lightBg, id, imgStart, divStart, darkText, description, divBg, headline, name, logo, img, alt}) => {
  return (
      
    <PackContainer lightBg={lightBg} id={id} >
        
      
    <PackBanner/>
    <PackWrapper>
        <PackRow imgStart={imgStart}>
            <Column1>
             
              <PackNameWrap>
              <PackName src={name}/>
              </PackNameWrap>
              <PackDivBg divStart={divStart} src = {divBg.default}></PackDivBg>
              <PackTextContainer>
                  <PackDeco1 src={deco1}/>
                  <PackLogoWrap>
                    <PackLogo src={logo}/>
                  </PackLogoWrap>
                  <PackDeco2 src={deco2}/>
             
                    <TextWrapper>
                        <Subtitle darkText={darkText} class='font2'><NewlineText text ={description}/></Subtitle> 
                    </TextWrapper>
                    <PackButton>Apply Now</PackButton>
              </PackTextContainer>
            </Column1>


            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
            
        </PackRow>
    </PackWrapper>
    </PackContainer>  
            
      
  )
}

export default JoinPack