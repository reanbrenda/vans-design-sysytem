import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import TwoFactorAuth from './TwoFactorAuth';

export default {
  title: 'Pages/TwoFactorAuth',
  component: TwoFactorAuth,
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <TwoFactorAuth {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};
