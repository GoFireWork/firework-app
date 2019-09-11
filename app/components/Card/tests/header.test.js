import React from 'react';
import { render } from 'react-testing-library';

import CardHeader from '../header';

describe('<CardHeader />', () => {
  it('should render an <div> tag', () => {
    const { container } = render(<CardHeader />);
    expect(container.querySelector('div')).not.toBeNull();
  });

  it('should have a class attribute', () => {
    const { container } = render(<CardHeader />);
    expect(container.querySelector('div').hasAttribute('class')).toBe(true);
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const { container } = render(<CardHeader id={id} />);
    expect(container.querySelector('div').id).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const { container } = render(<CardHeader attribute="test" />);
    expect(container.querySelector('div[attribute="test"]')).toBeNull();
  });
});
