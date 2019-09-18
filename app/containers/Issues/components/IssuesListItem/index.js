import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Popup from 'components/Popup';
import Button from 'components/Button';
import CloseIcon from 'components/CloseIcon';
import Item from './Item';
import Wrapper, { Span, Content, Title, Header } from './Wrapper';

function ListItem(props) {
  const [visible, setVisible] = useState(false);
  const [amount, setAmount] = useState('');
  const issue = props.item;
  return (
    <Wrapper onClick={() => props.selectIssue(issue.id)}>
      <Item {...props}>
        <Title> {issue.title}</Title>
        <Content onClick={() => setVisible(true)} role="presentation">
          $: {amount || '?'}
        </Content>
        {visible && (
          <Popup
            content={
              <div>
                <Header>
                  <span>
                    Enter an amount to pay upon successful completion of the
                    issue
                  </span>
                  <CloseIcon click={setVisible} />
                </Header>
                <input
                  name="amount"
                  value={amount}
                  onChange={e => setAmount(e.target.value)}
                />
                <Span>
                  <Button onClick={() => setVisible(false)}>Submit</Button>
                </Span>
              </div>
            }
            visible={visible}
            setVisible={setVisible}
          />
        )}
      </Item>
    </Wrapper>
  );
}

ListItem.propTypes = {
  item: PropTypes.any,
  selectIssue: PropTypes.func,
};

export default ListItem;
