import { useEffect, useState } from 'react';
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
import { SortMethods } from './utils/Sort';

import productsDB from './db/products';

export const Routes = () => {
  const [currentSort, setCurrentSort] = useState('popularity');
  const [productsContext, dispatch] = useProductsContext();
  const ProductsContext = buildActions(dispatch);
  const [CartContext] = useCartContext();
  const [FavoritesContext] = useFavoritesContext();
  const { cart } = CartContext;
  const { favorites } = FavoritesContext;
  const { products } = productsContext;
  const SearchContent = useQuery().get('search');

  function handleSetProducts(search) {
    if (search) {
      const result = SearchProducts(search, productsDB);
      const sort = SortMethods[currentSort](result);
      ProductsContext.SET_PRODUCTS(sort);
      return;
    }
    const sort = SortMethods[currentSort](productsDB);

    ProductsContext.SET_PRODUCTS(sort);
  }

  useEffect(() => {
    handleSetProducts(SearchContent);
  }, []);
  useEffect(() => {
    handleSetProducts(SearchContent);
  }, [currentSort]);

  return (
    <HomeTemplate onSearch={handleSetProducts}>
      <Switch>
        <Route exact path="/">
          <ListProductsTemplate
            products={products}
            onSelectSortMethod={setCurrentSort}
          />
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
