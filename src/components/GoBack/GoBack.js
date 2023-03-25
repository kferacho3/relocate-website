import React, {useState} from 'react';

import { GoBackContainer, GoBackIcon, GButtonText} from './GoBackElements';

import gb from '../../images/GoBack.svg'
const GoBack = ({ toggle}) => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }


    return (
        <>
        
                      
            
        <GoBackContainer>
  
        <GoBackIcon to='/' onMouseEnter={onHover} 
                    onMouseLeave={onHover} 
                    onClick={toggle} 
                     style={{ backgroundImage:`url(${gb})` }}>
                     <GButtonText>
                         </GButtonText>
                     </GoBackIcon>

        </GoBackContainer>
     
        </>
    );
};

export default GoBack;