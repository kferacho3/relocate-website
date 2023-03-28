import "./BookMove.scss";
import bg from './BookImg/bookBg.svg'
import logo from './BookImg/bookLogo.svg'


import React, { useRef,  useState} from 'react';

import {
  BookMoveContainer, BookMoveContainerImg
} from './BookMoveElements';
//import emailjs from 'emailjs-com';



function BookMove({isOpen, toggle}) {

  // This function validates emails








  
  





  return (
<>
<BookMoveContainer id= 'book'>
    <BookMoveContainerImg  style = {{ backgroundImage: `url(${bg})`}}/>
 


</BookMoveContainer>
</>
  );
}
export default BookMove;