import React from 'react';

//import insp from '../../images/inspection.svg'


import {
    ApplyPage3Row,
    ApplyPage3Wrapper,
    ApplyPageButton,
    ApplyPageContainer,
    ApplyPageDeco1e,
    ApplyPageDeco2e,
    ApplyPageTextContainer5,
    Column1e,
    Column2e,
    Column3e,
    Heading,
    Subtitle,
    TextWrapper
} from './ApplyPageElements';
//import deco3 from './ApplyPageImg/servDeco.svg';




const ApplyPage5 = ({pageBg, id, imgStart, divStart, img, divBg, logo, darkText, alt, deco1, deco2,
                     headline, headline2, headline3, description, description2, description3}) => {

  return (
      
        <ApplyPageContainer style={{ background:`${pageBg}`}}  id={id} className='background2'>
        
  
        
            <ApplyPage3Wrapper>
                <ApplyPage3Row imgStart={imgStart}>
     
                
                <Column1e>
                      <ApplyPageTextContainer5 style={{ background:`${divBg}`}}>
                          <ApplyPageDeco1e src={deco1.default}/>
                          <ApplyPageDeco2e src={deco2.default}/>
                    
                          <Heading>{headline}</Heading>
                          <TextWrapper>
                              <Subtitle darkText={darkText} >{description}</Subtitle> 
                          </TextWrapper>
                          <ApplyPageButton>Apply Now!</ApplyPageButton>
                      </ApplyPageTextContainer5>
                  </Column1e>


                    <Column2e>
                      <ApplyPageTextContainer5 style={{ background:`${divBg}`}}>
                          <ApplyPageDeco1e src={deco1.default}/>
                          <ApplyPageDeco2e src={deco2.default}/>
                    
                          <Heading>{headline2}</Heading>
                          <TextWrapper>
                              <Subtitle darkText={darkText} >{description2}</Subtitle> 
                          </TextWrapper>
                          <ApplyPageButton>Apply Now!</ApplyPageButton>
                      </ApplyPageTextContainer5>
                  </Column2e>

                  <Column3e>
                      <ApplyPageTextContainer5 style={{ background:`${divBg}`}}>
                          <ApplyPageDeco1e src={deco1.default}/>
                          <ApplyPageDeco2e src={deco2.default}/>
                    
                          <Heading>{headline3}</Heading>
                          <TextWrapper>
                          <Subtitle darkText={darkText} >{description3}</Subtitle> 
                          </TextWrapper>
                          <ApplyPageButton>Apply Now!</ApplyPageButton>
                      </ApplyPageTextContainer5>
                  </Column3e>
                    
                </ApplyPage3Row>
            </ApplyPage3Wrapper>

            </ApplyPageContainer>  
            
      
  )
}

export default ApplyPage5