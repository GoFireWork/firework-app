/**
 *
 * ToolTip
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Container from './Container';
import Tooltiptext from './Tooltiptext';

function Tooltip(props) {
  return (
    <Container>
      <div>
        {props.children}
        <Tooltiptext classic={props.classic} width={props.width}>
          {props.text}
        </Tooltiptext>
      </div>
    </Container>
  );
}

Tooltip.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.array,
  ]),
  classic: PropTypes.bool,
  text: PropTypes.string,
  width: PropTypes.string,
};
export default Tooltip;
