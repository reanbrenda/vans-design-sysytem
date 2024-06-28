import React from 'react';
import ProductCard from '../atoms/ProductCard';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

export default {
  title: 'Components/ProductCard',
  component: ProductCard,
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    price: { control: 'text' },
    imageUrl: { control: 'text' },
    onCartClick: { action: 'cart clicked' },
    onHeartClick: { action: 'heart clicked' },
  },
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <ProductCard {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Product Name',
  subtitle: 'Product Line',
  price: '€125,00',
  imageUrl: 'https://via.placeholder.com/300x200',
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
  title: 'Product Name',
  subtitle: 'Product Line',
  price: '€125,00',
};

export const WithCustomImage = Template.bind({});
WithCustomImage.args = {
  title: 'Product Name',
  subtitle: 'Product Line',
  price: '€125,00',
  imageUrl: 'https://via.placeholder.com/300x400',
};
