import React from 'react';
import Stack from '../atoms/Stack';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

export default {
  title: 'Components/Stack',
  component: Stack,
  argTypes: {
    spacing: { control: 'select', options: Object.keys(theme.spacing) },
  },
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <Stack {...args}>
      <div style={{ background: '#FF0000', height: '50px' }}>Item 1</div>
      <div style={{ background: '#00FF00', height: '50px' }}>Item 2</div>
      <div style={{ background: '#0000FF', height: '50px' }}>Item 3</div>
    </Stack>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  spacing: 'md',
};
