/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  login: {
    id: `${scope}.login`,
    defaultMessage: 'GitHub Login',
  },
  workpage: {
    id: `${scope}.workpage`,
    defaultMessage: 'WorkPage',
  },
  repositories: {
    id: `${scope}.repositories`,
    defaultMessage: 'Repositories',
  },
});
