import React from 'react';


//import insp from '../../images/inspection.svg'


import {
  ApplyPage2Row,
  ApplyPage2Wrapper,
  ApplyPageButton,
  ApplyPageContainer,
  ApplyPageDeco1b,
  ApplyPageDeco2b,
  ApplyPageLogo,
  ApplyPageLogoWrap,
  ApplyPageTextContainer2,
  Column1b,
  Column2b,
  Heading,
  Subtitle,
  TextWrapper
} from './ApplyPageElements';
//import deco3 from './ApplyPageImg/servDeco.svg';



                

const ApplyPage2 = ({pageBg, id, imgStart, divStart, img, divBg, logo, darkText,  headline, 
                     deco1, deco2, description, description2, description3, description4, 
                     description5, description6, description7, description8, description9,
                     description10,description11, description12}) => {

  return (
      
        <ApplyPageContainer style={{ background:`${pageBg}`}}  id={id} className='background2'>
        
  
        
            <ApplyPage2Wrapper>
                <ApplyPage2Row imgStart={imgStart}>
                    <Column1b  >
                      <ApplyPageTextContainer2 style={{ background:`${divBg}`}}>
                        <ApplyPageDeco1b src={deco1.default}/>
                        <ApplyPageLogoWrap>
                            <ApplyPageLogo src={logo.default}/>
                        </ApplyPageLogoWrap>
                        <ApplyPageDeco2b src={deco2.default}/>
                        <Heading>{headline}</Heading>
                        <TextWrapper>
                            <Subtitle darkText={darkText}>✓{description}</Subtitle> 
                            <Subtitle darkText={darkText}>✓{description2}</Subtitle> 
                            <Subtitle darkText={darkText}>✓{description3}</Subtitle> 
                            <Subtitle darkText={darkText}>✓{description4}</Subtitle> 
                            <Subtitle darkText={darkText}>✓{description5}</Subtitle> 
                            <Subtitle darkText={darkText}>✓{description6}</Subtitle> 
                        </TextWrapper>
                        <ApplyPageButton>Apply Now!</ApplyPageButton>
                      </ApplyPageTextContainer2>
                 
                    </Column1b>


                    <Column2b>
                    <ApplyPageTextContainer2 style={{ background:`${divBg}`}}>
                        <ApplyPageDeco1b src={deco1.default}/>
                        <ApplyPageLogoWrap>
                            <ApplyPageLogo src={logo.default}/>
                        </ApplyPageLogoWrap>
                        <ApplyPageDeco2b src={deco2.default}/>
                        <Heading>{headline}</Heading>
                        <TextWrapper>
                              <Subtitle darkText={darkText}>✓{description7}</Subtitle> 
                              <Subtitle darkText={darkText}>✓{description8}</Subtitle> 
                              <Subtitle darkText={darkText}>✓{description9}</Subtitle> 
                              <Subtitle darkText={darkText}>✓{description10}</Subtitle> 
                              <Subtitle darkText={darkText}>✓{description11}</Subtitle> 
                              <Subtitle darkText={darkText}>✓{description12}</Subtitle> 
                        </TextWrapper>
                        <ApplyPageButton>Apply Now!</ApplyPageButton>
                      </ApplyPageTextContainer2>
                    </Column2b>
                    
                </ApplyPage2Row>
            </ApplyPage2Wrapper>
        </ApplyPageContainer>  
            
      
  )
}

export default ApplyPage2
