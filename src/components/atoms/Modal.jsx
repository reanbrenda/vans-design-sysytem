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
  background: ${props => props.theme.colors.background};
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

const Button = styled.button`
  margin-right: ${props => props.theme.spacing.md};
  &:last-child {
    margin-right: 0;
  }
`;

const Modal = ({ title, children, onClose, primaryButtonText, secondaryButtonText, primaryButtonAction, secondaryButtonAction, centerButtons, ...props }) => (
  <ModalOverlay>
    <ModalContent {...props}>
      <CloseButton onClick={onClose}>
        <FaTimes />
      </CloseButton>
      <Text variant="h5" mb={4}>{title}</Text>
      <Box mb={4}>
        {children}
      </Box>
      <Box display="flex" justifyContent={centerButtons ? 'center' : 'space-between'}>
        {primaryButtonText && <Button onClick={primaryButtonAction}>{primaryButtonText}</Button>}
        {secondaryButtonText && <Button onClick={secondaryButtonAction}>{secondaryButtonText}</Button>}
      </Box>
    </ModalContent>
  </ModalOverlay>
);

export default Modal;
