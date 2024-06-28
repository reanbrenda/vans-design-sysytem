import React from 'react';
import styled from 'styled-components';
import { space, layout, color, border } from 'styled-system';
import { FaCheck, FaMinus } from 'react-icons/fa';

const CheckboxWrapper = styled.label`
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

const StyledCheckbox = styled.div`
  width: ${props => props.theme.sizes.checkbox};
  height: ${props => props.theme.sizes.checkbox};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.checkboxDefault};
  border: 1px solid ${props => props.theme.colors.checkboxDefault};
  border-radius: ${props => props.theme.borderRadius};
  transition: all 150ms;

  ${HiddenCheckbox}:checked + & {
    background: ${props => props.theme.colors.checkboxChecked};
    border-color: ${props => props.theme.colors.checkboxChecked};
  }

  ${HiddenCheckbox}:indeterminate + & {
    background: ${props => props.theme.colors.checkboxIndeterminate};
    border-color: ${props => props.theme.colors.checkboxIndeterminate};
  }

  ${HiddenCheckbox}:disabled + & {
    background: ${props => props.theme.colors.checkboxDisabled};
    border-color: ${props => props.theme.colors.checkboxDisabled};
  }

  ${HiddenCheckbox}:hover:not(:checked):not(:indeterminate):not(:disabled) + & {
    background: ${props => props.theme.colors.checkboxHover};
    border-color: ${props => props.theme.colors.checkboxHover};
  }

  ${HiddenCheckbox}:invalid + & {
    border-color: ${props => props.theme.colors.checkboxInvalid};
  }

  svg {
    visibility: ${props => (props.checked || props.indeterminate ? 'visible' : 'hidden')};
    color: ${props => props.theme.colors.background};
  }
`;

const Checkbox = ({ className, checked, indeterminate, disabled, invalid, ...props }) => (
  <CheckboxWrapper disabled={disabled} {...props}>
    <HiddenCheckbox checked={checked} disabled={disabled} aria-invalid={invalid} {...props} />
    <StyledCheckbox
      checked={checked}
      indeterminate={indeterminate}
      disabled={disabled}
      invalid={invalid}
    >
      {indeterminate ? <FaMinus size={10} /> : <FaCheck size={10} />}
    </StyledCheckbox>
  </CheckboxWrapper>
);

export default Checkbox;
