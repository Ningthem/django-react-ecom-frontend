import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, auth, ...rest }) => {

  const [config, setConfig] = useState({ loading: true, authenticated: false });

  useEffect(() => {
    if (auth.isLoading === false && auth.isAuthenticated === true) {
      setConfig({ loading: false, authenticated: auth.isAuthenticated });
    }
    
    if (auth.isLoading === false && auth.isAuthenticated === false) {
      setConfig({ loading: false, authenticated: auth.isAuthenticated });
    }

  }, [auth]);

  const { loading } = config;
  if (loading) {
    return <h2>Loading</h2>
  }
  if (!localStorage.getItem("authToken")) {
    return <Redirect to="/login" />
  } else
    return (

      <Route
        {...rest}
        render={props => {
          return <Component {...props} />
        }}
      />
    );
}

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
})
export default connect(mapStateToProps)(PrivateRoute);
