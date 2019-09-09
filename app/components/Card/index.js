/**
 *
 * Card.js
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import Header from './header';
import Content from './content';
import Footer from './footer';

function Card(props) {
  return (
    <Wrapper onClick={props.onClick}>
      {props.title && <Header>{props.title}</Header>}
      {props.content && <Content>{props.content}</Content>}
      {props.footer && <Footer>{props.footer}</Footer>}
    </Wrapper>
  );
}

Card.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  footer: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

export default Card;
