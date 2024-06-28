
// src/components/atoms/Flex.jsx
import styled from 'styled-components';
import Box from './Box';

const Flex = styled(Box)`
  display: flex;
  gap: ${({ gap, theme }) => theme.spacing[gap] || theme.spacing.md};
  justify-content: ${({ justifyContent, theme }) => theme.flex.justifyContent[justifyContent] || theme.flex.justifyContent.start};
  align-items: ${({ alignItems, theme }) => theme.flex.alignItems[alignItems] || theme.flex.alignItems.stretch};
`;

Flex.defaultProps = {
  gap: 'md',
  justifyContent: 'start',
  alignItems: 'stretch',
};

export default Flex;

