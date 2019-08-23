import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';
import Wrapper from './Wrapper';

function ListItem(props) {
  const test = props.item;
  return (
    <Wrapper>
      <Item {...props}>{test.title}</Item>
    </Wrapper>
  );
}

ListItem.propTypes = {
  item: PropTypes.any,
};

export default ListItem;
