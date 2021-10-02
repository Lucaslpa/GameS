import { FavoriteTemplate } from '.';
import products from '../../db/products';

export default {
  title: 'FavoriteTemplate',
  component: FavoriteTemplate,
  args: {
    products
  }
};

export const Default = (args) => <FavoriteTemplate {...args} />;
