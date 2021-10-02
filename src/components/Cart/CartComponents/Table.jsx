import PropTypes from 'prop-types';
import { Delete as DeleteSVG } from '@styled-icons/material-outlined/';
import * as S from '../style';

export const Table = ({ products, onChange, onDeleteProduct }) => (
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
        <th>
          <span>Quantity</span>
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
            <input
              min={1}
              data-testid="quantity"
              onChange={(e) => onChange(product.id, e.target.value)}
              type="number"
              defaultValue={product.quantity ? product.quantity : 1}
            />
          </td>
          <td>
            <DeleteSVG onClick={() => onDeleteProduct(product.id)} />
          </td>
        </S.Product>
      ))}
    </tbody>
  </S.Products>
);

Table.propTypes = {
  products: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  onDeleteProduct: PropTypes.func,
};
