import PropTypes from 'prop-types';
import { HeartBroken as HeartBrokenSVG } from '@styled-icons/icomoon';
import * as S from '../style';

export const Table = ({ products }) => (
  <S.Products>
    <thead>
      <tr>
        <th>
          <span>Product</span>
        </th>
        <th>
          <span>Name</span>
        </th>

        <th>
          <span>Price</span>
        </th>
      </tr>
    </thead>
    <tbody>
      {products.map((product) => (
        <S.Product key={product.id}>
          <td>
            <img alt="Product" src={`/assets/${product.image}`} />
          </td>
          <td>
            <span data-testid="name">{product.name}</span>
          </td>
          <td>
            <span data-testid="price">$ {product.price}</span>
          </td>
          <td>
            <S.Buttons>
              <a href="/">buy</a>
              <button type="button">
                <HeartBrokenSVG />
              </button>
            </S.Buttons>
          </td>
        </S.Product>
      ))}
    </tbody>
  </S.Products>
);

Table.propTypes = {
  products: PropTypes.array.isRequired,
};
