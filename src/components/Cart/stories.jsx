import { Cart } from '.';
import products from '../../db/products';

export default {
  title: 'Cart',
  component: Cart,
  args: {
    products: products.map((product) => {
      product.quantity = 1;
      return product;
    }),
    freight: 10,
  },
};

export const Default = (args) => <Cart {...args} />;
