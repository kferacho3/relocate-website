import React, { useState } from 'react';


import { contactHero } from '../Data';
import ContactHero from './ContactHero';
import PopUp from './ContactUsPopUp';
function Connect({isOpen, toggle}) {
    const [buttonPopup, setButtonPopup] = useState(false);
  // This function validates emails

  return (
<div id={'/Contact/connect'}>
  <ContactHero {...contactHero}/>
  
  <PopUp trigger ={buttonPopup} setTrigger = {setButtonPopup}>
  </PopUp>

</div>
  );
}
export default Connect;