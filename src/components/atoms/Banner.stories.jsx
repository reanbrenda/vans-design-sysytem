import React from 'react';
import Banner from '../atoms/Banner';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import { FaInfoCircle, FaClock, FaBullhorn } from 'react-icons/fa';

export default {
  title: 'Components/Banner',
  component: Banner,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['standard', 'secondary', 'contrast'],
      },
    },
    children: { control: 'text' },
  },
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <Banner {...args} />
  </ThemeProvider>
);

export const Standard = Template.bind({});
Standard.args = {
  variant: 'standard',
  icon: <FaInfoCircle />,
  children: 'This is a standard banner',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  icon: <FaClock />,
  children: 'This is a secondary banner',
};

export const Contrast = Template.bind({});
Contrast.args = {
  variant: 'contrast',
  icon: <FaBullhorn />,
  children: 'This is a contrast banner',
};
