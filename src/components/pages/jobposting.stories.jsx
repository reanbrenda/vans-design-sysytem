import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import JobListing from './Jobposting';

export default {
  title: 'Pages/JobListing',
  component: JobListing,
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <JobListing {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};
