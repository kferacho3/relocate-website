import React from 'react';

import { helpHero, helpResource1, helpResource2 } from '../Data';
import HelpHero from './HelpHero';
import HelpResource from './HelpResource';

function Help({isOpen, toggle}) {

  // This function validates emails

  return (
<div id={'/Contact/help'}>
  <HelpHero {...helpHero}/>
  <HelpResource {...helpResource1}/>
  <HelpResource {...helpResource2}/>
</div>
  );
}
export default Help;