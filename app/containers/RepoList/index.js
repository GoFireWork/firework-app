import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import {} from './style';
import reducer from './reducer';
import saga from './saga';

const key = 'repo';

export const RepoList = () => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  return (
    <div>
      <Helmet>
        <title>FireWork</title>
        <meta name="description" content="FireWork" />
      </Helmet>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = () => ({});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(RepoList);
