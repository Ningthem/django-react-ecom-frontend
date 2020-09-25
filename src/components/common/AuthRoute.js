import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Route which cannot be entered when authenticated like signup, user etc
const AuthRoute = ({ component: Component, auth, history, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (auth.isLoading) return <h2>Loading...</h2>
        if (auth.isAuthenticated) return <Redirect to="/" />

        return <Component {...props} />
      }}
    />
  );
}

AuthRoute.protoTypes = {
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(AuthRoute);
