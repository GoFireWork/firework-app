import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import EditorPage from '../index';

describe('<Editor />', () => {
  it('should render its heading', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <EditorPage />
      </IntlProvider>,
    );

    expect(firstChild).toMatchSnapshot();
  });
});
