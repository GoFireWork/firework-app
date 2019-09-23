import keyboardJS from 'keyboardjs';
import { saveCurrentFile, setSearchFile } from './containers/Editor/actions';

keyboardJS.bind(['ctrl + s', 'command + s'], async e => {
  e.preventDefault();
  window.store.dispatch(saveCurrentFile());
});

keyboardJS.bind(['ctrl + f', 'command + f'], async e => {
  e.preventDefault();
  window.store.dispatch(setSearchFile(true));
});
