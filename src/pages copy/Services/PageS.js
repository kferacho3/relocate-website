import React, {useState} from 'react';
import Services from './Services';
import ServicesHero from './SericesHero';
import Info2 from './ServicesInfo2';
import Info from './ServicesInfo';
import ServicesMob from './ServicesMob';
import { hero, service1, service2, service3, service4, service5, service6, service7, service8, mob, mob2 } from './Data';
const PageS = () => {
    const [isOpen, setIsOpen] = useState(false)
   
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
      <>
          <>
            <>
            <ServicesHero {...hero}/>
            <Services id={'services'}  {...service1}/>
            <Services {...service2}/>
            <Services {...service3}/>
            <Services {...service4}/>
            <Services {...service5}/>
            <Services {...service6}/>
            <Services {...service7}/>
            <Services {...service8}/>
            <Info/>
            <Info2/>
            <ServicesMob {...mob}/>
            <ServicesMob {...mob2}/>
            
           </>
          </>
        
      </>
    );
  }
  
  export default PageS;