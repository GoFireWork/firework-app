import React, { memo, useEffect, useState } from 'react';
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
import reducer from './reducer';
import saga from './saga';

const key = 'seoSettings';

function SEOSettings(props) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const { user } = props;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const getUserSettings = () => {
    const userId = '1';
    const apiURL = `https://firework.localtunnel.me/api/user/settings/${userId}`;
    fetch(apiURL)
      .then(res => res.json())
      .then(res => {
        console.log(`user: ${res.title}`);
        this.setState({ title: res.title, description: res.description });
      })
      .catch(err => {
        console.error(`user settings api error: ${err}`);
      });
  };

  // useEffect(() => {});

  // async function saveData() {
  //   console.log(`updating website data`);
  //   const userSettings = { title, description };
  //
  //   try {
  //     const apiURL = `https://firework.localtunnel.me/api/user/settings/update/${
  //       user._id
  //     }`;
  //     const response = await fetch(apiURL, {
  //       method: 'POST',
  //       mode: 'no-cors', // no-cors, *cors, same-origin
  //       // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  //       // credentials: 'same-origin', // include, *same-origin, omit
  //       headers: {
  //         'Content-Type': 'application/json',
  //         // 'Content-Type': 'application/x-www-form-urlencoded',
  //       },
  //       // redirect: 'follow', // manual, *follow, error
  //       // referrer: 'no-referrer', // no-referrer, *client
  //       body: JSON.stringify(userSettings), // );
  //     });
  //     console.log(await response.json());
  //   } catch (err) {
  //     console.error(`update user settings api error: ${err}`);
  //   }
  // }

  return (
    <div>
      <Helmet>
        <title>FireWork - SEO Settings</title>
        <meta
          name="description"
          content="FireWork - Set your website title and description"
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
            <Button variant="outline-success">Success</Button>
          </Col>
          <Col>Tips</Col>
        </Row>
      </Container>
    </div>
  );
}

SEOSettings.propTypes = {
  _id: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectCurrentUser(),
});

export const mapDispatchToProps = dispatch => ({});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(SEOSettings);
