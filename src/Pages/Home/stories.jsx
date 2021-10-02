import { HomeTemplate } from '.';
import products from '../../db/products';
import { ListProducts } from '../../components/ListProducts';

export default {
  title: 'HomeTemplate',
  component: HomeTemplate,
};

export const Default = (args) => (
  <HomeTemplate {...args}>
    <ListProducts products={products} />
  </HomeTemplate>
);
