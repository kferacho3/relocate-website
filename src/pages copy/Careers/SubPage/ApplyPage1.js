import React from 'react';

//import insp from '../../images/inspection.svg'



import {
  ApplyPageButton,
  ApplyPageContainer,
  ApplyPageDeco1,
  ApplyPageDeco2,
  ApplyPageLogo,
  ApplyPageLogoWrap,
  ApplyPageRow,
  ApplyPageTextContainer,
  ApplyPageWrapper,
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrap,
  Subtitle,
  TextWrapper
} from './ApplyPageElements';
//import deco3 from './ApplyPageImg/servDeco.svg';



                

const ApplyPage1 = ({pageBg, deco1, deco2, id, imgStart, divStart, img, divBg, 
                     logo, darkText, description, headline, alt, too}) => {

  return (
      
        <ApplyPageContainer style={{ background:`${pageBg}`}} id={id} className='background2'>
        
  
        
            <ApplyPageWrapper>
                <ApplyPageRow imgStart={imgStart}>
                    <Column1  >
                      <ApplyPageTextContainer style={{ background:`${divBg}`}}>
                        <ApplyPageDeco1 src={deco1.default}/>
                        <ApplyPageLogoWrap>
                            <ApplyPageLogo src={logo.default}/>
                        </ApplyPageLogoWrap>
                        <ApplyPageDeco2 src={deco2.default}/>
                        <Heading>{headline}</Heading>
                        <TextWrapper>
                            <Subtitle darkText={darkText} class='font2'>{description}</Subtitle> 
                        </TextWrapper>
                        <ApplyPageButton to={too}
                            
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact={true}
                            offset={-80}
                            >Apply Now!</ApplyPageButton>
                      </ApplyPageTextContainer>
                 
                    </Column1>


                    <Column2>
                      <ImgWrap>
                        <Img  src={img} alt={alt} />
                      </ImgWrap>
                    </Column2>
                    
                </ApplyPageRow>
            </ApplyPageWrapper>
        </ApplyPageContainer>  
            
      
  )
}

export default ApplyPage1
