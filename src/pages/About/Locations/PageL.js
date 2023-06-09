import React, {useState} from 'react';
import Locations from './Locations';
import maps from './LocationsImg/maps.svg'
import { LocationsDemoHeader, LocationsHeaderContainer, LocationsDemographicContainer, 
         LocationsDemoImg  } from './LocationsElements';
import LocationsGeo from './LocationsGeo';
import Info from './Info';
import { pack1, pack2, geo } from './Data';
const PageL = () => {
    const [isOpen, setIsOpen] = useState(false)
   
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
      <>
          <>
            <>
            <LocationsHeaderContainer id={'/locations'} >
             Here’s a closer look at our established locations!
            </LocationsHeaderContainer>

            <Locations {...pack1}/>
            <Locations {...pack2}/>

            <LocationsDemographicContainer id={'geographic'}>
              <LocationsDemoHeader>Future Demographic Expansion</LocationsDemoHeader>
              <LocationsGeo {...geo}/>
              </LocationsDemographicContainer>
            <Info id={'info'}/>
           
            
           </>
          </>
        
      </>
    );
  }
  
  export default PageL;