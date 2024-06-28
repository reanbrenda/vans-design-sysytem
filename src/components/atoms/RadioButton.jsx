import React from 'react';
import styled from 'styled-components';
import { space, layout, color, typography } from 'styled-system';
import { FaCheck } from 'react-icons/fa';

const RadioButtonWrapper = styled.label`
  display: flex;
  align-items: center;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  ${space}
  ${layout}
`;

const HiddenRadioButton = styled.input.attrs({ type: 'radio' })`
  opacity: 0;
  position: absolute;
  pointer-events: none;
`;

const StyledRadioButton = styled.div`
  width: ${props => props.theme.sizes.checkbox};
  height: ${props => props.theme.sizes.checkbox};
  background: ${props => props.theme.colors.radioDefault};
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s, border-color 0.3s;
  ${color}
  ${layout}

  ${HiddenRadioButton}:checked + & {
    background: ${props => props.theme.colors.radioChecked};
    border-color: ${props => props.theme.colors.radioChecked};
  }

  ${HiddenRadioButton}:disabled + & {
    background: ${props => props.theme.colors.radioDisabled};
    border-color: ${props => props.theme.colors.radioDisabled};
    cursor: not-allowed;
  }

  ${HiddenRadioButton}:checked:disabled + & {
    background: ${props => props.theme.colors.radioCheckedDisabled};
    border-color: ${props => props.theme.colors.radioCheckedDisabled};
  }

  svg {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
    color: ${props => props.theme.colors.background};
  }
`;

const RadioButtonLabel = styled.span`
  margin-left: ${props => props.theme.spacing.sm};
  ${typography}
`;

const RadioButton = ({ className, checked, disabled, label, ...props }) => (
  <RadioButtonWrapper disabled={disabled} {...props}>
    <HiddenRadioButton checked={checked} disabled={disabled} {...props} />
    <StyledRadioButton checked={checked} disabled={disabled}>
      <FaCheck size={10} />
    </StyledRadioButton>
    {label && <RadioButtonLabel>{label}</RadioButtonLabel>}
  </RadioButtonWrapper>
);

export default RadioButton;
