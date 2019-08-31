import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SelectedFileContext = React.createContext();

const SelectedFileContextProvider = props => {
  const { selectedFileID } = props;
  const [setState] = useState({
    selectedFileID,
    selectFile: props.selectFile,
  });
  return (
    <SelectedFileContext.Provider
      value={{
        selectedFileID,
        selectIssue: () => setState({ selectedFileID: props.selectedFileID }),
      }}
    >
      {props.children}
    </SelectedFileContext.Provider>
  );
};

SelectedFileContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.array,
  ]),
  selectedFileID: PropTypes.number,
  selectFile: PropTypes.func,
};

SelectedFileContextProvider.defaultProps = {
  selectedFileID: 0,
};

export { SelectedFileContextProvider, SelectedFileContext };
