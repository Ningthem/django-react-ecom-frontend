import {
  SET_ADDRESS,
  ADDRESS_LOADING,
  ADDRESS_LOADING_COMPLETE,
  ORDER_SUCCESS,
  ORDER_LOADING,
  ORDER_STOP_LOADING,


} from '../actions/types';

const initialState = {
  address: {},
  // address: {
  //   "first_name": "Ningthem",
  //   "last_name": "Yumnam",
  //   "line1": "Langmeidong Bazar",
  //   "line2": 'Kakching District',
  //   "landmark": "In Front of Bazar",
  //   "zip_code": "795103",
  //   "state": "Manipur",
  //   "country": "India",
  //   "mobile": "9366376724",
  // },
  addressLoading: false,
  orderLoading: false,
}

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDRESS_LOADING:
      return { ...state, addressLoading: true };

    case ADDRESS_LOADING_COMPLETE:
      return { ...state, addressLoading: false };

    case SET_ADDRESS:
      return { ...state, address: action.payload, addressLoading: false };

    case ORDER_LOADING:
      return { ...state, orderLoading: true };

    case ORDER_STOP_LOADING:
      return { ...state, orderLoading: false };

    case ORDER_SUCCESS:
      return { ...state, address: {}, orderLoading: false };

    default:
      return state;
  }
}

export default orderReducer;