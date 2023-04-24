import React from 'react';

//import emailjs from 'emailjs-com';
import Navbar2 from '../../../components/Navbar/NavbarApply';
import ApplyPage1 from '../SubPage/ApplyPage1';
import ApplyPage2 from '../SubPage/ApplyPage2';
import ApplyPage4 from '../SubPage/ApplyPage4';
import { doubleCarrier, formCarrier, heroCarrier } from './Data';
function ApplyCarrier({isOpen, toggle}) {

  // This function validates emails

  return (
  <div id={'/applyCarrier'}>
  <Navbar2 isOpen={isOpen} toggle={toggle}/>
  <ApplyPage1 {...heroCarrier}/>
  <ApplyPage2 {...doubleCarrier}/>
  <ApplyPage4 {...formCarrier}/>


  </div>
  );
}
export default ApplyCarrier;