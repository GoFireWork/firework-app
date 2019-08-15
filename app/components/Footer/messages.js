/*
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Footer';

export default defineMessages({
  licenseMessage: {
    id: `${scope}.company.name`,
    defaultMessage: 'Copyright 2019 {name}',
  },
  authorMessage: {
    id: `${scope}.author.message`,
    defaultMessage: `
      Made with {author}.
    `,
  },
});
