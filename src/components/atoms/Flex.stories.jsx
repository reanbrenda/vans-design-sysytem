import React from 'react';
import Flex from '../atoms/Flex';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

export default {
  title: 'Components/Flex',
  component: Flex,
  argTypes: {
    gap: { control: 'select', options: Object.keys(theme.spacing) },
    justifyContent: { control: 'select', options: Object.keys(theme.flex.justifyContent) },
    alignItems: { control: 'select', options: Object.keys(theme.flex.alignItems) },
  },
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <Flex {...args}>
      <div style={{ background: '#FF0000', height: '50px', width: '50px' }}>Item 1</div>
      <div style={{ background: '#00FF00', height: '50px', width: '50px' }}>Item 2</div>
      <div style={{ background: '#0000FF', height: '50px', width: '50px' }}>Item 3</div>
    </Flex>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  gap: 'md',
  justifyContent: 'center',
  alignItems: 'center',
};
