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
    <Wrapper>
      <Header>{props.title}</Header>
      <Content>{props.content}</Content>
      <Footer>{props.footer}</Footer>
    </Wrapper>
  );
}

Card.propTypes = {
  title: PropTypes.oneOf([PropTypes.string, PropTypes.instanceOf(<div />)]),
  content: PropTypes.oneOf([PropTypes.string, PropTypes.instanceOf(<div />)]),
  footer: PropTypes.oneOf([PropTypes.string, PropTypes.instanceOf(<div />)]),
};

export default Card;
