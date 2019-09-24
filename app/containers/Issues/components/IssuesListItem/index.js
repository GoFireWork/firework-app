import React, { useState } from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

import Popup from 'components/Popup';
import Button from 'components/Button';
import CloseIcon from 'components/CloseIcon';
import Modal from 'components/Modal';
import Item from './Item';
import Wrapper, { Span, Content, Title, Header, ModalWrapper } from './Styled';

function ListItem(props) {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState('');
  const issue = props.item;
  const title = (
    <a href={issue.html_url} target="_blank" title={issue.title}>
      {issue.title}
    </a>
  );
  const content = (
    <ModalWrapper>
      <pre>
        {issue.body.length ? parse(issue.body) : 'No description provided.'}
      </pre>
    </ModalWrapper>
  );
  return (
    <>
      <Wrapper onClick={() => props.selectIssue(issue.id)}>
        <Item {...props}>
          <Title onClick={() => setOpen(!open)}> {issue.title}</Title>
          <Content onClick={() => setVisible(true)} role="presentation">
            $: {amount || '?'}
          </Content>
          {visible && (
            <Popup
              content={
                <div>
                  <Header>
                    <span>
                      Enter dollar amount to pay upon completion of issue
                    </span>
                    <CloseIcon click={setVisible} />
                  </Header>
                  <input
                    name="amount"
                    placeholder="$"
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
      {open && (
        <Modal width={50} title={title} onClose={setOpen} content={content} />
      )}
    </>
  );
}

ListItem.propTypes = {
  item: PropTypes.any,
  selectIssue: PropTypes.func,
};

export default ListItem;
