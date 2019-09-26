import styled from 'styled-components';

import buttonStyles from './buttonStyles';

const A = styled.a`
  ${buttonStyles};
`;

export default A;

export const Disabled = styled.a`
  ${buttonStyles};
  color: currentColor;
  cursor: unset;
  opacity: 0.5;
  text-decoration: none;
`;
