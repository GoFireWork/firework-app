import React, { memo, useState } from 'react';
import { Container, FormControl, InputGroup, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Helmet } from 'react-helmet';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import Button from '../../components/Button';

import { makeSelectCurrentUser } from '../App/selectors';
import { saveSEOSettings } from './actions';
import reducer from './reducer';
import saga from './saga';

const key = 'seo';

function SEOSettings(props) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  // const { user } = props;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // const saveSettings = () => {
  //   console.log(`saving settings: ${title} ${description}`);
  //   saveSEOSettings({ title, description });
  // };

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
            <label htmlFor="basic-url">Your Website Title</label>
            <InputGroup className="mb-3">
              <FormControl
                name="website-title-input"
                onChange={e => setTitle(e.target.value)}
                placeholder="title"
                aria-describedby="basic-addon3"
              />
            </InputGroup>
            <label htmlFor="basic-url">Your Website Description</label>
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
  _id: PropTypes.object,
  saveSettings: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectCurrentUser(),
});

export const mapDispatchToProps = dispatch => ({
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
