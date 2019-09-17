import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Popup from 'components/Popup';
import Button from 'components/Button';
import Item from './Item';
import Wrapper, { Span } from './Wrapper';

function ListItem(props) {
  const [visible, setVisible] = useState(false);
  const [amount, setAmount] = useState('');
  const issue = props.item;

  return (
    <Wrapper onClick={() => props.selectIssue(issue.id)}>
      <Item {...props}>
        <span> {issue.title}</span>
        <div
          style={{
            flex: 1,
            whiteSpace: 'nowrap',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
          onClick={() => setVisible(true)}
          role="presentation"
        >
          $: {amount || '?'}
        </div>
        {visible && (
          <Popup
            content={
              <div>
                Enter an amount to pay on successful
                <input
                  name="amount"
                  type="number"
                  value={amount}
                  onChange={e => setAmount(e.target.value)}
                />
                <Span>
                  <Button>Submit</Button>
                </Span>
              </div>
            }
            visible={visible}
            setVisible={setVisible}
          />
        )}
      </Item>
      <em>{issue.body}</em>
    </Wrapper>
  );
}

ListItem.propTypes = {
  item: PropTypes.any,
  selectIssue: PropTypes.func,
};

export default ListItem;
