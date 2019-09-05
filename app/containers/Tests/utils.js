/**
 *
 * @param finalTestPath
 * @returns {*}
 * strip 9 digit numbers from testPaths when we display them
 */
export const stripIssueIDFromTestPath = finalTestPath => {
  let result = finalTestPath.replace(/^\d{9}/, '');
  result = result.replace(/\d{9}$/, '');
  result = result.trim();
  return result;
};
