import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import StandardCard from '../atoms/StandardCard';
import Text from '../atoms/Text';

export default {
  title: 'Components/StandardCard',
  component: StandardCard,
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <StandardCard {...args}>
      <Text fontSize="md" color="black">This is a standard card with some content inside.</Text>
    </StandardCard>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  p: 'md',
};
