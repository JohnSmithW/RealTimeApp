import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './ProductTable.scss';
import { saveAmount, savePrice } from '../../actions/saveFields';
import { highlightAmountField, highlightPriceField } from '../../actions/highlightField';
import sendCoordinates from '../../actions/sendCoordinates';
import ProductTableField from '../ProductTableField/ProductTableField';
import ProductTableFieldTotal from '../ProductTableFieldTotal/ProductTableFieldTotal';
import UserCursor from '../UserCursor/UserCursor';
import countTotal from '../../helper/products';

function ProductTable() {
  const headers = useSelector((state) => state.productTable.headers);
  const products = useSelector((state) => state.productTable.products);
  const users = useSelector((state) => state.users);

  const tableRef = useRef();

  const dispatch = useDispatch();

  return (
    <div
      ref={tableRef}
      onMouseMove={(event) => {
        let rect = tableRef.current.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;

        dispatch(sendCoordinates(users.user, x, y));
      }}
      className="product-table"
    >
      {users.users.map(({ id, x, y }) => id !== users.user && <UserCursor key={id} x={x} y={y} />)}

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
                  <input type="text" value={name} disabled={true} className="product-table-main__data" />
                </td>
                <ProductTableField
                  tableValue={amount}
                  onDoubleClick={() => {
                    dispatch(highlightAmountField(id));
                  }}
                  onBlur={(value) => {
                    dispatch(saveAmount(id, value));
                  }}
                />

                <ProductTableField
                  tableValue={priceForOne}
                  onDoubleClick={() => {
                    dispatch(highlightPriceField(id));
                  }}
                  onBlur={(value) => {
                    dispatch(savePrice(id, value));
                  }}
                />

                <ProductTableFieldTotal amount={amount} price={priceForOne} />
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="product-table__divider" />

      <div className="product-table__total">{'Total: ' + countTotal(products)}</div>
    </div>
  );
}

export default ProductTable;
