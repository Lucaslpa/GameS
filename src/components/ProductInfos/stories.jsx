import { ProductInfos } from '.';
import products from '../../db/products';

export default {
  title: 'ProductInfos',
  component: ProductInfos,
  args: {
    product: products[6],
  },
};

export const Default = (args) => <ProductInfos {...args} />;
