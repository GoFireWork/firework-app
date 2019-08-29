import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Files from '../Files/index';
import CodeMirror from '../CodeMirror/index';
import {
  CenteredSection,
  Container,
  LeftSide,
  RightSide,
  EditorContainer,
} from './styles';
import { SelectedFileContextProvider } from './SelectedFileContextWrapper';

export function Editor(props) {
  return (
    <div>
      <Helmet>
        <title>Gnarwork</title>
        <meta name="description" content="Gnarwork" />
      </Helmet>
      <EditorContainer>
        <CenteredSection>
          <p>Repo: {props.repoURL}</p>
        </CenteredSection>
        <Container>
          <SelectedFileContextProvider>
            <LeftSide>
              <div className="small-sidebar">
                <div className="sub-menu">
                  <svg width="1em" height="1em" viewBox="0 0 40 40">
                    <path
                      d="M18.7932 18.1206C19.0246 18.2523 19.3084 18.2515 19.539 18.1185L31.3628 11.3002C31.8655 11.0103 31.8626 10.2836 31.3575 9.99777L19.8651 3.494C19.4858 3.27967 19.0192 3.27967 18.6392 3.494L6.98325 10.0897C6.47652 10.3765 6.47553 11.1061 6.98147 11.3942L18.7932 18.1206Z"
                      fill="currentColor"
                    />
                    <path
                      d="M17.5 21.1711C17.5 20.9063 17.3603 20.6611 17.1325 20.526L6.13248 14.0046C5.63253 13.7082 5 14.0686 5 14.6498V27.6749C5 28.107 5.00547 28.5873 5.3875 28.8026L16.3735 35.1794C16.8735 35.4696 17.5 35.1088 17.5 34.5307V21.1711Z"
                      fill="currentColor"
                    />
                    <path
                      d="M21.1952 20.6757C20.9706 20.8116 20.8334 21.0549 20.8334 21.3174V34.514C20.8334 35.0958 21.4671 35.4561 21.967 35.1585L32.8753 28.6655C33.2348 28.4529 33.3334 28.0601 33.3334 27.6349V14.6635C33.3334 14.0793 32.695 13.7194 32.1952 14.0217L21.1952 20.6757Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="sub-menu">
                  <svg width="1em" height="1em" viewBox="0 0 40 40">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M33.125 33.125C35 31.25 35 27.5 35 20C35 12.5 35 8.75 33.125 6.875C31.25 5 27.5 5 20 5C12.5 5 8.75 5 6.875 6.875C5 8.75 5 12.5 5 20C5 27.5 5 31.25 6.875 33.125C8.75 35 12.5 35 20 35C27.5 35 31.25 35 33.125 33.125ZM28.9461 20.9136C28.928 21.0869 28.9975 21.2584 29.134 21.3667L31.4449 23.1998C31.6728 23.3823 31.7327 23.7108 31.5888 23.9785L29.19 28.1882C29.0461 28.4558 28.7342 28.5653 28.4584 28.4558L25.7362 27.3468C25.5724 27.2801 25.3861 27.3056 25.2427 27.4092C24.7607 27.7573 24.2502 28.0671 23.7061 28.3172C23.5455 28.391 23.4297 28.5388 23.405 28.7138L22.9891 31.6557C22.9532 31.9477 22.7013 32.1667 22.4014 32.1667H17.6039C17.304 32.1667 17.0521 31.9477 17.0162 31.6557L16.6003 28.7138C16.5756 28.5388 16.4598 28.391 16.2991 28.3176C15.7556 28.0696 15.2457 27.7665 14.7642 27.4138C14.6198 27.308 14.4312 27.2808 14.2654 27.3484L11.5469 28.4558C11.283 28.5532 10.9592 28.4558 10.8153 28.1882L8.41649 23.9785C8.27256 23.7108 8.33253 23.3823 8.56042 23.1998L10.8713 21.3667C11.0078 21.2584 11.0774 21.0869 11.0594 20.9136C11.0281 20.6126 11.0072 20.3063 11.0072 20C11.0072 19.6937 11.0281 19.3874 11.0594 19.0865C11.0774 18.9131 11.0078 18.7416 10.8713 18.6333L8.56042 16.8002C8.33253 16.6177 8.26057 16.2892 8.41649 16.0215L10.8153 11.8118C10.9592 11.5442 11.2711 11.4347 11.5469 11.5442L14.2691 12.6532C14.4329 12.7199 14.6192 12.6944 14.7626 12.5909C15.2446 12.2427 15.7551 11.9329 16.2992 11.6828C16.4598 11.609 16.5756 11.4612 16.6003 11.2862L17.0162 8.34434C17.0521 8.05234 17.304 7.83334 17.6039 7.83334H22.4014C22.7013 7.83334 22.9532 8.05234 22.9891 8.34434L23.405 11.2862C23.4297 11.4612 23.5455 11.6091 23.7062 11.6824C24.2497 11.9304 24.7596 12.2335 25.2411 12.5863C25.3855 12.6921 25.5741 12.7192 25.7399 12.6516L28.4584 11.5442C28.7223 11.4468 29.0461 11.5442 29.19 11.8118L31.5888 16.0215C31.7327 16.2892 31.6728 16.6177 31.4449 16.8002L29.134 18.6333C28.9975 18.7416 28.928 18.9131 28.9461 19.0864C28.9772 19.384 28.9981 19.685 28.9981 20C28.9981 20.3151 28.9772 20.616 28.9461 20.9136ZM15.8048 20C15.8048 22.3482 17.6878 24.2583 20.0027 24.2583C22.3175 24.2583 24.2005 22.3482 24.2005 20C24.2005 17.6518 22.3175 15.7417 20.0027 15.7417C17.6878 15.7417 15.8048 17.6518 15.8048 20Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
              <Files repo={props.repoURL} />
            </LeftSide>
            <RightSide>
              <CodeMirror />
            </RightSide>
          </SelectedFileContextProvider>
        </Container>
      </EditorContainer>
    </div>
  );
}

Editor.propTypes = {
  repoURL: PropTypes.string,
};

Editor.defaultProps = {
  repoURL: 'https://github.com/Distense/distense-ui',
};

const mapStateToProps = createStructuredSelector({});

export const mapDispatchToProps = () => ({});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Editor);
