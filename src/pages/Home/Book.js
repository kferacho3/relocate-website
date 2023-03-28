import React, {useState} from 'react';
import { HeroBookSection,  HeroBookTextSection, HeroBookImg, 
         HeroBookText, HeroBookHead, HeroBookButton, } from './HeroElements';




const Book = () => {
    const [isOpen, setIsOpen] = useState(false)
   
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
    
      
         
     
      <>
      <HeroBookSection>
        <HeroBookImg src = {'https://relocate-storage.s3.us-east-2.amazonaws.com/relocate-images/HomeImg/hero5.svg'} />

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