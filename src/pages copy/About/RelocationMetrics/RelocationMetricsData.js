import React, { useState } from 'react';
import {
    Column1, Column2,
    Column3,
    MetricsDataRow,
    MetricsDataSection,
    MetricsDataWrapper
} from './RelocationMetricsElements';






const MetricsData = () => {
    const [isOpen, setIsOpen] = useState(false)
   
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
    
      
         
     
      <>
     <MetricsDataSection >
        
         <MetricsDataWrapper>
             <MetricsDataRow>
                <Column1>

                </Column1>
                
                <Column2>
             
                </Column2>
                
                <Column3>
                
                  
                </Column3>
             </MetricsDataRow>
         </MetricsDataWrapper>
     </MetricsDataSection>

      </>
    
    );
  }
  
  export default MetricsData;
