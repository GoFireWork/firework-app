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

export const CHANGE_REPO_URL = 'boilerplate/Editor/CHANGE_REPO_URL';
export const LOAD_REPO_REQUEST = 'boilerplate/Editor/LOAD_REPO_REQUEST';
export const LOAD_REPO_ERROR = 'boilerplate/Editor/LOAD_REPO_ERROR';
export const UPDATE_CODE_MIRROR_STATE =
  'boilerplate/Editor/UPDATE_CODE_MIRROR_STATE';
export const LOAD_REPO_SUCCESS = 'boilerplate/Editor/LOAD_REPO_SUCCESS';

export const LOAD_ISSUES = 'boilerplate/Editor/LOAD_ISSUES';
export const LOAD_ISSUES_REQUEST = 'boilerplate/Editor/LOAD_ISSUES_REQUEST';
export const ISSUES_LOADING_ERROR = 'boilerplate/Editor/ISSUES_LOADING_ERROR';
export const NUM_ISSUES = 'boilerplate/Editor/NUM_ISSUES';
export const SELECTED_ISSUE = 'boilerplate/Editor/SELECTED_ISSUE';
export const ISSUES = 'boilerplate/Editor/ISSUES';
export const NUM_TESTS = 'boilerplate/Editor/NUM_TESTS';
export const NUM_TESTS_FAILING = 'boilerplate/Editor/NUM_TESTS_FAILING';
export const NUM_TESTS_PASSING = 'boilerplate/Editor/NUM_TESTS_PASSING';
export const RUNNING_TESTS = 'boilerplate/Editor/RUNNING_TESTS';
export const ALL_TESTS_PASSING = 'boilerplate/Editor/ALL_TESTS_PASSING';
export const CODE_MIRROR_STATE = 'boilerplate/Editor/CODE_MIRROR_STATE';
