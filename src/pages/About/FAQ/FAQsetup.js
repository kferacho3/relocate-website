import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { FiMinus, FiPlus } from 'react-icons/fi';
//import { Data } from './Data/DataServices';

import { AccContainer, Container, Dropdown, FAQAnswer, FAQCaption, FAQHeader, FAQQuestion, Wrap } from './FAQElements';



const FAQsetup = ({data}) => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <>
   <FAQHeader >FAQ</FAQHeader>
    <AccContainer  id="faq" >
    
    <IconContext.Provider value={{ color: '#ffffff', size: '25px' }}>
    
        
  
        
        <Container >
        
          {data.map((item, index) => {
            return (
              <>
              
                <Wrap onClick={() => toggle(index)} key={index} >
                  <FAQQuestion >{item.question}</FAQQuestion>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <FAQAnswer>{item.answer}</FAQAnswer>
                    <FAQCaption>{item.caption}</FAQCaption>
                    
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      
    </IconContext.Provider>
    </AccContainer>
    </>
  );
};

export default FAQsetup;