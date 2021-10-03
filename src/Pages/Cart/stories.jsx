import { CartTemplate } from '.';
import products from '../../db/products';

export default {
  title: 'CartTemplate',
  component: CartTemplate,
  args: {
    products
  }
};

export const Default = (args) => <CartTemplate {...args} />;
