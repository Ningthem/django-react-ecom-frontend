import axios from 'axios';
import { setToastr } from './toastrActions';
import { loadCart } from './cartActions';
import { loadWishlist } from './wishlistActions';

import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT_SUCCESS,
  LOGIN_FAIL,
  CLEAR_CART,
} from './types';

const config = {
  headers: {
    'Content-Type': 'application/json',
  }
}

// Check token and load user ----------------
export const loadUser = () => dispatch => {
  // User loading
  dispatch({ type: USER_LOADING });

  axios.get('/auth/user', tokenConfig())
    .then(res => {
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
      dispatch(loadCart());
      dispatch(loadWishlist());

    })
    .catch(err => {
      console.log('loadUser: ' + err.response.data);
      dispatch({ type: AUTH_ERROR });
    })
}

// Register User --------------------------
export const registerUser = (userData, history) => dispatch => {
  dispatch({ type: USER_LOADING });
  axios.post('/auth/register', userData, config)
    .then(res => {
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
      dispatch(setToastr('success', 'User registered successfully'));
      history.push("/");
    })
    .catch(err => {
      console.log(err.response.data)
      const msg = Object.values(err.response.data)[0];
      dispatch(setToastr('error', msg));
      dispatch({ type: REGISTER_FAIL });
    })
}

// Login User --------------------------
export const loginUser = (loginData, history) => dispatch => {
  // const body = JSON.stringify({ username, password });
  dispatch({ type: USER_LOADING });
  axios.post('/auth/login', loginData, config)
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      dispatch(loadCart());
      history.goBack();
    })
    .catch(err => {
      dispatch(setToastr('error', err.response.data.non_field_errors.join()));
      dispatch({ type: LOGIN_FAIL });
      // console.log(err.response.data.non_field_errors.join());
    })
}

// LOGOUT USER ----------------
export const logoutUser = () => (dispatch, getState) => {

  axios.post('/auth/logout', null, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: LOGOUT_SUCCESS,
      });
      dispatch({ type: CLEAR_CART });
    })
    .catch(err => {
      console.log('logoutUser: ' + err.response.data);
      // dispatch({ type: AUTH_ERROR });
    });
}

export const tokenConfig = () => {
  const authToken = localStorage.getItem('authToken');

  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    }
  }
  // If token, add to headers config
  if (authToken) {
    config.headers['Authorization'] = `Token ${authToken}`;
  }

  return config;
}