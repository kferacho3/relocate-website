import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.scss';
//import Home from './pages/index';
import BookMove from './pages/BookMove/BookMove';
import PageH from './pages/Home/PageH';
import PageJP from './pages/JoinPack/PageJP';
import PageL from './pages/Locations/PageL';
import PageS from './pages/Services/PageS';

import ApplyPage from './pages/ApplyPages/ApplyPage';

import ApplyInfoNav from './pages/ApplyPages/ApplyInfoNav';
import ApplyCarrier from './pages/ApplyPages/MainPages/ApplyCarrier';
import ApplyDriver from './pages/ApplyPages/MainPages/ApplyDriver';
import ApplyHandman from './pages/ApplyPages/MainPages/ApplyHandman';
import ApplyPacker from './pages/ApplyPages/MainPages/ApplyPacker';
import ApplyPackman from './pages/ApplyPages/MainPages/ApplyPackman';

import ContactUs from './pages/Contact/ContactUs';
import MovePrep from './pages/Contact/MovePrep';

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

            <Route path='applyInfoNav' element={<ApplyInfoNav />}  > 
              <Route path='applyPacker' element={<ApplyPacker />}  /> 
              <Route path='applyDriver' element={<ApplyDriver />}  /> 
              <Route path='applyHandman' element={<ApplyHandman />}  /> 
              <Route path='applyPackman' element={<ApplyPackman />}  /> 
              <Route path='applyCarrier' element={<ApplyCarrier />}  /> 
            </Route>

            <Route path='/contact' element={<ContactUs />}  /> 
            <Route path='/movePrep' element={<MovePrep />}  /> 
            


          </Routes> 

          <Footer/>
          
        </Router>
       
    );
} export default App;