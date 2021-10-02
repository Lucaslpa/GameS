import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomeTemplate } from './Pages/Home';
import { FavoriteTemplate } from './Pages/Favorite';
import { CartTemplate } from './Pages/Cart';
import { ListProductsTemplate } from './Pages/ListProducts';
import { ProductInfosTemplate } from './Pages/ProductInfos';

import products from './db/products';

export const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <HomeTemplate>
          <ListProductsTemplate products={products} />
        </HomeTemplate>
      </Route>
      <Route path="/Favorites">
        <HomeTemplate>
          <FavoriteTemplate products={products} />
        </HomeTemplate>
      </Route>
      <Route path="/Cart">
        <HomeTemplate>
          <CartTemplate products={products} />
        </HomeTemplate>
      </Route>
      <Route path="/Product">
        <HomeTemplate>
          <ProductInfosTemplate product={products[3]} />
        </HomeTemplate>
      </Route>
    </Switch>
  </Router>
);
