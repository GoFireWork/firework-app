/**
 * Testing our Card component
 */

import React from 'react';
import { render } from 'react-testing-library';

import Card from '../index';

const renderComponent = (props = {}) => render(<Card {...props} />);

describe('<Card />', () => {
  it('should have a class attribute', () => {
    const { container } = renderComponent();
    expect(container.querySelector('div').hasAttribute('class')).toBe(true);
  });
  it('should have title if title props exists', () => {
    const { container } = render(<Card title={<div>test</div>} />);
    const element = container.querySelector('div');
    const header = element.firstChild;
    expect(header.hasAttribute('class')).toBe(true);
  });
  it('should have content if title props exists', () => {
    const { container } = render(<Card content={<div>test</div>} />);
    const element = container.querySelector('div');
    const header = element.firstChild;
    expect(header.hasAttribute('class')).toBe(true);
  });
  it('should have footer if title props exists', () => {
    const { container } = render(<Card footer={<div>test</div>} />);
    const element = container.querySelector('div');
    const header = element.firstChild;
    expect(header.hasAttribute('class')).toBe(true);
  });
  it('should have header , content and footer if title props exists', () => {
    const { container } = render(
      <Card
        title={<div>test</div>}
        content={<div>test</div>}
        footer={<div>test</div>}
      />,
    );
    const element = container.querySelector('div');
    const header = element.firstChild;
    expect(header.hasAttribute('class')).toBe(true);
    const content = header.nextSibling;
    expect(content.hasAttribute('class')).toBe(true);
    expect(content.nextSibling.hasAttribute('class')).toBe(true);
  });
});
