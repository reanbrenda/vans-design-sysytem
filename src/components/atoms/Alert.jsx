import React from 'react';
import styled from 'styled-components';
import { color, space, layout, typography } from 'styled-system';
import Box from './Box';

const alertVariants = {
  standard: {
    backgroundColor: 'alertStandard',
    color: 'background',
  },
  secondary: {
    backgroundColor: 'alertSecondary',
    color: 'alertStandard',
  },
  success: {
    backgroundColor: 'alertSuccess',
    color: 'textPrimary',
  },
  contrast: {
    backgroundColor: 'alertContrast',
    color: 'background',
  },
};

const AlertWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: ${props => props.theme.borderRadius};
  padding: ${props => props.theme.spacing.md};
  ${color}
  ${space}
  ${layout}
  ${typography}
  background-color: ${props => props.theme.colors[alertVariants[props.variant].backgroundColor]};
  color: ${props => props.theme.colors[alertVariants[props.variant].color]};
`;

const CloseButton = styled(Box)`
  cursor: pointer;
  padding-left: ${props => props.theme.spacing.md};
  color: inherit;
`;

const Alert = ({ variant = 'standard', children, onClose, ...props }) => (
  <AlertWrapper variant={variant} {...props}>
    {children}
    {onClose && <CloseButton onClick={onClose}>✕</CloseButton>}
  </AlertWrapper>
);

export default Alert;
