import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List/Files';
import LoadingIndicator from 'components/LoadingIndicator';
import FileListItem from 'components/ListItem/FileItem';

function FileList(props) {
  const { loading, error, files } = props;
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <FileListItem item="Something went wrong, please try again!" />
    );
    return <List component={ErrorComponent} />;
  }

  if (files !== false) {
    return <List items={files} component={FileListItem} />;
  }

  return null;
}

FileList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  files: PropTypes.array,
};

export default FileList;
