import React from 'react';
import styled from 'styled-components';
import { space, color, typography, layout, border } from 'styled-system';
import Box from './Box';
import Text from './Text';

const AccordionWrapper = styled(Box)`
  border-bottom: 1px solid ${props => props.theme.colors.textSecondary};
`;

const AccordionHeader = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing.md} 0;
  cursor: pointer;
  ${typography}
  ${color}
`;

const AccordionContent = styled(Box)`
  max-height: ${props => (props.isOpen ? '1000px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  padding: ${props => (props.isOpen ? `${props.theme.spacing.md} 0` : '0')};
  ${typography}
  ${color}
`;

const Accordion = ({ title, isOpen, toggleAccordion, children, ...props }) => {
  return (
    <AccordionWrapper {...props}>
      <AccordionHeader onClick={toggleAccordion}>
        <Text variant="label">{title}</Text>
        <Text variant="label">{isOpen ? '▲' : '▶'}</Text>
      </AccordionHeader>
      <AccordionContent isOpen={isOpen} color="textSecondary">
        {children}
      </AccordionContent>
    </AccordionWrapper>
  );
};

export default Accordion;

