import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from 'react-draggable-tabs';
import { Controlled as CodeMirror } from 'react-codemirror2';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

function MirrorEditor(props) {
  const options = {
    lineNumbers: true,
    theme: 'material',
    mode: 'javascript',
  };
  const updateCode = () => {};

  return (
    <CodeMirror value={props.content} options={options} onChange={updateCode} />
  );
}

MirrorEditor.propTypes = {
  content: PropTypes.string,
};

function Editor(props) {
  const [activeTab, setActiveTab] = useState([]);
  const [tabs, setTabs] = useState([
    {
      id: Date.now(),
      active: true,
      content: 'Untitled',
      display: renderCodeMirror(''),
    },
  ]);

  function renderCodeMirror(content) {
    return <MirrorEditor content={content} />;
  }

  const moveTab = (dragIndex, hoverIndex) => {
    const newTabs = [...tabs];
    newTabs.splice(hoverIndex, 0, newTabs.splice(dragIndex, 1)[0]);
    setTabs(newTabs);
  };

  const selectTab = (selectedIndex, selectedID) => {
    const newTabs = tabs.map(tab => ({
      ...tab,
      active: tab.id === selectedID,
    }));
    setTabs(newTabs);
  };

  const closedTab = (removedIndex, removedID) => {
    const newTabs = tabs.filter(tab => tab.id !== removedID);
    // newTabs.splice(removedIndex, 1);

    if (tabs[removedIndex].active && newTabs.length !== 0) {
      const newActive = removedIndex === 0 ? 0 : removedIndex - 1;
      newTabs[newActive].active = true;
      console.log(newTabs);
    }
    setTabs(newTabs);
  };

  const addTab = ({ name, path, content }) => {
    const newTabs = tabs.map(tab => ({ ...tab, active: false }));

    newTabs.push({
      id: Date.now(),
      content: name,
      path,
      active: true,
      display: renderCodeMirror(content),
    });
    setTabs(newTabs);
  };

  const putTab = ({ name, path, content }) => {
    const newTabs = tabs.map(tab => ({ ...tab, active: false }));
    setTabs(
      newTabs.map(tab => ({
        ...tab,
        display: renderCodeMirror(content),
        active: tab.content === name && tab.path === path,
      })),
    );
  };

  const isNewTab = (name, path) =>
    !tabs.filter(tab => tab.content === name && tab.path === path).length;

  useEffect(() => {
    setActiveTab(tabs.filter(tab => tab.active === true));
  }, [tabs]);

  useEffect(() => {
    if (props.path) {
      // debugger
      if (isNewTab(props.name, props.path)) {
        addTab({ ...props });
      } else {
        putTab({ ...props });
      }
    }
  }, [props.path]);

  return (
    <div>
      <Tabs
        moveTab={moveTab}
        selectTab={selectTab}
        closeTab={closedTab}
        tabs={tabs}
      />
      {activeTab.length !== 0 ? activeTab[0].display : ''}
    </div>
  );
}

Editor.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
};

export default memo(Editor);
