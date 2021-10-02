import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomeTemplate } from './Pages/Home';
import { FavoriteTemplate } from './Pages/Favorite';
import { CartTemplate } from './Pages/Cart';
import { ListProductsTemplate } from './Pages/ListProducts';
import { ProductInfosTemplate } from './Pages/ProductInfos';

import products from './db/products';

export const Routes = () => (
  <Router>
    <HomeTemplate>
      <Switch>
        <Route exact path="/">
          <ListProductsTemplate products={products} />
        </Route>
        <Route path="/Favorites">
          <FavoriteTemplate products={products} />
        </Route>
        <Route path="/Cart">
          <CartTemplate products={products} />
        </Route>
        <Route path="/Product">
          <ProductInfosTemplate product={products[3]} />
        </Route>
      </Switch>
    </HomeTemplate>
  </Router>
);
