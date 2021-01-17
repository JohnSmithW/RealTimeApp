import React from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import './ProductTable.scss';
import { saveAmount, savePrice } from '../../actions/saveFields';
import ProductTableField from '../ProductTableField/ProductTableField';

function ProductTable() {
  const headers = useSelector((state) => state.productTable.headers, shallowEqual);
  const products = useSelector((state) => state.productTable.products, shallowEqual);
  const dispatch = useDispatch();

  return (
    <div className="product-table">
      <table className="product-table-main">
        <tbody>
          <tr className="product-table-main__row">
            {headers.map(({ id, name }) => {
              return (
                <th key={id} className="product-table-main__header">
                  {name}
                </th>
              );
            })}
          </tr>

          <tr />

          {products.map(({ id, name, amount, priceForOne }) => {
            return (
              <tr key={id} className="product-table-main__row">
                <td>
                  <input type="text" value={name} className="product-table-main__data" />
                </td>
                <ProductTableField
                  tableValue={amount}
                  onBlur={(value) => {
                    dispatch(saveAmount(id, value));
                  }}
                />

                <ProductTableField
                  tableValue={priceForOne}
                  onBlur={(value) => {
                    dispatch(savePrice(id, value));
                  }}
                />

                <td>
                  <input
                    type="number"
                    value={amount * priceForOne}
                    className="product-table-main__data product-table-main__data_number"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
