import styled from 'styled-components';
import Box from './Box';

const Text = styled(Box)`
  font-family: ${(props) => props.theme.fonts.body};
  margin: 0;

  ${(props) =>
    props.variant === 'h1' &&
    `
    font-size: ${props.theme.fontSizes.h1};
    line-height: ${props.theme.lineHeights.h1};
    font-weight: bold;
  `}
  ${(props) =>
    props.variant === 'h2' &&
    `
    font-size: ${props.theme.fontSizes.h2};
    line-height: ${props.theme.lineHeights.h2};
    font-weight: bold;
  `}
  ${(props) =>
    props.variant === 'h3' &&
    `
    font-size: ${props.theme.fontSizes.h3};
    line-height: ${props.theme.lineHeights.h3};
    font-weight: bold;
  `}
  ${(props) =>
    props.variant === 'h4' &&
    `
    font-size: ${props.theme.fontSizes.h4};
    line-height: ${props.theme.lineHeights.h4};
    font-weight: bold;
  `}
  ${(props) =>
    props.variant === 'h5' &&
    `
    font-size: ${props.theme.fontSizes.h5};
    line-height: ${props.theme.lineHeights.h5};
    font-weight: bold;
  `}
  ${(props) =>
    props.variant === 'h6' &&
    `
    font-size: ${props.theme.fontSizes.h6};
    line-height: ${props.theme.lineHeights.h6};
    font-weight: bold;
  `}
  ${(props) =>
    props.variant === 'p' &&
    `
    font-size: ${props.theme.fontSizes.p};
    line-height: ${props.theme.lineHeights.p};
  `}
  ${(props) =>
    props.variant === 'span' &&
    `
    font-size: ${props.theme.fontSizes.p};
    line-height: ${props.theme.lineHeights.p};
  `}
  ${(props) =>
    props.variant === 'label' &&
    `
    font-size: ${props.theme.fontSizes.label};
    line-height: ${props.theme.lineHeights.label};
    font-weight: bold;
  `}
  ${(props) =>
    props.variant === 'subtitle1' &&
    `
    font-size: ${props.theme.fontSizes.subtitle1};
    line-height: ${props.theme.lineHeights.subtitle1};
  `}
  ${(props) =>
    props.variant === 'caption' &&
    `
    font-size: ${props.theme.fontSizes.caption};
    line-height: ${props.theme.lineHeights.caption};
  `}
  ${(props) =>
    props.variant === 'captionBold' &&
    `
    font-size: ${props.theme.fontSizes.captionBold};
    line-height: ${props.theme.lineHeights.captionBold};
    font-weight: bold;
  `}
  ${(props) =>
    props.variant === 'overline' &&
    `
    font-size: ${props.theme.fontSizes.overline};
    line-height: ${props.theme.lineHeights.overline};
    text-transform: uppercase;
  `}
`;

Text.defaultProps = {
  variant: 'p',
};

export default Text;
