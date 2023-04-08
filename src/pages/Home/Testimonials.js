import React, {useState} from 'react';
import { HeroTestContainer, HeroTestHeader, HeroTestMain, HeroTestApost1, HeroTestApost2, HeroTestTextSectionM,
         HeroTestMainStars, HeroTestSection, HeroTestTop, HeroTestNameHead, HeroTestNameDate, 
         HeroTestTextSection, HeroTestText, HeroTestRating, HeroTestDivContainer, HeroTestButton } from './HeroElements';


import q1 from './HomeImg/quote.svg';
import q2 from './HomeImg/quote2.svg';
import go from './HomeImg/go5stars.svg';
import gr from './HomeImg/gr5stars.svg';

const Testimonials = () => {
    const [isOpen, setIsOpen] = useState(false)
   
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
    
      
         
     
      <HeroTestSection>
      <HeroTestContainer>
      <HeroTestHeader>Hear from a few of our customers!</HeroTestHeader>
      <HeroTestMain>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat.
       </HeroTestMain>
       <HeroTestApost1 style = {{backgroundImage: `url(${q1})`}}/>
       <HeroTestApost2 style = {{backgroundImage: `url(${q2})`}}/>
       <HeroTestMainStars style = {{backgroundImage: `url(${go})`}} />
       
      <HeroTestDivContainer>
  
          <HeroTestTextSection  style = {{gridArea: `col1`}}>
            <HeroTestTop>
                <HeroTestNameHead>Ramakrishnan S., Chicago Illinois</HeroTestNameHead>
                <HeroTestNameDate>Aug 07, 2021</HeroTestNameDate>
                <HeroTestRating style = {{backgroundImage: `url(${gr})`}}/>
            </HeroTestTop>
          
            <HeroTestText>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat.
            </HeroTestText>
          </HeroTestTextSection>

          <HeroTestTextSectionM  style = {{gridArea: `col2`}} >
            <HeroTestTop>
                <HeroTestNameHead>Ramakrishnan S., Chicago Illinois</HeroTestNameHead>
                <HeroTestNameDate>Aug 07, 2021</HeroTestNameDate>
                <HeroTestRating style = {{backgroundImage: `url(${gr})`}}/>
            </HeroTestTop>
          
            <HeroTestText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat.
            </HeroTestText>
          </HeroTestTextSectionM>

          <HeroTestTextSection style = {{gridArea: `col3`}}>
            <HeroTestTop>
                <HeroTestNameHead>Ramakrishnan S., Chicago Illinois</HeroTestNameHead>
                <HeroTestNameDate>Aug 07, 2021</HeroTestNameDate>
                <HeroTestRating style = {{backgroundImage: `url(${gr})`}}/>
            </HeroTestTop>
          
            <HeroTestText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </HeroTestText>
          </HeroTestTextSection>

</HeroTestDivContainer>
<HeroTestButton>See more Reviews</HeroTestButton>
      </HeroTestContainer>

      </HeroTestSection>
    
    );
  }
  
  export default Testimonials;