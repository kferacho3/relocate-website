import React, {useState} from 'react';
import JoinPack from './JoinPack';
import { pack1, pack2, pack3, pack4, pack5 } from './Data';

const PageJP = () => {
    const [isOpen, setIsOpen] = useState(false)
   
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
      <>
          <>
            <>
        
            <JoinPack id={'/pack'}  {...pack1}/>
            <JoinPack {...pack2}/>
            <JoinPack {...pack3}/>
            <JoinPack {...pack4}/    >
            <JoinPack {...pack5}/>
            
           </>
          </>
        
      </>
    );
  }
  
  export default PageJP;