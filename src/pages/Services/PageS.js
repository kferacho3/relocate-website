import React, {useState} from 'react';
import Services from './Services';
import { service1, service2, service3, service4, service5, service6, service7, service8 } from './Data';
const PageS = () => {
    const [isOpen, setIsOpen] = useState(false)
   
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
      <>
          <>
            <>
        
            <Services id={'services'}  {...service1}/>
            <Services {...service2}/>
            <Services {...service3}/>
            <Services {...service4}/>
            <Services {...service5}/>
            <Services {...service6}/>
            <Services {...service7}/>
            <Services {...service8}/>
            
           </>
          </>
        
      </>
    );
  }
  
  export default PageS;