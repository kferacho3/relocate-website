import React from 'react';

//import insp from '../../images/inspection.svg'



import {
    ApplyPage3Row,
    ApplyPage3Wrapper,
    ApplyPageButton,
    ApplyPageContainer,
    ApplyPageDeco1c,
    ApplyPageDeco2c,
    ApplyPageTextContainer3,
    Column1c,
    Column2c,
    Column3c,
    Subtitle3,
    TextWrapper3
} from './ApplyPageElements';
//import deco3 from './ApplyPageImg/servDeco.svg';




const ApplyPage3 = ({pageBg, id, imgStart, divStart, img, divBg, logo, darkText, alt, headline, description, deco1, deco2,
                     description2, description3, description4, description5, description6, description7, description8, too, 
                     description9, description10,description11, description12, description13, description14, description15}) => {

  return (
      
        <ApplyPageContainer style={{ background:`${pageBg}`}}  id={id} className='background2'>
        
  
        
            <ApplyPage3Wrapper>
                <ApplyPage3Row imgStart={imgStart}>
     
                
                <Column1c>
                      <ApplyPageTextContainer3 style={{ background:`${divBg}`}}>
                          <ApplyPageDeco1c src={deco1.default}/>
                          <ApplyPageDeco2c src={deco2.default}/>
                          <TextWrapper3>
                              <Subtitle3 darkText={darkText}>✓{description}</Subtitle3> 
                              <Subtitle3 darkText={darkText}>✓{description2}</Subtitle3> 
                              <Subtitle3 darkText={darkText}>✓{description3}</Subtitle3> 
                              <Subtitle3 darkText={darkText}>✓{description4}</Subtitle3> 
                              <Subtitle3 darkText={darkText}>✓{description5}</Subtitle3> 
                          </TextWrapper3>
                          <ApplyPageButton to={too}
                            
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact={true}
                            offset={-80}>Apply Now!</ApplyPageButton>
                      </ApplyPageTextContainer3>
                  </Column1c>


                    <Column2c>
                      <ApplyPageTextContainer3 style={{ background:`${divBg}`}}>
                          <ApplyPageDeco1c src={deco1.default}/>
                          <ApplyPageDeco2c src={deco2.default}/>
                          <TextWrapper3>
                              <Subtitle3 darkText={darkText}>✓{description6}</Subtitle3> 
                              <Subtitle3 darkText={darkText}>✓{description7}</Subtitle3> 
                              <Subtitle3 darkText={darkText}>✓{description8}</Subtitle3> 
                              <Subtitle3 darkText={darkText}>✓{description9}</Subtitle3> 
                              <Subtitle3 darkText={darkText}>✓{description10}</Subtitle3> 
                          </TextWrapper3>
                          <ApplyPageButton to={too}
                            
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact={true}
                            offset={-80}>Apply Now!</ApplyPageButton>
                      </ApplyPageTextContainer3>
                  </Column2c>

                  <Column3c>
                      <ApplyPageTextContainer3 style={{ background:`${divBg}`}}>
                          <ApplyPageDeco1c src={deco1.default}/>
                          <ApplyPageDeco2c src={deco2.default}/>
                          <TextWrapper3>
                              <Subtitle3 darkText={darkText}>✓{description11}</Subtitle3> 
                              <Subtitle3 darkText={darkText}>✓{description12}</Subtitle3> 
                              <Subtitle3 darkText={darkText}>v{description13}</Subtitle3> 
                              <Subtitle3 darkText={darkText}>✓{description14}</Subtitle3> 
                              <Subtitle3 darkText={darkText}>✓{description15}</Subtitle3> 
                          </TextWrapper3>
                          <ApplyPageButton to={too}
                            
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact={true}
                            offset={-80}>Apply Now!</ApplyPageButton>
                      </ApplyPageTextContainer3>
                  </Column3c>
                    
                </ApplyPage3Row>
            </ApplyPage3Wrapper>

            </ApplyPageContainer>  
            
      
  )
}

export default ApplyPage3