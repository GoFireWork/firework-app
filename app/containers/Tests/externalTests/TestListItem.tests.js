import React from 'react';
import { describe, it, expect } from 'jest-lite/dist/core';
import { mount } from '../../../jest-lite/src/enzyme';
import TestResultListItem from '../components/TestResultListItem/index';

describe('<TestResultListItem />', () => {
  it('should not display the issue number 487947546', () => {
    console.log(`describe THIS should not display the issue number 487947546`);
    const testResult = {
      testPath: ['should not display the issue number 487947546'],
    };
    const testID = '487947546-1';
    const TestResult = mount(
      <TestResultListItem key={testID} testResult={testResult} />,
    );
    expect(TestResult.text()).toBe('should not display the issue number');
  });
});
