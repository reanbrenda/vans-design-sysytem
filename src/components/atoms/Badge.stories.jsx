import React from 'react';
import Badge from '../atoms/Badge';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['red', 'green'],
      },
    },
    shape: {
      control: {
        type: 'select',
        options: ['circle', 'rounded'],
      },
    },
    children: { control: 'text' },
  },
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <Badge {...args} />
  </ThemeProvider>
);

export const RedCircle = Template.bind({});
RedCircle.args = {
  variant: 'red',
  shape: 'circle',
  children: '1',
};

export const GreenCircle = Template.bind({});
GreenCircle.args = {
  variant: 'green',
  shape: 'circle',
  children: '1',
};

export const RedRounded = Template.bind({});
RedRounded.args = {
  variant: 'red',
  shape: 'rounded',
  children: '10',
};

export const GreenRounded = Template.bind({});
GreenRounded.args = {
  variant: 'green',
  shape: 'rounded',
  children: '10',
};
