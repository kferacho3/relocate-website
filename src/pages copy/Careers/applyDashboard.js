
import React, { useState } from 'react';
import "./index.scss";
//import Footer from '../components/Footer1/Footer';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar2 from '../components/Navbar/NavbarApply';
import ApplyPage from './pages/ApplyPages/ApplyPage';
import ApplyCarrier from './pages/ApplyPages/MainPages/ApplyCarrier';
import ApplyDriver from './pages/ApplyPages/MainPages/ApplyDriver';
import ApplyHandman from './pages/ApplyPages/MainPages/ApplyHandman';
import ApplyPacker from './pages/ApplyPages/MainPages/ApplyPacker';
import ApplyPackman from './pages/ApplyPages/MainPages/ApplyPackman';
//import { motion } from 'framer-motion';
//import { animationTwo } from '../components/animations/animations';

const DashApply = () => {
  const [isOpen, setIsOpen] = useState(false)
 
  const toggle = () => {
      setIsOpen(!isOpen)
  }
  
  return (
    <>
        <>
          <>
     
        
          
         <Sidebar/>
         <Navbar2 toggle={toggle}/>
         <ApplyPage id = {'applyPage'}/>
        <ApplyCarrier/>
        <ApplyDriver/>
        <ApplyHandman/>
        <ApplyPacker/>
        <ApplyPackman/>
        
         
         
          
         </>
        </>
      
    </>
  );
}

export default DashApply;