import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomeTemplate } from './Pages/Home';
import { FavoriteTemplate } from './Pages/Favorite';
import { CartTemplate } from './Pages/Cart';
import { ListProductsTemplate } from './Pages/ListProducts';
import { ProductInfosTemplate } from './Pages/ProductInfos';
import { useCartContext } from './Contexts/Cart';
import { useFavoritesContext } from './Contexts/Favorites';
import { useProductsContext } from './Contexts/Products';
import { buildActions } from './Contexts/Products/buildActions';
import { useQuery } from './Hooks/useQuery';
import { SearchProducts } from './utils/Search';

import productsDB from './db/products';

export const Routes = () => {
  const [state, dispatch] = useProductsContext();
  const ProductsContext = buildActions(dispatch);
  const [CartState] = useCartContext();
  const [FavoritesState] = useFavoritesContext();
  const { cart } = CartState;
  const { favorites } = FavoritesState;
  const { products } = state;
  const query = useQuery().get('search');

  function handleSetProducts(search) {
    if (search) {
      const result = SearchProducts(search, productsDB);
      ProductsContext.SET_PRODUCTS(result);
      return;
    }
    ProductsContext.SET_PRODUCTS(productsDB);
  }

  useEffect(() => {
    handleSetProducts(query);
  }, []);
  return (
    <HomeTemplate onSearch={handleSetProducts}>
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
  );
};
