import { SET_MODAL_SLUG, UNSET_MODAL_SLUG } from './types';

export const setModalSlug = slug => dispatch => {
  dispatch({ type: SET_MODAL_SLUG, payload: slug });
}

export const unSetModalSlug = () => dispatch => {
  dispatch({ type: UNSET_MODAL_SLUG });
}