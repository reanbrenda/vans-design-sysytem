import React from 'react';
import Checkbox from '../atoms/Checkbox';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  argTypes: {
    checked: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
  },
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <Checkbox {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  checked: false,
  indeterminate: false,
  disabled: false,
  invalid: false,
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  indeterminate: false,
  disabled: false,
  invalid: false,
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  checked: false,
  indeterminate: true,
  disabled: false,
  invalid: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  checked: false,
  indeterminate: false,
  disabled: true,
  invalid: false,
};

export const CheckedDisabled = Template.bind({});
CheckedDisabled.args = {
  checked: true,
  indeterminate: false,
  disabled: true,
  invalid: false,
};

export const IndeterminateDisabled = Template.bind({});
IndeterminateDisabled.args = {
  checked: false,
  indeterminate: true,
  disabled: true,
  invalid: false,
};

export const Invalid = Template.bind({});
Invalid.args = {
  checked: false,
  indeterminate: false,
  disabled: false,
  invalid: true,
};

export const Hover = Template.bind({});
Hover.args = {
  checked: false,
  indeterminate: false,
  disabled: false,
  invalid: false,
};
