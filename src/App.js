import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.scss';
//import Home from './pages/index';
import BookMove from './pages/About/BookMove/BookMove';
import FAQ from './pages/About/FAQ/FAQ';
import PageH from './pages/About/Home/PageH';
import PageJP from './pages/About/JoinPack/PageJP';
import PageL from './pages/About/Locations/PageL';
import RelocationMetrics from './pages/About/RelocationMetrics/RelocationMetrics';

import ApplyInfoNav from './pages/Careers/ApplyInfoNav';
import ApplyPage from './pages/Careers/ApplyPage';
import ApplyCarrier from './pages/Careers/MainPages/ApplyCarrier';
import ApplyDriver from './pages/Careers/MainPages/ApplyDriver';
import ApplyHandman from './pages/Careers/MainPages/ApplyHandman';
import ApplyPacker from './pages/Careers/MainPages/ApplyPacker';
import ApplyPackman from './pages/Careers/MainPages/ApplyPackman';
import PageS from './pages/Services/PageS';

import Connect from './pages/Contact/Connect/Connect';
import Help from './pages/Contact/Help/Help';
import MovePrep from './pages/Contact/MovePrep/MovePrep';

import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';


import ScrollToTop from './components/ScrollToTop';



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
            <Route path='/applyPage' element={<ApplyPage />}  /> 
            <Route path='/relocationMetrics' element={<RelocationMetrics />}/>

            <Route path='/faq' element={<FAQ />}/>

            <Route path='applyInfoNav' element={<ApplyInfoNav />}  > 
              <Route path='applyPacker' element={<ApplyPacker />}  /> 
              <Route path='applyDriver' element={<ApplyDriver />}  /> 
              <Route path='applyHandman' element={<ApplyHandman />}  /> 
              <Route path='applyPackman' element={<ApplyPackman />}  /> 
              <Route path='applyCarrier' element={<ApplyCarrier />}  /> 
            </Route>

            <Route path='/connect' element={<Connect />}  /> 
            <Route path='/help' element={<Help />}  /> 
            <Route path='/movePrep' element={<MovePrep />}  /> 
            


          </Routes> 

          <Footer/>
          
        </Router>
       
    );
} export default App;