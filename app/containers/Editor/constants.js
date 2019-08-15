/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_USERNAME = 'boilerplate/Home/CHANGE_USERNAME';
export const CHANGE_REPO_URL = 'boilerplate/Home/CHANGE_REPO_URL';
export const CODE_MIRROR_STATE = 'boilerplate/Home/CODE_MIRROR_STATE';
export const ALL_TESTS_PASS = 'boilerplate/Home/ALL_TESTS_PASS';
export const NUM_TESTS = 'boilerplate/Home/NUM_TESTS';
export const NUM_TESTS_PASSING = 'boilerplate/Home/NUM_TESTS_PASSING';
export const NUM_TESTS_FAILING = 'boilerplate/Home/NUM_TESTS_FAILING';
export const NUM_ISSUES = 'boilerplate/Home/NUM_ISSUES';
export const RUNNING_TESTS = 'boilerplate/Home/RUNNING_TESTS';
export const SELECTED_ISSUE = 'boilerplate/Home/SELECTED_ISSUE';
export const FETCHING_REPO_CONTENTS = 'boilerplate/Home/FETCHING_REPO_CONTENTS';
export const FETCHING_REPO_ISSUES = 'boilerplate/Home/FETCHING_REPO_ISSUES';
export const REPO_CONTENTS = 'boilerplate/Home/REPO_CONTENTS';
export const REPO_ISSUES = 'boilerplate/Home/REPO_ISSUES';
