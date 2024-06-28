import React from 'react';
import ToggleSwitch from '../atoms/ToggleSwitch';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

export default {
  title: 'Form/ToggleSwitch',
  component: ToggleSwitch,
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <ToggleSwitch {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  checked: false,
  disabled: false,
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  checked: false,
  disabled: true,
};

export const CheckedDisabled = Template.bind({});
CheckedDisabled.args = {
  checked: true,
  disabled: true,
};
