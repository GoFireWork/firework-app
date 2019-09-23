import keyboardJS from 'keyboardjs';
import { saveCurrentFile, setSearchFile } from './containers/Editor/actions';

keyboardJS.bind('ctrl + s', async e => {
  e.preventDefault();
  console.log('command + s pressed; saving file');
  await saveCurrentFile();
});

keyboardJS.bind('ctrl + f', async e => {
  e.preventDefault();
  console.log('command + f pressed; saving file');
  window.store.dispatch(setSearchFile(true));
});
