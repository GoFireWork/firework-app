import React, { useState } from 'react';

import { Helmet } from 'react-helmet';

import Button from '../../components/Button';
import metaDescriptionImage from './metaDescription.png';

import {
  Wrapper,
  Label,
  Tips,
  Title,
  Content,
  Input,
} from './styled';

function SEOSettings() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function saveData() {
    console.log(`updating website data`);
  }

  return (
    <div>
      <Helmet>
        <title>FireWork - SEO Settings</title>
        <meta
          name="description"
          content="FireWork Change your website title and description"
        />
      </Helmet>
      <Wrapper>
        <div>
          <h2>SEO Settings</h2>
          <h3>Your Website Title</h3>
          <Label htmlFor="1">
            Current
            <Input id="1" type="radio" name="website-title" />
          </Label>
          <Label>
            Use domain
            <Input type="radio" name="website-title" />
          </Label>
          <Label>
            Other
            <Input type="radio" name="website-title" defaultChecked />
          </Label>
          <Label>
            <Input
              name="website-title-input"
              onChange={e => setTitle(e.target.value)}
              placeholder="New website title"
            />
          </Label>

          <h3>Your Website Description</h3>
          <Label>
            Stick with Current
            <Input type="radio" name="website-description" />
          </Label>
          <Label>
            Other
            <Input type="radio" name="website-description" />
          </Label>
          <Label>
            New description
            <Input
              name="website-description-input"
              onChange={e => setDescription(e.target.value)}
              placeholder="Enter desired website description"
              defaultChecked
            />
          </Label>
          <Button style={{ float: 'left' }} positive onClick={saveData}>
            Save
          </Button>
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
          <img src={metaDescriptionImage} alt="html meta-description example" />
        </Tips>
      </Wrapper>
    </div>
  );
}

export default SEOSettings;
