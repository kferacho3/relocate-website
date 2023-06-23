import React from 'react';

import Navbar3 from '../../../components/Navbar/NavbarApplyInfo';
import ApplyPage1 from '../SubPage/ApplyPage1';
import ApplyPage2 from '../SubPage/ApplyPage2';
import ApplyPage3 from '../SubPage/ApplyPage3';
//import emailjs from 'emailjs-com';

import { doubleHandman, heroHandman, tripleHandman } from './Data';

function ApplyHandman({isOpen, toggle}) {

  // This function validates emails

  return (
<div id={'/applyPage/applyHandman'}>
<Navbar3 isOpen={isOpen} toggle={toggle}/>
  <ApplyPage1 {...heroHandman}/>
  <ApplyPage2 {...doubleHandman}/>
  <ApplyPage3 {...tripleHandman}/>
</div>
  );
}
export default ApplyHandman;