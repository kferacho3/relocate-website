import React, { useState } from 'react';


import ContactHero from './ContactHero';
import PopUp from './ContactUsPopUp';
import { contactHero } from './Data';
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