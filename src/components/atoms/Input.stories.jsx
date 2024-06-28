import React from 'react';
import Input from '../atoms/Input';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    label: { control: 'text' },
    error: { control: 'boolean' },
    helperText: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <Input {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter text...',
  value: '',
  helperText: '',
  error: false,
  disabled: false,
};

export const WithError = Template.bind({});
WithError.args = {
  placeholder: 'Enter text...',
  value: 'example@domain.com',
  helperText: 'Enter a valid email. Use your work email address.',
  error: true,
  disabled: false,
};
