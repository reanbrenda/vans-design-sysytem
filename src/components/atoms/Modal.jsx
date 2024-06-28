import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import Box from './Box';
import Text from './Text';

const ModalOverlay = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled(Box)`
  background: ${props => props.theme.colors.cardBackground};
  padding: ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius};
  max-width: 500px;
  width: 100%;
  position: relative;
`;

const CloseButton = styled(Box)`
  position: absolute;
  top: ${props => props.theme.spacing.md};
  right: ${props => props.theme.spacing.md};
  cursor: pointer;
`;

const Button = styled(Box).attrs({ as: 'button' })`
  margin-bottom: ${props => props.theme.spacing.md};
  &:last-child {
    margin-bottom: 0;
  }
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.textSecondary};
  cursor: pointer;
`;

const Modal = ({ title, children, onClose, primaryButtonText, secondaryButtonText, primaryButtonAction, secondaryButtonAction, centerContent, ...props }) => (
  <ModalOverlay>
    <ModalContent {...props}>
      <CloseButton onClick={onClose}>
        <FaTimes />
      </CloseButton>
      <Text as="h5" mb={4} textAlign={centerContent ? 'center' : 'left'}>{title}</Text>
      <Box mb={4} textAlign={centerContent ? 'center' : 'left'}>
        {children}
      </Box>
      <Box display="flex" flexDirection="column" alignItems="stretch">
        {primaryButtonText && <Button onClick={primaryButtonAction}>{primaryButtonText}</Button>}
        {secondaryButtonText && <Button onClick={secondaryButtonAction}>{secondaryButtonText}</Button>}
      </Box>
    </ModalContent>
  </ModalOverlay>
);

export default Modal;
