import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Treebeard, decorators } from 'react-treebeard';
import { Div } from 'react-treebeard/dist/components/common';
import Icon from 'react-icons-kit';
import { folder } from 'react-icons-kit/feather/folder';
import { file } from 'react-icons-kit/feather/file';
import LoadingIndicator from 'components/LoadingIndicator';
import { DecoratorsContainer } from '../styles';
const Header = ({ style, node }) => {
  const iconType = node.children ? folder : file;
  const iconStyle = { marginRight: '5px' };

  return (
    <Div style={style.base}>
      <Div style={style.title} className="node-title">
        <Icon icon={iconType} style={iconStyle} />
        {node.name}
      </Div>
    </Div>
  );
};

Header.propTypes = {
  style: PropTypes.object,
  node: PropTypes.object,
};

const CustomContainer = ({ style, onClick, node }) => (
  <DecoratorsContainer onClick={onClick}>
    <decorators.Header node={node} style={style.header} />
  </DecoratorsContainer>
);

CustomContainer.propTypes = {
  style: PropTypes.object,
  node: PropTypes.object,
  onClick: PropTypes.func,
};

const TreeView = props => {
  const [data, setData] = useState(props.files || {});
  const [cursor, setCursor] = useState(false);

  useEffect(() => {
    if (props.files) {
      setData(props.files);
    }
  }, [props.files]);

  const onToggle = (_node, toggled) => {
    const node = _node;
    if (cursor) {
      cursor.active = false;
    }
    node.active = true;
    if (node.children) {
      node.toggled = toggled;
    }
    setCursor(node);
    setData(Object.assign({}, data));
    if (node.type === 'file') {
      props.openFile(node.path, node.name);
    }
  };

  if (props.loading) {
    return <LoadingIndicator />;
  }

  decorators.Header = Header;
  decorators.Container = CustomContainer;

  return <Treebeard data={data} onToggle={onToggle} decorators={decorators} />;
};

TreeView.propTypes = {
  files: PropTypes.object,
  loading: PropTypes.bool,
  openFile: PropTypes.func,
};

export default memo(TreeView);
