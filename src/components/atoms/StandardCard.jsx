import styled from 'styled-components';
import Box from './Box';

const StandardCard = styled(Box)`
  background: ${(props) => props.theme.colors.cardBackground};
  border: 1px solid ${(props) => props.theme.colors.cardBorder};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: ${(props) => props.theme.spacing.md};

`;

StandardCard.defaultProps = {
  p: 'md',
};

export default StandardCard

