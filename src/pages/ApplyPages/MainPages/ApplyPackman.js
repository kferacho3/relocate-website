import React from 'react';
import ApplyPage1 from '../SubPage/ApplyPage1';
import ApplyPage2 from '../SubPage/ApplyPage2';
import ApplyPage3 from '../SubPage/ApplyPage3';
//import emailjs from 'emailjs-com';
import Navbar2 from '../../../components/Navbar/NavbarApply';
import { doublePackman, heroPackman, triplePackman } from "./Data";


function ApplyPackman({isOpen, toggle}) {

  // This function validates emails

  return (
    <div id={'/applyPackman'}>
      <Navbar2 isOpen={isOpen} toggle={toggle}/>
      <ApplyPage1 {...heroPackman}/>
      <ApplyPage2 {...doublePackman}/>
      <ApplyPage3 {...triplePackman}/>
    </div>
  );
}
export default ApplyPackman;