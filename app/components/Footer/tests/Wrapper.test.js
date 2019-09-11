import React from 'react';
import { render } from 'react-testing-library';

import Wrapper from '../Wrapper';

describe('<Wrapper />', () => {
  it('should render an <footer> tag', () => {
    const { container } = render(<Wrapper />);
    expect(container.querySelector('footer.test.js')).not.toBeNull();
  });

  it('should have a class attribute', () => {
    const { container } = render(<Wrapper />);
    expect(
      container.querySelector('footer.test.js').hasAttribute('class'),
    ).toBe(true);
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const { container } = render(<Wrapper id={id} />);
    expect(container.querySelector('footer.test.js').id).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const { container } = render(<Wrapper attribute="test" />);
    expect(
      container.querySelector('footer.test.js').getAttribute('attribute'),
    ).toBeNull();
  });
});
