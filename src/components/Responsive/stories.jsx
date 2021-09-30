import { Responsive } from '.';

export default {
  title: 'Responsive',
  component: Responsive,
  args: {
    screen: 'web',
  },
};

export const Default = (args) => (
  <Responsive {...args}>
    <h1>hello world</h1>
  </Responsive>
);
