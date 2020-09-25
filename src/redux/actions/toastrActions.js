import { SHOW_TOASTR, HIDE_TOASTR } from './types';

// ** Important
// showToastr is used inside Components
// setToastr is used inside actions -- usually called by a dispatch function directly. Check authAction


// To be used directly inside Components
export const showToastr = (alertType, message) => dispatch => {
  dispatch({
    type: SHOW_TOASTR,
    payload: { type: alertType, message: message }
  })
};

// To be used inside actions
export const hideToastr = () => dispatch => {
  dispatch({ type: HIDE_TOASTR })
}

export const setToastr = (type, message) => {
  return {
    type: SHOW_TOASTR,
    payload: { type, message }
  };
};