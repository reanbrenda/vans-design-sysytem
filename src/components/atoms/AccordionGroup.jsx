import React, { useState } from 'react';
import Accordion from './Accordion';
import Box from './Box';

const AccordionGroup = ({ accordions, singleOpen }) => {
  const [openIndex, setOpenIndex] = useState(singleOpen ? null : []);

  const toggleAccordion = index => {
    if (singleOpen) {
      setOpenIndex(openIndex === index ? null : index);
    } else {
      setOpenIndex(prevState =>
        prevState.includes(index)
          ? prevState.filter(i => i !== index)
          : [...prevState, index]
      );
    }
  };

  return (
    <Box>
      {accordions.map((accordion, index) => (
        <Accordion
          key={index}
          title={accordion.title}
          isOpen={
            singleOpen ? openIndex === index : openIndex.includes(index)
          }
          toggleAccordion={() => toggleAccordion(index)}
        >
          {accordion.content}
        </Accordion>
      ))}
    </Box>
  );
};

export default AccordionGroup;
