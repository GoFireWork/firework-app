import React, { memo } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { getToken } from '../Login/reducer';

class CRoute extends React.Component {
  getExtractedJson = ({ component, cprivate, crole, actions, auth, ...rest }) =>
    rest;

  render() {
    const rest = this.getExtractedJson(this.props);

    const isUserLoggedIn = this.props.token && this.props.token !== '';

    const { component, cprivate } = this.props;
    const Component = component;

    let redirect;
    if (isUserLoggedIn && rest.path === '/login') redirect = '/';
    else if (!isUserLoggedIn && cprivate) redirect = '/login';

    return (
      <Route
        {...rest}
        render={props =>
          redirect ? (
            <Redirect
              to={{ pathname: redirect, state: { from: props.location } }}
            />
          ) : (
            <Component {...props} />
          )
        }
      />
    );
  }
}

CRoute.propTypes = {
  token: PropTypes.string,
  cprivate: PropTypes.bool,
  component: PropTypes.elementType,
};
const mapStateToProps = state => ({
  token: getToken(state),
});
const mapDispatchToProps = () => ({});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(CRoute);
