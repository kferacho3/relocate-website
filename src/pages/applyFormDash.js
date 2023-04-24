import React, { useState } from 'react';
import "./index.scss";
//import Footer from '../components/Footer1/Footer';
import Navbar2 from '../components/Navbar/NavbarApply';
import Sidebar from '../components/Sidebar/Sidebar';
import ApplyPage from './pages/ApplyPages/ApplyPage';
import CarrierForm from './pages/ApplyPages/Forms/CarrierForm';
import DriverForm from './pages/ApplyPages/Forms/DriverForm';
import HandmanForm from './pages/ApplyPages/Forms/HandmanForm';
import PackerForm from './pages/ApplyPages/Forms/PackerForm';
import PackmanForm from './pages/ApplyPages/Forms/PackmanForm';
//import { motion } from 'framer-motion';
//import { animationTwo } from '../components/animations/animations';

const DashApplyForm = () => {
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
         <ApplyPage/>
        <CarrierForm  id = {'/carrierForm'}/>
        <DriverForm/>
        <HandmanForm/>
        <PackerForm  id = {'/packerForm'}/>
        <PackmanForm/>
        
         
         
          
         </>
        </>
      
    </>
  );
}

export default DashApplyForm;