import {
  ADD_TO_CART,
  // REMOVE_FROM_CART,
  LOAD_CART,
  CART_LOADING,
  CART_STOP_LOADING,
  CLEAR_CART,
  ORDER_SUCCESS,

} from '../actions/types';

const initialState = {
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
  cartSavings: 0,
  loading: false,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_LOADING:
      return { ...state, loading: true };

    case ADD_TO_CART:
      return { ...state };

    case LOAD_CART:
      return { ...state, ...action.payload, loading: false };

    case CART_STOP_LOADING:
      return { ...state, loading: false }

    case CLEAR_CART:
    case ORDER_SUCCESS:
      return { ...state, ...initialState }

    default:
      return state;
  }
}

export default cartReducer;