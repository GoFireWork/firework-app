import React, { memo, useEffect, useState } from 'react';
import {
  Alert,
  Button,
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

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

// import Button from '../../components/Button';
import H3 from '../../components/H3';

import { makeSelectCurrentUser } from '../App/selectors';
import {
  fetchSEOSettings,
  makeSelectSEOSettings,
  saveSEOSettings,
} from './actions';
import reducer from './reducer';
import saga from './saga';

const key = 'seo';

function SEOSettings(props) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

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
          <Col lg="6">
            <br />
            <br />
            <H3>Your Website Settings</H3>
            <br />
            <label htmlFor="basic-url">Current Title</label>
            <Alert variant="dark">{props.settings.title}</Alert>
            <label htmlFor="basic-url">New Title</label>
            <InputGroup className="mb-3">
              <FormControl
                name="website-title-input"
                onChange={e => setTitle(e.target.value)}
                placeholder="title"
                aria-describedby="basic-addon3"
              />
            </InputGroup>
            <br />
            <br />
            <label htmlFor="basic-url">Current Meta Description</label>
            <Alert variant="dark">{props.settings.description}</Alert>
            <label htmlFor="basic-url">New Meta Description</label>
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
              variant="success"
            >
              Save
            </Button>
          </Col>
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
