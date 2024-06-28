import styled from 'styled-components';
import Box from './Box';

const Grid = styled(Box)`
  display: grid;
  grid-template-columns: ${({ columns, theme }) => columns || theme.grid.columns.default};
  gap: ${({ gridGap, theme }) => theme.grid.gap[gridGap] || theme.grid.gap.md};
`;

Grid.defaultProps = {
  columns: 'repeat(3, 1fr)',
  gridGap: 'md',
};

export default Grid;
