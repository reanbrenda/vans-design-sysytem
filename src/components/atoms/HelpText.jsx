import styled from 'styled-components';
import Box from './Box';

const HelpText = styled(Box)`
  font-size: ${(props) => props.theme.fontSizes.p};
  line-height: ${(props) => props.theme.lineHeights.p};
  color: ${(props) => (props.error ? props.theme.colors.primary : props.theme.colors.textSecondary)};
`;

export default HelpText;
