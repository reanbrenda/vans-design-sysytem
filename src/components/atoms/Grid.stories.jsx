import React from 'react';
import Grid from '../atoms/Grid';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

export default {
  title: 'Components/Grid',
  component: Grid,
  argTypes: {
    columns: { control: 'text' },
    gridGap: { control: 'select', options: Object.keys(theme.grid.gap) },
  },
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <Grid {...args}>
      <div style={{ background: '#FF0000', height: '50px' }}>Item 1</div>
      <div style={{ background: '#00FF00', height: '50px' }}>Item 2</div>
      <div style={{ background: '#0000FF', height: '50px' }}>Item 3</div>
    </Grid>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  columns: 'repeat(3, 1fr)',
  gridGap: 'md',
};
