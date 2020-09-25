import {
  ADD_TO_CART,
  // REMOVE_FROM_CART,
  LOAD_CART,
  CART_LOADING,
  CART_STOP_LOADING,
} from './types';
import axios from 'axios';
import { setToastr } from '../actions/toastrActions';
import history from '../../utility/history';

const config = {
  headers: {
    'Content-Type': 'application/json',
  }
}

export const addToCart = (slug, quantity) => (dispatch, getState) => {
  const body = JSON.stringify({ slug, quantity });

  if(!getState().auth.isAuthenticated){
    return history.push("/login");
  }
  const checkExist = getState().cart.cartItems.filter(function (entry) { return entry.slug === slug; });

  dispatch({ type: CART_LOADING });
  axios.post('/add-to-cart/', body, config)
    .then(res => {
      const alert = checkExist.length > 0 ? `Item value updated to ${res.data.quantity}` : 'Item added to cart'

      dispatch({ type: ADD_TO_CART })

      dispatch(setToastr('success', alert))
      dispatch(loadCart())
    })
    .catch(err => {
      if (err.response.status === 400) {
        dispatch(setToastr('info', err.response.data.message));
        dispatch({ type: CART_STOP_LOADING });
      }
    })
}

export const loadCart = () => dispatch => {
  dispatch({ type: CART_LOADING });
  axios.get('/cart-items/')
    .then(res => {
      // console.log(res.data)
      dispatch({
        type: LOAD_CART,
        payload: res.data
      })
    })
    .catch(err => {
      console.log(err.response.data);
    })
}

export const removeFromCart = productId => dispatch => {
  dispatch({ type: CART_LOADING });
  axios.delete(`/remove-from-cart/${productId}/`)
    .then(res => {
      dispatch(setToastr('success', "Product removed from cart"));
      dispatch({ type: CART_STOP_LOADING });
      dispatch(loadCart());
    })
    .catch(err => {
      dispatch(setToastr('error', err.response.data));
      dispatch({ type: CART_STOP_LOADING });
    })
}

export const changeCartQuantity = (orderItemId, quantity) => dispatch => {
  // const body = JSON.stringify(quantity);
  const body = { "quantity": quantity }
  console.log(body)
  axios.patch(`/order-item/change-quantity/${orderItemId}/`, body)
    .then(res => {
      console.log(res.data)
      dispatch(loadCart());
    })
    .catch(err => {
      dispatch(setToastr('error', err.response.data));
    })
}