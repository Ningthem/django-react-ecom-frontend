import { SHOW_TOASTR, HIDE_TOASTR } from '../actions/types';

const toastrReducer = (state = [], action) => {
  switch (action.type) {
    case SHOW_TOASTR:
      return [...state, action.payload]

    case HIDE_TOASTR:
      return [];
    default:
      return state;
  };
};

export default toastrReducer;