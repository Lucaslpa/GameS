import PropTypes from 'prop-types';
import { CartContextProvider } from './Cart';
import { FavoritesContextProvider } from './Favorites';
import { ProductsContextProvider } from './Products';

export const Contexts = ({ children }) => (
  <CartContextProvider>
    <FavoritesContextProvider>
      <ProductsContextProvider>{children}</ProductsContextProvider>
    </FavoritesContextProvider>
  </CartContextProvider>
);

Contexts.propTypes = {
  children: PropTypes.node.isRequired,
};
