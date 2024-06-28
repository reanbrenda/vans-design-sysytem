import React from 'react';
import Text from '../atoms/Text';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

export default {
  title: 'Typography/Text',
  component: Text,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'label', 'subtitle1', 'caption', 'captionBold', 'overline'],
      },
    },
    children: { control: 'text' },
  },
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <Text {...args} />
  </ThemeProvider>
);

export const Heading1 = Template.bind({});
Heading1.args = {
  variant: 'h1',
  children: 'Shoes for skateboarding',
};

export const Heading2 = Template.bind({});
Heading2.args = {
  variant: 'h2',
  children: 'Shoes for skateboarding',
};

export const Heading3 = Template.bind({});
Heading3.args = {
  variant: 'h3',
  children: 'Shoes for skateboarding',
};

export const Heading4 = Template.bind({});
Heading4.args = {
  variant: 'h4',
  children: 'Shoes for skateboarding',
};

export const Heading5 = Template.bind({});
Heading5.args = {
  variant: 'h5',
  children: 'Shoes for skateboarding',
};

export const Heading6 = Template.bind({});
Heading6.args = {
  variant: 'h6',
  children: 'Shoes for skateboarding',
};

export const Paragraph = Template.bind({});
Paragraph.args = {
  variant: 'p',
  children: 'This is a paragraph.',
};

export const Label = Template.bind({});
Label.args = {
  variant: 'label',
  children: 'This is a label.',
};

export const Subtitle1 = Template.bind({});
Subtitle1.args = {
  variant: 'subtitle1',
  children: 'Almost before we knew it, we had left the ground.',
};

export const Caption = Template.bind({});
Caption.args = {
  variant: 'caption',
  children: 'Almost before we knew it, we had left the ground.',
};

export const CaptionBold = Template.bind({});
CaptionBold.args = {
  variant: 'captionBold',
  children: 'Almost before we knew it, we had left the ground.',
};

export const Overline = Template.bind({});
Overline.args = {
  variant: 'overline',
  children: 'Almost before we knew it, we had left the ground.',
};
