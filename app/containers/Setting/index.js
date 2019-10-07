import React, { useState } from 'react';

import { Helmet } from 'react-helmet';

import Button from '../../components/Button';

import { Wrapper } from './Styled';

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
        <br />
        <Button positive onClick={saveData}>
          Send
        </Button>
      </Wrapper>
    </div>
  );
}

export default Setting;
