import React, {useState} from 'react';
import { HeroBookSection,  HeroBookTextSection, HeroBookImg, 
         HeroBookText, HeroBookHead, HeroBookButton, } from './HeroElements';


import hero7 from './HomeImg/hero7.svg';


const Book = () => {
    const [isOpen, setIsOpen] = useState(false)
   
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
    
      
         
     
      <>
      <HeroBookSection>
        <HeroBookImg style = {{backgroundImage: `url(${hero7})`}} />

        <HeroBookTextSection>
            <HeroBookHead>BOOK A SERVICE</HeroBookHead>
            <HeroBookText>
                We are fully aware of the difficulty moving can be, whether you 
                do it yourself or hire a company with inconsistent service quality. 
                Relocate plans to eliminate these inconsistencies by providing you 
                with a humanitarian based service using reliable technology and vetted
                contractors!
            </HeroBookText>
            <HeroBookText>
                Our expertly trained packers will ensure your service is efficient with 
                all items safely transported to its final destination in the condition 
                they were found in with proper padding and wrapping.
            </HeroBookText>
            <HeroBookButton>FIND YOUR PACK!</HeroBookButton>
        </HeroBookTextSection>
      </HeroBookSection>

      </>
    
    );
  }
  
  export default Book;