import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';

import H3 from 'components/H3';
import Issues from '../Issues/index';
import Tests from '../Tests/index';
import { CenteredSection, Container } from './styles';
// import CodeMirror from '../CodeMirror/index';
import { setSelectedIssue } from '../Issues/actions';
import SelectedIssueContextWrapper from './SelectedIssueContextWrapper';
import { getSelectedIssueID } from '../Issues/reducer';

export function WorkPage(props) {
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
        {/* <CodeMirror /> */}
        <SelectedIssueContextWrapper
          selectedIssueID={props.selectedIssueID || 0}
        >
          <Issues />
          <Tests />
        </SelectedIssueContextWrapper>
      </Container>
    </div>
  );
}

WorkPage.propTypes = {
  selectedIssueID: PropTypes.number,
  repoURL: PropTypes.string,
  // loading: PropTypes.bool,
  // error: PropTypes.bool,
};

WorkPage.defaultProps = {
  repoURL: 'https://github.com/Distense/distense-ui',
};

const mapStateToProps = state => ({
  selectedIssueID: getSelectedIssueID(state),
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
