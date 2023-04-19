import "./BookMove.scss";
import bg from './BookImg/bookBg.svg'
import logo from './BookImg/bookLogo.svg'


import React, { useRef,  useState} from 'react';
import Start from "./Form/Start";
import Information from "./Form/Information";
import Home from "./Form/Home";
import Service from "./Form/Service";
import Date from "./Form/Date";
import {
  BookMoveContainer, BookMoveContainerImg
} from './BookMoveElements';
//import emailjs from 'emailjs-com';



function BookMove({isOpen, toggle}) {

  // This function validates emails








  
  





  return (
<>
<Start/>
<Information/>
<Home/>
<Service/>
<Date/>

</>
  );
}
export default BookMove;