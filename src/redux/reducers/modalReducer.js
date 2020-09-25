import { SET_MODAL_SLUG, UNSET_MODAL_SLUG } from '../actions/types';

const initialState = {
  productSlug: null
}

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODAL_SLUG:
      return { ...state, productSlug: action.payload };

    case UNSET_MODAL_SLUG:
      return { ...state, productSlug: null };

    default:
      return state;
  }
}

export default modalReducer;