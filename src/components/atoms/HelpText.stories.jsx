import React from 'react';
import HelpText from '../atoms/HelpText';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

export default {
  title: 'Text/HelpText',
  component: HelpText,
  argTypes: {
    children: { control: 'text' },
    error: { control: 'boolean' },
  },
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <HelpText {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  children: 'This is a help text.',
};

export const Error = Template.bind({});
Error.args = {
  children: 'This is an error message.',
  error: true,
};
