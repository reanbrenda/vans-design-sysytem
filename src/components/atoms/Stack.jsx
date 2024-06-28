import styled from 'styled-components';
import Box from './Box';

const Stack = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${({ spacing, theme }) => theme.spacing[spacing] || theme.spacing.md};
`;

Stack.defaultProps = {
  spacing: 'md',
};

export default Stack;

