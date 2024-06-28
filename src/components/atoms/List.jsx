import styled from 'styled-components';
import { space, typography, color } from 'styled-system';
import Box from './Box';

const List = styled(Box).attrs((props) => ({
  as: props.ordered ? 'ol' : 'ul',
}))`
  ${space}
  ${typography}
  ${color}
  list-style-type: ${(props) => (props.ordered ? 'decimal' : 'disc')};
  padding-left: ${(props) => props.theme.spacing.md};
`;

const ListItem = styled(Box).attrs(() => ({
  as: 'li',
}))`
  ${space}
  ${typography}
  ${color}
  font-size: ${(props) => props.theme.fontSizes.p};
  line-height: ${(props) => props.theme.lineHeights.p};
  color: ${(props) => props.theme.colors.textPrimary};
`;

List.Item = ListItem;

export default List;

