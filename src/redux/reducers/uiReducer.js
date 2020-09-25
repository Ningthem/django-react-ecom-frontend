import {
  UI_LOADING,
  STOP_UI_LOADING
} from '../actions/types';

const initialState = {
  loading: false,
  pagination: {}
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case UI_LOADING:
      return { ...state, loading: true };

    case STOP_UI_LOADING:
      return {...state, loading: false};

    default:
      return state;
  }
};

export default uiReducer;