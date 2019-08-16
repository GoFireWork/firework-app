import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from './messages';

export default function IssuesList() {
  return (
    <div>
      <Helmet>
        <title>FeaturePage</title>
        <meta name="description" content="FeaturePage" />
      </Helmet>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
    </div>
  );
}
