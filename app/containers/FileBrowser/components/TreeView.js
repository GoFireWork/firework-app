import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Treebeard, decorators } from 'react-treebeard';
import { Div } from 'react-treebeard/dist/components/common';
import Icon from 'react-icons-kit';
import { folder } from 'react-icons-kit/feather/folder';
import { file } from 'react-icons-kit/feather/file';
import { ic_create_new_folder as createFolder } from 'react-icons-kit/md/ic_create_new_folder';
import { ic_insert_drive_file as createFile } from 'react-icons-kit/md/ic_insert_drive_file';
import Notification from 'components/Notification';

import LoadingIndicator from 'components/LoadingIndicator';
import { DecoratorsContainer, InputWrapper } from '../styles';

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

const CustomContainer = props => {
  const { style, onClick, node } = props;
  const [types, setType] = useState('');
  const [click, setClick] = useState(false);
  const [name, setName] = useState('');
  const [exists, setExists] = useState(false);
  const inputRef = React.createRef();

  useEffect(() => {
    if (types) {
      inputRef.current.focus();
      setExists(false);
    }
  }, [types]);

  const onIconClick = (e, key) => {
    setClick(true);
    setType(key);
    setExists(false);
    e.stopPropagation();
  };

  const FocusChange = () => {
    setType('');
    setName('');
    setExists(false);
    setClick(false);
  };
  // console.log(tree);
  const handleChangeEvent = event => {
    setName(event.target.value);
    let val = false;
    if (event.key === 'Enter') {
      let max = 0;
      node.children.forEach((prev, current) => {
        if (prev.name === name && prev.type === types) {
          val = true;
        }
        if (current.id > +prev.id) {
          max = current.id;
        } else {
          max = prev.id;
        }
      });
      if (!val) {
        if (types === 'file') {
          node.children.push({
            id: max + 1,
            path: `${node.path}/${name}`,
            name: event.target.value,
            type: types,
            leaf: true,
          });
        } else {
          node.children.push({
            id: max + 1,
            path: `${node.path}/${name}`,
            name: event.target.value,
            type: types,
            children: [],
          });
        }
      }
      setName('');
      setClick(false);
      setExists(val);
    }
  };
  const toastOptions = {
    hideProgressBar: true,
    autoClose: 2000,
    position: 'bottom-right',
  };
  return (
    <>
      <DecoratorsContainer
        onClick={() => {
          onClick();
          setExists(false);
        }}
      >
        <decorators.Header node={node} style={style.header} />
        <span>
          {props.node.type === 'folder' && (
            <>
              <Icon
                icon={createFile}
                onClick={e => {
                  onIconClick(e, 'file');
                }}
              />
              <Icon
                icon={createFolder}
                onClick={e => {
                  onIconClick(e, 'folder');
                }}
              />
            </>
          )}
        </span>
        {click && (
          <InputWrapper>
            <Icon icon={types === 'folder' ? folder : createFile} />
            <input
              onBlur={FocusChange}
              ref={inputRef}
              onKeyPress={handleChangeEvent}
              onChange={handleChangeEvent}
              value={name}
            />
          </InputWrapper>
        )}
      </DecoratorsContainer>
      {exists && (
        <Notification
          title={
            types === 'folder'
              ? 'A directory name already exists at this location'
              : 'A file name already exists at this location'
          }
          error={exists}
          toastOptions={toastOptions}
        />
      )}
    </>
  );
};

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
