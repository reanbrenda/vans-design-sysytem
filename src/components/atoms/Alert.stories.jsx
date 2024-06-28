import React from 'react';
import Alert from '../atoms/Alert';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['standard', 'secondary', 'success', 'contrast'],
      },
    },
    children: { control: 'text' },
    onClose: { action: 'closed' },
  },
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <Alert {...args} />
  </ThemeProvider>
);

export const Standard = Template.bind({});
Standard.args = {
  variant: 'standard',
  children: 'This is a standard alert box',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'This is a secondary alert box',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  children: 'This is a success alert box',
};

export const Contrast = Template.bind({});
Contrast.args = {
  variant: 'contrast',
  children: 'This is a contrast alert box',
};
