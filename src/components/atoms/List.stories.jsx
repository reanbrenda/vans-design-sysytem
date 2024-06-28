import React from 'react';
import List from '../atoms/List';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

export default {
  title: 'Text/List',
  component: List,
  subcomponents: { ListItem: List.Item },
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <List {...args}>
      <List.Item>List Item 1</List.Item>
      <List.Item>List Item 2</List.Item>
      <List.Item>List Item 3</List.Item>
    </List>
  </ThemeProvider>
);

export const Unordered = Template.bind({});
Unordered.args = {
  ordered: false,
};

export const Ordered = Template.bind({});
Ordered.args = {
  ordered: true,
};
