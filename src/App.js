import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.scss';
//import Home from './pages/index';

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//*                                                                                                                                   ///
//*                           About Pages                                                                                             ///   
//*                                                                                                                                   ///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import BookMove from './pages/About/BookMove/BookMove';
import FAQ from './pages/About/FAQ/FAQ';
import PageH from './pages/About/Home/PageH';
import PageJP from './pages/About/JoinPack/PageJP';
import PageL from './pages/About/Locations/PageL';
import RelocationMetrics from './pages/About/RelocationMetrics/RelocationMetrics';
import PageS from './pages/Services/PageS';

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//*                                                                                                                                   ///
//*                           Services Pages                                                                                          ///   
//*                                                                                                                                   ///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//*                                                                                                                                   ///
//*                           Careers Info Pages                                                                                      ///   
//*                                                                                                                                   ///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import ApplyInfoNav from './pages/Careers/ApplyInfoNav';
import ApplyPage from './pages/Careers/ApplyPage';
import ApplyCarrier from './pages/Careers/MainPages/ApplyCarrier';
import ApplyDriver from './pages/Careers/MainPages/ApplyDriver';
import ApplyHandman from './pages/Careers/MainPages/ApplyHandman';
import ApplyPacker from './pages/Careers/MainPages/ApplyPacker';
import ApplyPackman from './pages/Careers/MainPages/ApplyPackman';

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//*                                                                                                                                   ///
//*                           Careers Form Pages                                                                                      ///   
//*                                                                                                                                   ///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import CarrierForm from './pages/Careers/Forms/CarrierForm';
import DriverForm from './pages/Careers/Forms/DriverForm';
import HandmanForm from './pages/Careers/Forms/HandmanForm';
import PackerForm from './pages/Careers/Forms/PackerForm';
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//*                                                                                                                                   ///
//*                           Contact Pages                                                                                           ///   
//*                                                                                                                                   ///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import Connect from './pages/Contact/Connect/Connect';
import Help from './pages/Contact/Help/Help';
import MovePrep from './pages/Contact/MovePrep/MovePrep';


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//*                                                                                                                                   ///
//*                           Components                                                                                              ///   
//*                                                                                                                                   ///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Sidebar from './components/Sidebar/Sidebar';



export function App() {
  const [isOpen, setIsOpen] = useState(false)
 
  const toggle = () => {
      setIsOpen(!isOpen)
  }
  
    return (

        <Router>
        
          <ScrollToTop/>
          <Sidebar/>
          <Navbar toggle={toggle}/>
 
          <Routes >
            <Route path="/" element={<PageH />}/>
            <Route path='/services' element={<PageS />}  />
            <Route path='/locations' element={<PageL />}  />
            <Route path='/pack' element={<PageJP />}  />  
            <Route path='/book' element={<BookMove />}  /> 
            <Route path='/relocationMetrics' element={<RelocationMetrics />}/>

            <Route path='/faq' element={<FAQ />}/>
            <Route path='/applyPage' element={<ApplyPage />}  /> 

            <Route path='/applyPage'  > 
              <Route path='applyInfoNav' element={<ApplyInfoNav />} /> 
              <Route path='applyPacker' element={<ApplyPacker />} /> 
              <Route path='applyDriver' element={<ApplyDriver />} /> 
              <Route path='applyHandman' element={<ApplyHandman />} /> 
              <Route path='applyPackman' element={<ApplyPackman />} /> 
              <Route path='applyCarrier' element={<ApplyCarrier />} /> 
              
              <Route path='packerForm' element={<PackerForm />}  /> 
              <Route path='driverForm' element={<DriverForm />}  /> 
              <Route path='handmanForm' element={<HandmanForm />}  /> 
              <Route path='packmanForm' element={<PackerForm />}  /> 
              <Route path='carrierForm' element={<CarrierForm />}  /> 
            </Route>

            <Route path='/connect' element={<Connect />} /> 
            <Route path='/help' element={<Help />}  /> 
            <Route path='/movePrep' element={<MovePrep />} /> 
            


          </Routes> 

          <Footer/>
          
        </Router>
       
        );
} export default App;