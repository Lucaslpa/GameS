import { SET_FAVORITES } from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_FAVORITES:
      return { ...state, favorites: action.payload };
    default:
      return state;
  }
};
