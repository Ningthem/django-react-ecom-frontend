import {
  SET_ADDRESS,
  ADDRESS_LOADING,
  ADDRESS_LOADING_COMPLETE,
  APPLY_COUPON,
  REMOVE_COUPON,
  ORDER_SUCCESS,
  ORDER_LOADING,
  ORDER_STOP_LOADING,

} from './types';

import axios from 'axios';
import { setToastr } from '../actions/toastrActions';

export const setAddress = address => dispatch => {
  dispatch({ type: ADDRESS_LOADING });

  const { firstName, lastName, country, line1, line2, landmark, state, zipCode, mobile, } = address;
  const body = {
    "first_name": firstName, "last_name": lastName, "line1": line1, "line2": line2,
    "landmark": landmark, "state": state, "country": country, "zip_code": zipCode, "mobile": mobile
  };

  axios.post(`/address/`, body)
    .then(res => {
      dispatch({ type: SET_ADDRESS, payload: res.data })
      console.log(res.data);
    })
    .catch(err => {
      console.log(err.response.data)
      dispatch({ type: ADDRESS_LOADING_COMPLETE });
    })
}

export const applyCoupon = (couponName) => dispatch => {
  dispatch({ type: APPLY_COUPON, payload: couponName });
  dispatch(setToastr('success', `Coupon ${couponName} applied successfully`));
}

export const removeCoupon = () => dispatch => {
  dispatch({ type: REMOVE_COUPON });
  dispatch(setToastr('success', `Coupon removed successfully`));
}

export const placeOrder = (addressId, couponName, history) => dispatch => {
  dispatch({ type: ORDER_LOADING });

  const body = { "address_id": addressId, coupon: couponName };
  axios.post("/order/", body)
    .then(res => {
      history.push(`/order-success/${res.data.order_id}`);
      dispatch({ type: ORDER_SUCCESS });
    })
    .catch(err => {
      dispatch({ type: ORDER_STOP_LOADING })
    })
}
