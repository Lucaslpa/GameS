import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomeTemplate } from './Pages/Home';
import { FavoriteTemplate } from './Pages/Favorite';
import { CartTemplate } from './Pages/Cart';
import { ListProductsTemplate } from './Pages/ListProducts';
import { ProductInfosTemplate } from './Pages/ProductInfos';
import { useCartContext } from './Contexts/Cart';
import { useFavoritesContext } from './Contexts/Favorites';
import { useProductsContext } from './Contexts/Products';
import { buildActions } from './Contexts/Products/buildActions';

import productsDB from './db/products';

export const Routes = () => {
  const [state, dispatch] = useProductsContext();
  const ProductsContext = buildActions(dispatch);
  const [CartState] = useCartContext();
  const [FavoritesState] = useFavoritesContext();
  const { cart } = CartState;
  const { favorites } = FavoritesState;
  const { products } = state;

  useEffect(() => {
    ProductsContext.SET_PRODUCTS(productsDB);
  }, []);
  return (
    <Router>
      <HomeTemplate>
        <Switch>
          <Route exact path="/">
            <ListProductsTemplate products={products} />
          </Route>
          <Route path="/Favorites">
            <FavoriteTemplate products={favorites} />
          </Route>
          <Route path="/Cart">
            <CartTemplate products={cart} />
          </Route>
          <Route path="/Product/:id">
            <ProductInfosTemplate products={products} />
          </Route>
        </Switch>
      </HomeTemplate>
    </Router>
  );
};
