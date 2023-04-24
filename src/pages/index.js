import React, { useState } from 'react';
import "./index.scss";

//import Footer from '../components/Footer1/Footer';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';

import BookMove from './BookMove/BookMove';
import Home from './Home/Home';
import JoinPack from './JoinPack/JoinPack';
import Locations from './Locations/Locations';
import Services from './Services/Services';
//import { motion } from 'framer-motion';
//import { animationTwo } from '../components/animations/animations';


const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
 
  const toggle = () => {
      setIsOpen(!isOpen)
  }
  
  return (
    <>
        <>
          <>
     
        
          
         <Sidebar/>
         <Navbar toggle={toggle}/>
         <div className='over'>
       
          <div className='container'/>
          <Home/>
          <Services />
          <Locations/>
          <JoinPack/>
          <BookMove/>
          </div>

          <Footer/>
        
         
         
          
         </>
        </>
      
    </>
  );
}

export default Home;
