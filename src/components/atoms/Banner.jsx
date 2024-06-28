import React from 'react';
import styled from 'styled-components';
import { color, space, typography } from 'styled-system';
import Box from './Box';

const bannerVariants = {
  standard: {
    backgroundColor: 'bannerStandard',
    color: 'background',
  },
  secondary: {
    backgroundColor: 'bannerSecondary',
    color: 'primary',
  },
  contrast: {
    backgroundColor: 'bannerContrast',
    color: 'background',
  },
};

const BannerWrapper = styled(Box)`
  display: flex;
  align-items: center;
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius};
  ${color}
  ${space}
  ${typography}
  background-color: ${props => props.theme.colors[bannerVariants[props.variant].backgroundColor]};
  color: ${props => props.theme.colors[bannerVariants[props.variant].color]};
`;

const IconWrapper = styled(Box)`
  margin-right: ${props => props.theme.spacing.md};
`;

const Banner = ({ variant = 'standard', icon, children, ...props }) => (
  <BannerWrapper variant={variant} {...props}>
    {icon && <IconWrapper>{icon}</IconWrapper>}
    {children}
  </BannerWrapper>
);

export default Banner;
