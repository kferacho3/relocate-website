import React, {useState} from 'react';
import "./index.scss";
//import Footer from '../components/Footer1/Footer';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

import Home from './Home/Home';
import Services from './Services/Services';
import Locations from './Locations/Locations';
import JoinPack from './JoinPack/JoinPack';
import BookMove from './BookMove/BookMove';
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
