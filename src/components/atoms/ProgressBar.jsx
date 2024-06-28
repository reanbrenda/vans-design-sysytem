import React from 'react';
import styled from 'styled-components';
import Box from './Box';

const ProgressBarWrapper = styled(Box)`
  width: 100%;
  height: ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius};
  overflow: hidden;
`;

const ProgressBarFill = styled(Box)`
  height: 100%;
  transition: width 0.3s;
`;

const ProgressBar = ({ value, ...props }) => (
  <ProgressBarWrapper bg="progressBarBackground" {...props}>
    <ProgressBarFill width={`${value}%`} bg="progressBarForeground" />
  </ProgressBarWrapper>
);

export default ProgressBar;
