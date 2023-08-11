
import React, { useState } from 'react';
//import Footer from '../components/Footer1/Footer';
import { Data } from './Data/DataServices';
import FAQsetup from './FAQsetup';
//import { motion } from 'framer-motion';

//import { animationTwo } from '../components/animations/animations';

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(false)
 
  const toggle = () => {
      setIsOpen(!isOpen)
  }
  
  return (
    <>
        <>
          <>
     
         <FAQsetup data={Data}/>
        
         
         
          
         </>
        </>
      
    </>
  );
}

export default FAQ;