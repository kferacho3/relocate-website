
import React from 'react';

//import emailjs from 'emailjs-com';




import {
  BtnWrap,
  Column1,
  Column2,
  Heading,
  HomeButton,
  HomeContainer,
  HomeRow,
  HomeWrapper,
  Img,
  ImgWrap,
  Subtitle,
  TextWrapper,
  TopLine
} from './HeroElements';
import "./Home.scss";

function NewlineText(props) {
  const text = props.text;
  return text.split('\n').map(str => <p>{str}</p>);
}
const Home = ({lightBg, id, imgStart, lightText, img, darkText, alt, 
  primary, description, headline, buttonLabel, topLine}) => {

  return (
      
        <HomeContainer lightBg={lightBg} id={id} className='background2'>
        
  
        
            <HomeWrapper>
                <HomeRow imgStart={imgStart}>
     

                <Column1  >
                      <TextWrapper>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <TopLine lightText={lightText}>{topLine}</TopLine>
                            <Subtitle darkText={darkText} ><NewlineText text ={description}/></Subtitle>
                            <BtnWrap>
                            <HomeButton >{buttonLabel}</HomeButton>
                            </BtnWrap>
  
                        </TextWrapper>
                      
                 
                    </Column1>


                    <Column2>
                    <ImgWrap>
                        <Img  src={img} alt={alt} />
                        </ImgWrap>
                    </Column2>
                    
                </HomeRow>
            </HomeWrapper>

            </HomeContainer>  
            
      
  )
}

export default Home




