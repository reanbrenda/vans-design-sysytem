import React, { useState } from 'react';
import RadioButton from '../atoms/RadioButton';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    onChange: { action: 'changed' },
  },
};

const Template = (args) => {
  const [checked, setChecked] = useState(args.checked || false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <ThemeProvider theme={theme}>
      <RadioButton {...args} checked={checked} onChange={handleChange} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Default',
  checked: false,
  disabled: false,
};

export const Ticked = Template.bind({});
Ticked.args = {
  label: 'Ticked',
  checked: true,
  disabled: false,
};

export const TickedDisabled = Template.bind({});
TickedDisabled.args = {
  label: 'Ticked Disabled',
  checked: true,
  disabled: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  checked: false,
  disabled: true,
};
