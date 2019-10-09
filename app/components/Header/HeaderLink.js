import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  display: inline-flex;
   padding: ${props => (props.link ? '0.25em 0em;' : '0.25em 2em;')} 
  margin: 0.5em;
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
  border: ${props => (props.link ? 'none;' : '2px solid #41addd;')}
  color: ${props => (props.link ? 'white;' : '#41addd;')}
  &:active {
    background: ${props => (props.link ? 'none;' : '2px solid #41addd;')} 
    color: ${props => (props.link ? 'none;' : '2px solid #fff;')} 
  }
`;
