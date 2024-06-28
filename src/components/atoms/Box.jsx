import styled from 'styled-components';
import {
  space,
  color,
  typography,
  layout,
  border,
  shadow,
  flexbox,
  grid,
} from 'styled-system';

const variantStyles = (variant, theme) => {
  switch (variant) {
    case 'primary':
      return {
        backgroundColor: theme.colors.primary,
        color: theme.colors.background,
      };
    case 'secondary':
      return {
        backgroundColor: theme.colors.secondary,
        color: theme.colors.background,
      };
    case 'tertiary':
      return {
        backgroundColor: theme.colors.background,
        color: theme.colors.textPrimary,
        border: `1px solid ${theme.colors.textPrimary}`,
      };
    case 'disabled':
      return {
        backgroundColor: theme.colors.disabledBackground,
        color: theme.colors.disabledText,
      };
    case 'hover':
      return {
        backgroundColor: theme.colors.hoverBackground,
        color: theme.colors.background,
      };
    case 'newsletter':
      return {
        backgroundColor: theme.colors.newsletter,
        color: theme.colors.background,
      };
    default:
      return {};
  }
};

const Box = styled.div`
  ${space}
  ${color}
  ${typography}
  ${layout}
  ${border}
  ${shadow}
  ${flexbox}
  ${grid}

  ${(props) => variantStyles(props.variant, props.theme)}
`;

export default Box;





