import keyboardJS from 'keyboardjs';
import { saveCurrentFile } from './containers/Editor/actions';

keyboardJS.bind('command + s', async e => {
  e.preventDefault();
  console.log('command + s pressed; saving file');
  await saveCurrentFile();
});
