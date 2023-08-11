import React, { useState } from 'react';
import {
  HeroBookButton,
  HeroBookHead,
  HeroBookImg, HeroBookImgWrap,
  HeroBookSection,
  HeroBookText,
  HeroBookTextSection,
} from './HeroElements';




const Book = () => {
    const [isOpen, setIsOpen] = useState(false)
   
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
    
      
         
     
      <>
      <HeroBookSection>
      <HeroBookImgWrap>
        <HeroBookImg src = {'https://relocate-storage.s3.us-east-2.amazonaws.com/relocate-images/HomeImg/hero5.svg'} />
</HeroBookImgWrap>
        <HeroBookTextSection>
            <HeroBookHead>BOOK A SERVICE</HeroBookHead>
            <HeroBookText>
            At Relocate, we understand how difficult and stressful moving can be,
             whether you're doing it yourself or hiring a company with inconsistent service quality.
              That's why we're committed to eliminating these inconsistencies by providing you with 
              a human-centered service that leverages reliable technology and vetted contractors. 

            </HeroBookText>
            <HeroBookText>
            At Relocate, our expertly trained packers are committed to ensuring that your move is 
            efficient and that all your items are safely transported to their final destination in
             the same condition they were found in. We use proper padding and wrapping to protect your 
             belongings and give you peace of mind knowing that your move is in capable hands. 
             Choose Relocate for a hassle-free and worry-free move.
            </HeroBookText>
            <HeroBookButton    to = '/book'>FIND YOUR PACK!</HeroBookButton>
        </HeroBookTextSection>
      </HeroBookSection>

      </>
    
    );
  }
  
  export default Book;