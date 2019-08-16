import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import H3 from 'components/H3';
import Issues from '../Issues/index';
// import Section from './Section';
// import messages from './messages';
// import { se } from './actions';
import reducer from './reducer';
// import saga from './saga';
import CodeMirror from '../CodeMirror/index';
import { makeSelectGitHubRepoURL } from './selectors';

const key = 'workpage';

export function WorkPage(props) {
  useInjectReducer({ key, reducer });
  // useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    // if (username && username.trim().length > 0) onSubmitForm();
  }, []);

  return (
    <article>
      <Helmet>
        <title>Gnarwork</title>
        <meta name="description" content="Gnarwork" />
      </Helmet>
      <div>
        <H3>{props.repoURL}</H3>
        {/*<LeftAlignedSection>*/}
        <CodeMirror />
        {/*</LeftAlignedSection>*/}
        <Issues />
        {/* <Tests /> */}
      </div>
    </article>
  );
}

WorkPage.propTypes = {
  // loading: PropTypes.bool,
  // error: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  repoURL: makeSelectGitHubRepoURL(),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  memo,
)(WorkPage);
