import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import Wrapper from './style';
import reducer, { getRepoList } from './reducer';
import saga from './saga';
import List from './list';

const key = 'repo';

export function RepoList(props) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  return (
    <Wrapper>
      <Helmet>
        <title>FireWork</title>
        <meta name="description" content="FireWork" />
      </Helmet>
      <List repo={props.repo} />
    </Wrapper>
  );
}

RepoList.propTypes = {
  repo: PropTypes.array,
};

const mapStateToProps = state => ({
  repo: getRepoList(state),
});
const mapDispatchToProps = () => ({});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(RepoList);
