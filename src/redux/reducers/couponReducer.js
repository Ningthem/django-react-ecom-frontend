import { APPLY_COUPON, REMOVE_COUPON } from '../actions/types';

const initialState = {
  availableCoupons: ["INSTANT10", "SEASON10"],
  appliedCoupon: null,
}

const couponReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPLY_COUPON:
      return { ...state, appliedCoupon: action.payload };

    case REMOVE_COUPON:
      return { ...state, appliedCoupon: null };

    default:
      return state;
  }
}

export default couponReducer;