import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { Icon } from 'react-icons-kit';
import { arrowRightB } from 'react-icons-kit/ionicons/arrowRightB';
import { arrowLeftB } from 'react-icons-kit/ionicons/arrowLeftB';
import Issues from '../Issues/index';
import Tests from '../Tests/index';
import { Preview, PreviewContainer, WorkPageContainer, Button } from './styles';
import { setSelectedIssue } from '../Issues/actions';
import SelectedIssueContextWrapper from './SelectedIssueContextWrapper';
import { getSelectedIssueID } from '../Issues/reducer';
import { getSelectedRepo } from '../RepoList/reducer';

import Editor from '../Editor';

export function WorkPage(props) {
  const [open, setOpen] = useState(false);

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
          <PreviewContainer open={open}>
            <Preview>
              <Button onClick={() => setOpen(!open)}>
                {' '}
                {open ? (
                  <Icon icon={arrowRightB} />
                ) : (
                  <Icon icon={arrowLeftB} />
                )}{' '}
              </Button>
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
