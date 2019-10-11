import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  brand: {
    id: `${scope}.brand`,
    defaultMessage: 'FireWork',
  },
  seo: {
    id: `${scope}.seo`,
    defaultMessage: 'SEO Settings',
  },
  getStarted: {
    id: `${scope}.getStarted`,
    defaultMessage: 'Get Started',
  },
  pricing: {
    id: `${scope}.pricing`,
    defaultMessage: 'Pricing',
  },
  login: {
    id: `${scope}.login`,
    defaultMessage: 'Login',
  },
  logout: {
    id: `${scope}.logout`,
    defaultMessage: 'Logout',
  },
});
