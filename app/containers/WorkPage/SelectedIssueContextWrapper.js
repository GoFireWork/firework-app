import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const SelectedIssueContext = React.createContext();

export const SelectedIssueContextProvider = props => {
  const { selectedIssueID } = props;
  const [setState] = useState({
    selectedIssueID,
    selectIssue: props.selectIssue,
  });
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
  selectedIssueID: 0,
};

export default SelectedIssueContextProvider;
