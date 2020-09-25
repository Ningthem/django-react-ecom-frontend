import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT_SUCCESS,
} from '../actions/types';

import axios from 'axios';

const initialState = {
  authToken: localStorage.getItem('authToken'),
  isAuthenticated: false,
  isLoading: false,
  user: null,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state, isLoading: true,
      };

    case USER_LOADED:
      const authToken = localStorage.getItem("authToken")
      axios.defaults.headers.common['Authorization'] = `Token ${authToken}`;
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload
      };

    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('authToken', action.payload.token);
      axios.defaults.headers.common['Authorization'] = `Token ${action.payload.token}`;
      return {
        ...state,
        authToken: action.payload.token,
        user: action.payload.user,   //payload is an obj here
        isAuthenticated: true,
        isLoading: false
      }

    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      localStorage.removeItem('authToken');
      delete axios.defaults.headers.common['Authorization'];
      window.location.reload();
      return {
        ...state,
        authToken: null,
        isAuthenticated: false,
        isLoading: false,
        user: null,
      };

    default:
      return state;
  }
}