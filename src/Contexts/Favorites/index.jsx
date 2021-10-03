import { createContext, useReducer, useContext } from 'react';
import PropTypes from 'prop-types';
import { reducer } from './reducer';

const initialState = {
  favorites: [],
};

const context = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <context.Provider value={[state, dispatch]}>{children}</context.Provider>
  );
};
FavoritesContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useFavoritesContext = () => {
  const [state, dispatch] = useContext(context);
  return [state, dispatch];
};
