import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import H3 from 'components/H3';
import Issues from '../Issues/index';
import Tests from '../Tests/index';
import WorkPageContainer from './WorkPageContainer';
import CodeMirrorWrapper from '../CodeMirror/CodeMirrorWrapper';
import { IssuesWrapper } from '../Issues/Elements';
import reducer from './reducer';
import CodeMirror from '../CodeMirror/index';
import { makeSelectSelectedIssueID } from '../Issues/selectors';
import { setSelectedIssue } from '../Issues/actions';
import SelectedIssueContextWrapper from './SelectedIssueContextWrapper';

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
        <H3>Repo: {props.repoURL}</H3>
        <WorkPageContainer>
          <CodeMirrorWrapper>
            <CodeMirror />
          </CodeMirrorWrapper>
          <SelectedIssueContextWrapper
            selectedIssueID={props.selectedIssueID || 0}
          >
            <IssuesWrapper>
              <Issues />
            </IssuesWrapper>
            <Tests />
          </SelectedIssueContextWrapper>
        </WorkPageContainer>
      </div>
    </article>
  );
}

WorkPage.propTypes = {
  selectedIssueID: PropTypes.number,
  repoURL: PropTypes.string,
  // loading: PropTypes.bool,
  // error: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  selectedIssueID: makeSelectSelectedIssueID(),
});

export const mapDispatchToProps = dispatch => ({
  selectIssue: selectedIssueID => dispatch(setSelectedIssue(selectedIssueID)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(WorkPage);
