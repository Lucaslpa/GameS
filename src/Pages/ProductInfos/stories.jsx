import { ProductInfosTemplate } from '.';
import products from '../../db/products';

export default {
  title: 'ProductInfosTemplate',
  component: ProductInfosTemplate,
  args: {
    product: products[0]
  }
};

export const Default = (args) => <ProductInfosTemplate {...args} />;
