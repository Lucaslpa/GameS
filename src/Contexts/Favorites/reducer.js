import { SET_FAVORITES } from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_FAVORITES:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};
