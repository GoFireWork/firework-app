/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.fireWork`,
    defaultMessage: 'FireWork',
  },
  getStarted: {
    id: `${scope}.getStarted`,
    defaultMessage: 'Get Started',
  },
  settings: {
    id: `${scope}.settings`,
    defaultMessage: 'Settings',
  },
});
