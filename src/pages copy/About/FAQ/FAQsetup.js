import React, { useState } from 'react';
import {
  AccordionContainer,
  AccordionContent,
  AccordionTitle,
  AccordionWrapper,
  Button,
  Container,
  Icon,
} from './FAQElements';

const FAQsetup = ({ data }) => {
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleAccordion = (itemId) => {
    setExpandedItem((prevItem) => (prevItem === itemId ? null : itemId));
  };

  return (
    <Container>
      <h2>Frequently Asked Questions</h2>
      <AccordionContainer>
        {data.map((item, index) => (
          <AccordionWrapper key={index}>
            <Button
              aria-expanded={expandedItem === `accordion-button-${index + 1}`}
              onClick={() => toggleAccordion(`accordion-button-${index + 1}`)}
            >
              <AccordionTitle>{item.question}</AccordionTitle>
              <Icon aria-hidden="true"></Icon>
            </Button>
            <AccordionContent expanded={expandedItem === `accordion-button-${index + 1}`}>
              <p>{item.answer}</p>
            </AccordionContent>
          </AccordionWrapper>
        ))}
      </AccordionContainer>
    </Container>
  );
};

export default FAQsetup;
