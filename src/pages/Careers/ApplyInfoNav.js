import React from 'react';

//import emailjs from 'emailjs-com';
import { Outlet } from 'react-router-dom';
import Navbar3 from '../../components/Navbar/NavbarApplyInfo';
function ApplyInfoNav({isOpen, toggle}) {


  return (
<>
<Navbar3 id={'applyInfoNav'} isOpen={isOpen} toggle={toggle}/>
<Outlet/>
</>

  );
}
export default ApplyInfoNav;