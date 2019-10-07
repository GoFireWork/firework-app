import { css } from 'styled-components';

const buttonStyles = css`
  display: inline-block;
  box-sizing: border-box;
  padding: 0.25em 2em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  border: ${props => {
    if (props.negative) {
      return '2px solid var(--light-red-color);';
    }
    if (props.positive) {
      return '2px solid var(--light-green-color);';
    }
    return '2px solid var(--light-blue-color);';
  }}
  color: white;
  background-color: ${props => {
    if (props.negative) {
      return 'var(--light-red-color);';
    }
    if (props.positive) {
      return 'var(--light-green-color);';
    }
    return 'var(--light-blue-color);';
  }}
  &:active {
  background-color: ${props => {
    if (props.negative) {
      return 'var(--dark-red-color);';
    }
    if (props.positive) {
      return 'var(--dark-green-color);';
    }
    return 'var(--dark-blue-color);';
  }}
    color: #fff;
  }
`;

export default buttonStyles;
