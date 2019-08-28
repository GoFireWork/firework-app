import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import H3 from 'components/H3';
import Files from '../Files/index';
import { CenteredSection, Container, LeftSide } from './styles';

export function Editor(props) {
  return (
    <div>
      <Helmet>
        <title>Gnarwork</title>
        <meta name="description" content="Gnarwork" />
      </Helmet>
      <CenteredSection>
        <H3>Repo: {props.repoURL}</H3>
      </CenteredSection>
      <Container>
        <LeftSide>
          <Files repo={props.repoURL} />
        </LeftSide>
      </Container>
    </div>
  );
}

Editor.propTypes = {
  repoURL: PropTypes.string,
};

Editor.defaultProps = {
  repoURL: 'https://github.com/Distense/distense-ui',
};

const mapStateToProps = createStructuredSelector({});

export const mapDispatchToProps = () => ({});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Editor);
