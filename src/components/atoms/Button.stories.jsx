import React from 'react';
import Button from '../atoms/Button';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

export default {
  title: 'Form/Button',
  component: Button,
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'tertiary', 'disabled', 'hover', 'newsletter'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    children: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <Button {...args} />
  </ThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  size: 'medium',
  children: 'Primary Button',
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  size: 'medium',
  children: 'Secondary Button',
  disabled: false,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: 'tertiary',
  size: 'medium',
  children: 'Tertiary Button',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'disabled',
  size: 'medium',
  children: 'Disabled Button',
  disabled: true,
};

export const Hover = Template.bind({});
Hover.args = {
  variant: 'hover',
  size: 'medium',
  children: 'Hover Button',
  disabled: false,
};

export const Newsletter = Template.bind({});
Newsletter.args = {
  variant: 'newsletter',
  size: 'medium',
  children: 'Newsletter Button',
  disabled: false,
};

export const Small = Template.bind({});
Small.args = {
  variant: 'primary',
  size: 'small',
  children: 'Small Button',
  disabled: false,
};

export const Large = Template.bind({});
Large.args = {
  variant: 'primary',
  size: 'large',
  children: 'Large Button',
  disabled: false,
};
