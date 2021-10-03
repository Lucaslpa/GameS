import { ListProductsTemplate } from '.';
import products from '../../db/products';

export default {
  title: 'ListProductsTemplate',
  component: ListProductsTemplate,
  args: {
    products
  }
};

export const Default = (args) => <ListProductsTemplate {...args} />;
