import React from 'react';
import styled from 'styled-components';
import { color, space, typography } from 'styled-system';
import Box from './Box';

const badgeVariants = {
  red: {
    backgroundColor: 'primary',
    color: 'background',
  },
  green: {
    backgroundColor: 'secondary',
    color: 'background',
  },
};

const BadgeWrapper = styled(Box)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: ${props => props.theme.fontSizes.badge};
  line-height: ${props => props.theme.lineHeights.badge};
  ${color}
  ${space}
  ${typography}
  background-color: ${props => props.theme.colors[badgeVariants[props.variant].backgroundColor]};
  color: ${props => props.theme.colors[badgeVariants[props.variant].color]};
  border-radius: ${props => (props.shape === 'circle' ? '50%' : props.theme.borderRadius)};
  width: ${props => (props.shape === 'circle' ? '24px' : 'auto')};
  height: ${props => (props.shape === 'circle' ? '24px' : 'auto')};
  padding: ${props => (props.shape === 'circle' ? '0' : '0 8px')};
`;

const Badge = ({ variant = 'red', shape = 'circle', children, ...props }) => (
  <BadgeWrapper variant={variant} shape={shape} {...props}>
    {children}
  </BadgeWrapper>
);

export default Badge;
