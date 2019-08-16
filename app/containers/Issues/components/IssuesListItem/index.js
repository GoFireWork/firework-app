import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';
import Wrapper from './Wrapper';

function ListItem(props) {
  const issue = props.item;
  return (
    <Wrapper>
      <Item>{issue.title}</Item>
      <em>{issue.body}</em>
    </Wrapper>
  );
}

ListItem.propTypes = {
  item: PropTypes.any,
};

export default ListItem;
