import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeSelectSelectedIssueID } from '../Issues/selectors';

export const SelectedIssueContext = React.createContext();

export const SelectedIssueContextProvider = props => {
  const { selectedIssueID } = props;
  const [setState] = useState({
    selectedIssueID: selectedIssueID || 0,
    selectIssue: props.selectIssue,
  });
  // console.log(`SelectedIssueContextProvider: ${selectedIssueID}`);
  return (
    <SelectedIssueContext.Provider
      value={{
        selectedIssueID,
        selectIssue: () => setState({ selectedIssueID: props.selectedIssueID }),
      }}
    >
      {props.children}
    </SelectedIssueContext.Provider>
  );
};

SelectedIssueContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.array,
  ]),
  selectedIssueID: PropTypes.number,
  selectIssue: PropTypes.func,
};

SelectedIssueContextProvider.defaultProps = {
  // selectedIssueID: 0,
};

export default SelectedIssueContextProvider;
