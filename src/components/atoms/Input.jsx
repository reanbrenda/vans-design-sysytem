import React from 'react';
import styled from 'styled-components';
import { space, layout, typography } from 'styled-system';
import Box from './Box';
import Text from './Text';

const StyledInput = styled.input`
  border: 1px solid ${props => (props.error ? props.theme.colors.primary : props.theme.colors.secondary)};
  border-radius: ${props => props.theme.borderRadius};
  padding: ${props => props.theme.spacing.md};
  font-size: ${props => props.theme.fontSizes.md};
  color: ${props => props.theme.colors.textSecondary};
  width: 60%;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.neutral300};
  }

  &:disabled {
    background-color: ${props => props.theme.colors.disabledBackground};
    color: ${props => props.theme.colors.disabledText};
  }

  ${space}
  ${layout}
  ${typography}
`;

const HelperText = styled(Text)`
  color: ${props => (props.error ? props.theme.colors.primary : props.theme.colors.textSecondary)};
  font-size: ${props => props.theme.fontSizes.sm};
  margin-top: ${props => props.theme.spacing.sm};
`;

const Input = ({ label, error, helperText, ...props }) => {
  return (
    <Box >
      {label && <Text as="label" mb="sm">{label}</Text>}
      <StyledInput error={error} {...props} />
      {helperText && <HelperText error={error}>{helperText}</HelperText>}
    </Box>
  );
};

export default Input;
