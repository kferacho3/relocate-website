import React, {useState} from 'react';
import Home from './Home';
import { home1, home2, homeV, home4, home5} from './Data';
import Testimonials from './Testimonials';
import Services from './Services';
import Book from './Book';
import Info from './HeroInfo';

const PageH = () => {
    const [isOpen, setIsOpen] = useState(false)
   
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
      <>
          <>
            <>
        
            <Home id={'/'} {...home1}/>
            <Home {...home2}/>
            
            <Services id={'services'}/>
            
            <Home {...homeV}/>
            <Home {...home4}/>
            <Testimonials id={'testimonials'}/>
            <Info/>
            <Book id={'book'}/>
            
         
            
           </>
          </>
        
      </>
    );
  }
  
  export default PageH;