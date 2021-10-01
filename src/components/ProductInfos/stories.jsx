import { ProductInfos } from '.';
import products from '../../db/products';

export default {
  title: 'ProductInfos',
  component: ProductInfos,
  args: {
    product: products[4],
    freight: 10,
  },
};

export const Default = (args) => <ProductInfos {...args} />;
