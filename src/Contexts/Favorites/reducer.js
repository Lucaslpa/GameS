import { SET_FAVORITE } from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_FAVORITE:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};
