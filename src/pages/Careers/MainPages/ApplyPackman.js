import React from 'react';
import ApplyPage1 from '../SubPage/ApplyPage1';
import ApplyPage2 from '../SubPage/ApplyPage2';
import ApplyPage3 from '../SubPage/ApplyPage3';
//import emailjs from 'emailjs-com';
import Navbar3 from '../../../components/Navbar/NavbarApplyInfo';
import { doublePackman, heroPackman, triplePackman } from "./Data";


function ApplyPackman({isOpen, toggle}) {

  // This function validates emails

  return (
    <div id={'/applyPage/applyPackman'}>
      <Navbar3 isOpen={isOpen} toggle={toggle}/>
      <ApplyPage1 {...heroPackman}/>
      <ApplyPage2 {...doublePackman}/>
      <ApplyPage3 {...triplePackman}/>
    </div>
  );
}
export default ApplyPackman;