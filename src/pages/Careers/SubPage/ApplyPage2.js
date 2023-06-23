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
  Subtitle2,
  TextWrapper2
} from './ApplyPageElements';
//import deco3 from './ApplyPageImg/servDeco.svg';



                

const ApplyPage2 = ({pageBg, id, imgStart, divStart, img, divBg, logo, darkText,  headline, 
                     headline2, deco1, deco2, description, description2, description3,  
                     description4, description5, description6, description7, description8, 
                     description9, description10,description11, description12}) => {

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
                        <TextWrapper2>
                            <Subtitle2 darkText={darkText}>✓{description}</Subtitle2> 
                            <Subtitle2 darkText={darkText}>✓{description2}</Subtitle2> 
                            <Subtitle2 darkText={darkText}>✓{description3}</Subtitle2> 
                            <Subtitle2 darkText={darkText}>✓{description4}</Subtitle2> 
                            <Subtitle2 darkText={darkText}>✓{description5}</Subtitle2> 
                        </TextWrapper2>
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
                        <Heading>{headline2}</Heading>
                        <TextWrapper2>

                              <Subtitle2 darkText={darkText}>✓{description6}</Subtitle2> 
                              <Subtitle2 darkText={darkText}>✓{description7}</Subtitle2> 
                              <Subtitle2 darkText={darkText}>✓{description8}</Subtitle2> 
                              <Subtitle2 darkText={darkText}>✓{description9}</Subtitle2> 
                              <Subtitle2 darkText={darkText}>✓{description10}</Subtitle2> 
                        </TextWrapper2>
                        <ApplyPageButton>Apply Now!</ApplyPageButton>
                      </ApplyPageTextContainer2>
                    </Column2b>
                    
                </ApplyPage2Row>
            </ApplyPage2Wrapper>
        </ApplyPageContainer>  
            
      
  )
}

export default ApplyPage2
