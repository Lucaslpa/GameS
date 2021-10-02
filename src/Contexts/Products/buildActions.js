import { SET_PRODUCTS } from './actions';

export const buildActions = (dispatch) => ({
  SET_PRODUCTS: (products) =>
    dispatch({ type: SET_PRODUCTS, payload: products }),
});
