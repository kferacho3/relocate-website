import "./BookMove.scss";


import React from 'react';
import Date from "./Form/Date";
import Heavy from "./Form/Heavy";
import Home from "./Form/Home";
import Information from "./Form/Information";
import Items from "./Form/Items";
import Service from "./Form/Service";
import Start from "./Form/Start";
import Time from "./Form/Time";
//import emailjs from 'emailjs-com';



function BookMove({isOpen, toggle}) {

  // This function validates emails

  return (
<>
<Start/>
<Service/>
<Information/>
<Home/>
<Items/>
<Heavy/>
<Date/>
<Time/>

</>
  );
}
export default BookMove;