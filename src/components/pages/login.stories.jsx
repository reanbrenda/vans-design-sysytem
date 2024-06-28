import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import Login from './Login';

export default {
  title: 'Pages/Login',
  component: Login,
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <Login {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};
