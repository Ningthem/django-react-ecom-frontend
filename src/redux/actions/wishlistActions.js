import {
  LOAD_WISHLIST,
  ADD_WISHLIST,
  REMOVE_WISHLIST

} from './types';
import axios from 'axios';

export const addWishlist = productId => dispatch => {
  const body = { "product": productId }
  axios.post('/wishlist/', body)
    .then(res => {
      dispatch({ type: ADD_WISHLIST, payload: res.data })
    })
    .catch(err => {
      console.log(err)
    })
}

export const removeWishlist = wishlistId => dispatch => {
  axios.delete(`/wishlist/${wishlistId}/`)
    .then(res => {
      dispatch({ type: REMOVE_WISHLIST, payload: wishlistId })
    })
    .catch(err => {
      console.log(err.response.data)
    })
}

export const loadWishlist = () => dispatch => {
  axios.get('/wishlist/')
    .then(res => {
      dispatch({ type: LOAD_WISHLIST, payload: res.data })
    })
    .catch(err => {
      console.log(err)
    })
}