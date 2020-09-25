import {
  LOAD_WISHLIST,
  ADD_WISHLIST,
  REMOVE_WISHLIST

} from '../actions/types';

const initialState = {
  wishlistItems: []
}

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_WISHLIST:
      return { ...state, wishlistItems: action.payload }

    case ADD_WISHLIST:
      return { ...state, wishlistItems: [...state.wishlistItems, action.payload] }

    case REMOVE_WISHLIST:
      // let index = state.wishlistItems.findIndex(item => item.id === action.payload)
      // state.wishlistItems.splice(index, 1);
      let newWishlistItems = state.wishlistItems.filter(item => item.id !== action.payload);
      return {
        ...state, wishlistItems: newWishlistItems
      };

    default:
      return state;
  }
}

export default wishlistReducer;