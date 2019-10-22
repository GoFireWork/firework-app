import React, { memo, useEffect, useState } from 'react';
import {
  Alert,
  Container,
  FormControl,
  InputGroup,
  Row,
  Col,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Helmet } from 'react-helmet';

import Button from '../../components/Button';
import H3 from '../../components/H3';

import { makeSelectCurrentUser } from '../../selector/app';
import {
  fetchSEOSettings,
  makeSelectSEOSettings,
  saveSEOSettings,
} from '../../action/seo';

function SEOSettings(props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    props.fetchSEOSettings();
  });

  return (
    <div>
      <Helmet>
        <title>FireWork - SEO Settings</title>
        <meta
          name="description"
          content="Set your website title and description"
        />
      </Helmet>
      <Container>
        <Row>
          <Col>
            <H3>Website Settings</H3>
            <label htmlFor="basic-url">Title</label>
            <Alert variant="dark">{props.settings.title}</Alert>
            <InputGroup className="mb-3">
              <FormControl
                name="website-title-input"
                onChange={e => setTitle(e.target.value)}
                placeholder="title"
                aria-describedby="basic-addon3"
              />
            </InputGroup>
            <label htmlFor="basic-url">Meta Description</label>
            <Alert variant="dark">{props.settings.description}</Alert>
            <InputGroup className="mb-3">
              <FormControl
                name="website-title-input"
                onChange={e => setDescription(e.target.value)}
                placeholder="description"
                aria-describedby="basic-addon3"
              />
            </InputGroup>
            <Button
              onClick={() => {
                props.saveSettings(title, description);
              }}
              variant="outline-success"
            >
              Save
            </Button>
          </Col>
          <Col>Tips</Col>
        </Row>
      </Container>
    </div>
  );
}

SEOSettings.propTypes = {
  saveSettings: PropTypes.func,
  fetchSEOSettings: PropTypes.func,
  settings: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectCurrentUser(),
  settings: makeSelectSEOSettings(),
});

export const mapDispatchToProps = dispatch => ({
  fetchSEOSettings: () => dispatch(fetchSEOSettings()),
  saveSettings: (title, description) => {
    dispatch(saveSEOSettings({ title, description }));
  },
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(SEOSettings);
