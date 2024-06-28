import React from 'react';
import styled from 'styled-components';
import Box from './Box';
import Text from './Text';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

const CardWrapper = styled(Box)`
  background: ${props => props.theme.colors.cardBackground};
  border: 1px solid ${props => props.theme.colors.cardBorder};
  border-radius: ${props => props.theme.borderRadius};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: ${props => props.theme.sizes.productCardImageHeight};
  object-fit: cover;
`;

const CardContent = styled(Box)`
  padding: ${props => props.theme.spacing.md};
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardFooter = styled(Box)`
  padding: ${props => props.theme.spacing.md};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.theme.colors.background};
  border-top: 1px solid ${props => props.theme.colors.cardBorder};
`;

const ProductCard = ({ title, subtitle, price, imageUrl, onCartClick, onHeartClick, ...props }) => (
  <CardWrapper {...props}>
    {imageUrl && <CardImage src={imageUrl} alt={title} />}
    <CardContent>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <FaShoppingCart onClick={onCartClick} />
        <FaHeart onClick={onHeartClick} />
      </Box>
      <Text variant="subtitle1" mt={3}>{subtitle}</Text>
      <Text variant="h5" mt={2}>{title}</Text>
      <CardFooter>
        <Text variant="h6">{price}</Text>
        <Text variant="label">See Colors</Text>
      </CardFooter>
    </CardContent>
  </CardWrapper>
);

export default ProductCard;


