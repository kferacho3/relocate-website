import React from 'react';


import ContactHero from './ContactHero';
import { helpHero } from './Data';

function Help({isOpen, toggle}) {

  // This function validates emails

  return (
<div id={'/Contact/help'}>
  <ContactHero {...helpHero}/>


</div>
  );
}
export default Help;