import { createContext, useReducer, useContext } from 'react';
import PropTypes from 'prop-types';
import { reducer } from './reducer';

const initialState = {
  cart: [],
};

const context = createContext();

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <context.Provider value={[state, dispatch]}>{children}</context.Provider>
  );
};
CartContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCartContext = () => {
  const [state, dispatch] = useContext(context);
  return [state, dispatch];
};
