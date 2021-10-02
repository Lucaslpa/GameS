import { createContext, useReducer, useContext } from 'react';
import PropTypes from 'prop-types';
import { reducer } from './reducer';

const initialState = {
  products: [],
};

const context = createContext();

export const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <context.Provider value={[state, dispatch]}>{children}</context.Provider>
  );
};
ProductsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useProductsContext = () => {
  const [state, dispatch] = useContext(context);
  return [state, dispatch];
};
