import React from 'react';
import styled from 'styled-components';
import { space, layout, color, border } from 'styled-system';

const ToggleSwitchWrapper = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  ${space}
  ${layout}
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  position: absolute;
  pointer-events: none;
`;

const StyledToggleSwitch = styled.div`
  width: ${props => props.theme.sizes.toggleWidth};
  height: ${props => props.theme.sizes.toggleHeight};
  background: ${props => (props.checked ? props.theme.colors.toggleOn : props.theme.colors.toggleOff)};
  border-radius: ${props => props.theme.sizes.toggleHeight};
  position: relative;
  transition: background 0.3s;
  ${color}
  ${layout}
  ${border}

  ${HiddenCheckbox}:checked + & {
    background: ${props => props.theme.colors.toggleOn};
  }

  ${HiddenCheckbox}:not(:checked) + & {
    background: ${props => props.theme.colors.toggleOff};
  }

  &::after {
    content: '';
    width: ${props => props.theme.fontSizes.toggle};
    height: ${props => props.theme.fontSizes.toggle};
    background: ${props => props.theme.colors.background};
    border-radius: 50%;
    position: absolute;
    top: ${props => props.theme.spacing.toggleGap};
    left: ${props => (props.checked ? `calc(100% - ${props.theme.fontSizes.toggle} - ${props.theme.spacing.toggleGap})` : props.theme.spacing.toggleGap)};
    transition: left 0.3s;
  }
`;

const ToggleSwitch = ({ className, checked, disabled, onChange, ...props }) => (
  <ToggleSwitchWrapper disabled={disabled} {...props}>
    <HiddenCheckbox checked={checked} disabled={disabled} onChange={onChange} {...props} />
    <StyledToggleSwitch checked={checked} disabled={disabled} />
  </ToggleSwitchWrapper>
);

export default ToggleSwitch;
