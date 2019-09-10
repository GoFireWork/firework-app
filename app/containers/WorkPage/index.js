import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Issues from '../Issues/index';
import Tests from '../Tests/index';
import { Preview, PreviewContainer, WorkPageContainer } from './styles';
import { setSelectedIssue } from '../Issues/actions';
import SelectedIssueContextWrapper from './SelectedIssueContextWrapper';
import { getSelectedIssueID } from '../Issues/reducer';
import { getSelectedRepo } from '../RepoList/reducer';

import Editor from '../Editor';

export function WorkPage(props) {
  return (
    <div>
      <Helmet>
        <title>FireWork</title>
        <meta name="description" content="FireWork" />
      </Helmet>
      <WorkPageContainer>
        <Editor repoURL={props.SelectedRepoURL} />
        <SelectedIssueContextWrapper
          selectedIssueID={props.selectedIssueID || 0}
        >
          <PreviewContainer>
            <Preview>
              <Tests />
              <Issues />
            </Preview>
          </PreviewContainer>
        </SelectedIssueContextWrapper>
      </WorkPageContainer>
    </div>
  );
}

WorkPage.propTypes = {
  selectedIssueID: PropTypes.number,
  SelectedRepoURL: PropTypes.string,
};

const mapStateToProps = state => ({
  selectedIssueID: getSelectedIssueID(state),
  SelectedRepoURL: getSelectedRepo(state),
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
