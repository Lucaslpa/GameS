import { SET_CART } from './actions';

export const buildActions = (dispatch) => ({
  SET_CART: (newCart) => dispatch({ type: SET_CART, payload: newCart }),
});
