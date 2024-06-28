import React from 'react';
import styled, { keyframes } from 'styled-components';
import Box from './Box';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerWrapper = styled(Box)`
  display: inline-block;
  border: ${props => props.theme.spacing.xs} solid ${props => props.theme.colors.spinnerBackground};
  border-top: ${props => props.theme.spacing.xs} solid ${props => props.theme.colors.spinnerForeground};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const Spinner = (props) => (
  <SpinnerWrapper
    width="spinnerSize"
    height="spinnerSize"
    {...props}
  />
);

export default Spinner;
