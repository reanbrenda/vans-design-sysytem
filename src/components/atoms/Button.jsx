import styled from 'styled-components';
import Box from './Box';
import { variant } from 'styled-system';

const buttonVariants = variant({
  prop: 'variant',
  variants: {
    primary: {
      bg: 'primary',
      color: 'textPrimary',
    },
    secondary: {
      bg: 'secondary',
      color: 'textPrimary',
    },
    tertiary: {
      bg: 'tertiary',
      color: 'textSecondary',
    },
    disabled: {
      bg: 'disabledBackground',
      color: 'disabledText',
    },
    hover: {
      bg: 'hoverBackground',
      color: 'textSecondary',
    },
    newsletter: {
      bg: 'newsletter',
      color: 'textSecondary',
    },
  },
});

const buttonSizes = variant({
  prop: 'size',
  variants: {
    small: {
      fontSize: 'sm',
      padding: '8px 16px',
    },
    medium: {
      fontSize: 'md',
      padding: '12px 24px',
    },
    large: {
      fontSize: 'lg',
      padding: '16px 32px',
    },
  },
});

const Button = styled(Box).attrs({ as: 'button' })`
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  cursor: pointer;
  ${buttonVariants}
  ${buttonSizes}

  &:disabled {
    cursor: not-allowed;
  }
`;

export default Button;
