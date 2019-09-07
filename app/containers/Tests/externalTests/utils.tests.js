import { describe, it, expect } from 'jest-lite';
import { stripIssueIDFromTestPath } from '../utils';

describe('487947546 stripIssueIDFromTestPath', () => {
  it('487947546 should strip issue ids from testPath for rendering', () => {
    // console.log(`describe 487947546 stripIssueIDFromTestPath test`);
    const metaTestPath = '487947546 should stripIssueIDFromTestPath';
    const updatedTestPath = stripIssueIDFromTestPath(metaTestPath);
    expect(updatedTestPath).toBe('should stripIssueIDFromTestPath');
  });
});
