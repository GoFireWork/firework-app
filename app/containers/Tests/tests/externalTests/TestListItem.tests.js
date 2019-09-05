import React from 'react';
import { describe, it, expect } from 'jest-lite';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import TestResultListItem from '../../components/TestResultListItem/index';

describe('<TestListItem />', () => {
  // it('should render the content passed to it', () => {
  //   const content = <div data-testid="test">Hello world!</div>;
  //   const { getByTestId } = render(<TestListItem item={content} />);
  //   expect(getByTestId('test').tagName).toEqual('DIV');
  //   expect(getByTestId('test')).toHaveTextContent('Hello world!');
  // });

  it('THIS should not display the issue number 487947546', () => {
    console.log(`describe THIS should not display the issue number 487947546`);
    // const testResult = {
    //  testPath: ['should not display the issue number 487947546'],
    // };
    const testID = '487947546-1';
    const { getByTestId } = render(
      <TestResultListItem
        key={testID}
        data-testid={testID}
        testResult={test}
      />,
    );
    const result = getByTestId('487947546-1');
    console.log(`alskjdfhalskdjfh`);
    expect(result).toHaveTextContent('should not display the issue number');
  });
});
