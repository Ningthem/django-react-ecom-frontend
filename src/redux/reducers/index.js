import { combineReducers } from 'redux';
import toastrReducer from './toastrReducer';
import uiReducer from './uiReducer';
import authReducer from './authReducer';
import cartReducer from './cartReducer';
import modalReducer from './modalReducer';
import orderReducer from './orderReducer';
import couponReducer from './couponReducer';
import wishlistReducer from './wishlistReducer';

export default combineReducers({
  toastr: toastrReducer,
  ui: uiReducer,
  auth: authReducer,
  cart: cartReducer,
  modal: modalReducer,
  orderController: orderReducer,
  couponController: couponReducer,
  wishlistController: wishlistReducer,
});