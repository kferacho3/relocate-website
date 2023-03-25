import React, {useState} from 'react';
import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//import Home from './pages/index';
import PageH from './pages/Home/PageH';
import PageS from './pages/Services/PageS';
import PageL from './pages/Locations/PageL';
import PageJP from './pages/JoinPack/PageJP';
import BookMove from './pages/BookMove/BookMove';

import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';


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
          </Routes> 

          <Footer/>
          
        </Router>
       
    );
} export default App;