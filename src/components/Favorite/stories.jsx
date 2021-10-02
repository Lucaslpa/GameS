import { Favorite } from '.';
import products from '../../db/products';

export default {
  title: 'Favorite',
  component: Favorite,
  args: {
    products,
  },
};

export const Default = (args) => <Favorite {...args} />;
