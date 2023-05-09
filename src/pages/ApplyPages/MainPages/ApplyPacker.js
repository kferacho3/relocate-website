import React from 'react';
import { doublePacker, heroPacker, triplePacker } from './Data.js';

import Navbar3 from '../../../components/Navbar/NavbarApplyInfo';
import ApplyPage1 from '../SubPage/ApplyPage1';
import ApplyPage2 from '../SubPage/ApplyPage2';
import ApplyPage3 from '../SubPage/ApplyPage3';

//import emailjs from 'emailjs-com';



function ApplyPacker({isOpen, toggle}) {

  // This function validates emails

  return (
<div id={'/applyPage/applyPacker'}>
<Navbar3 isOpen={isOpen} toggle={toggle}/>
  <ApplyPage1 {...heroPacker}/>
  <ApplyPage2 {...doublePacker}/>
  <ApplyPage3 {...triplePacker}/>


</div>
  );
}
export default ApplyPacker;