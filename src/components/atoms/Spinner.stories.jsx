import React from 'react';
import Spinner from '../atoms/Spinner';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

export default {
  title: 'Components/Spinner',
  component: Spinner,
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <Spinner {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};

