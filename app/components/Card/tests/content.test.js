import React from 'react';
import { render } from 'react-testing-library';

import CardContent from '../content';

describe('<CardContent />', () => {
  it('should render an <div> tag', () => {
    const { container } = render(<CardContent />);
    expect(container.querySelector('div')).not.toBeNull();
  });

  it('should have a class attribute', () => {
    const { container } = render(<CardContent />);
    expect(container.querySelector('div').hasAttribute('class')).toBe(true);
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const { container } = render(<CardContent id={id} />);
    expect(container.querySelector('div').id).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const { container } = render(<CardContent attribute="test" />);
    expect(container.querySelector('div[attribute="test"]')).toBeNull();
  });
});
