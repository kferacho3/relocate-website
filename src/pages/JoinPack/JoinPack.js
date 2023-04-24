import React from 'react';
import "./joinPack.scss";
//import Carousel from "framer-motion-carousel";






import {
  Column1,
  Column2,
  Img,
  ImgWrap,
  PackBanner,
  PackButton,
  PackContainer,
  PackDeco1,
  PackDeco2,
  PackDivBg,
  PackLogo,
  PackLogoWrap,
  PackName,
  PackNameWrap,
  PackRow,
  PackTextContainer,
  PackWrapper,
  Subtitle,
  TextWrapper
} from './PackElements';


import deco1 from '../../images/deco1.svg';
import deco2 from '../../images/deco2.svg';

function NewlineText(props) {
  const text = props.text;
  return text.split('\n').map(str => <p>{str}</p>);
}
const JoinPack = ({isOpen, toggle, lightBg, id, imgStart, divStart, darkText, description, divBg, headline, name, logo, img, alt, app}) => {
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

                    <PackButton onClick={toggle} to ={app}>Apply Now</PackButton>
              

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