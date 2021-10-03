import { Product } from '.';
import products from '../../db/products';

export default {
  title: 'Product',
  component: Product,
  args: {
    product: products[0]
  }
};

export const Default = (args) => <Product {...args} />;
