import { SET_CART } from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_CART:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};
