import { SET_FAVORITE } from './actions';

export const buildActions = (dispatch) => ({
  SET_FAVORITE: (productFavorite) =>
    dispatch({ type: SET_FAVORITE, payload: productFavorite }),
});
