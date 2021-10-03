import { SET_FAVORITES } from './actions';

export const buildActions = (dispatch) => ({
  SET_FAVORITES: (newFavorites) =>
    dispatch({ type: SET_FAVORITES, payload: newFavorites }),
});
