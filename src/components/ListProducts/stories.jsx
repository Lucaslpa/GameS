import { ListProducts } from '.';
import products from '../../db/products';

export default {
  title: 'ListProducts',
  component: ListProducts,
  args: {
    products,
  },
};

export const Default = (args) => <ListProducts {...args} />;
