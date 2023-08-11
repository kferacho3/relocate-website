import React from 'react';


import Navbar3 from '../../../components/Navbar/NavbarApplyInfo';
import ApplyPage1 from '../SubPage/ApplyPage1';
import ApplyPage3 from '../SubPage/ApplyPage3';
import ApplyPage4 from '../SubPage/ApplyPage4';
import ApplyPage5 from '../SubPage/ApplyPage5';
//import emailjs from 'emailjs-com';
import { formDriver, heroDriver, stepsDriver, tripleDriver } from './Data';



function ApplyDriver({isOpen, toggle}) {

  // This function validates emails

  return (
<div id={'/applyPage/applyDriver'}>
<Navbar3 isOpen={isOpen} toggle={toggle}/>
  <ApplyPage1 {...heroDriver}/>
  <ApplyPage3 {...tripleDriver}/>
  <ApplyPage5 {...stepsDriver}/>
  <ApplyPage4 {...formDriver}/>

</div>
  );
}
export default ApplyDriver;

