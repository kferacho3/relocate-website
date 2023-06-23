import React, {useState} from 'react';
import JoinPack from './JoinPack';
import { hero, pack1, pack2, pack3, pack4, pack5, mob, mob2 } from './Data';
import PackHero from './PackHero';
import Info from './PackInfo';
import PackMob from './PackMob';
import PackReq from './PackReq';
const PageJP = () => {
    const [isOpen, setIsOpen] = useState(false)
   
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
      <>
          <>
            <>
            <PackHero {...hero}/>
            <Info/>
            <JoinPack id={'/pack'}  {...pack1}/>
            <JoinPack {...pack2}/>
            <JoinPack {...pack3}/>
            <JoinPack {...pack4}/    >
            <JoinPack {...pack5}/>
            <PackReq/>
            <PackMob {...mob}/>
            <PackMob {...mob2}/>

            
           </>
          </>
        
      </>
    );
  }
  
  export default PageJP;