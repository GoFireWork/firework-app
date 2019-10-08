import React, { useState } from 'react';

import { Helmet } from 'react-helmet';

import Button from '../../components/Button';
import scr from './tips.png';

import { Wrapper, Tips, Title, Content, FooterButton } from './Styled';

function Setting() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function saveData() {
    console.log(description, title);
  }

  return (
    <div>
      <Helmet>
        <title>FireWork</title>
        <meta name="description" content="FireWork" />
      </Helmet>
      <Wrapper>
        <div>
          <h1>Settings</h1>
          <h3>Website Title</h3>
          <div>
            <input
              type="radio"
              name="website-title"
              id="current-title"
              defaultChecked
            />
            Current
          </div>
          <div>
            <input type="radio" name="website-title" id="go-firework-title" />
            Go Firework
          </div>
          <div>
            <input type="radio" name="website-title" id="other-title" />
            Other
          </div>
          <input
            name="website-title-input"
            onChange={e => setTitle(e.target.value)}
            placeholder="Enter desired website title"
          />
          <h3>Website Description</h3>
          <div>
            <input
              type="radio"
              name="website-description"
              id="current-description"
              defaultChecked
            />
            Current
          </div>
          <div>
            <input
              type="radio"
              name="website-description"
              id="other-description"
            />
            Other
          </div>
          <input
            name="website-description-input"
            onChange={e => setDescription(e.target.value)}
            placeholder="Enter desired website description"
          />
          <FooterButton>
            <Button positive onClick={saveData}>
              Send
            </Button>
          </FooterButton>
        </div>
        <Tips>
          <Title>
            <h2>Tips</h2>
          </Title>
          <Content>
            <h4>
              Put your most important keyword in your title and description.
            </h4>
            <small>
              With supporting text below as a natural lead-in to additional
              content.
            </small>
          </Content>
          <img src={scr} alt="tips" />
        </Tips>
      </Wrapper>
    </div>
  );
}

export default Setting;
