import { useSelector, useDispatch } from 'react-redux';
import './ProductTable.scss';
import { saveAmount, savePrice } from '../../actions/saveFields';
import ProductTableField from '../ProductTableField/ProductTableField';
import ProductTableFieldTotal from '../ProductTableFieldTotal/ProductTableFieldTotal';

function ProductTable() {
  const headers = useSelector((state) => state.productTable.headers);
  const products = useSelector((state) => state.productTable.products);
  const dispatch = useDispatch();

  function countTotal() {
    let list = [];
    let total = null;
    for (let i = 0; i < products.length; i += 1) {
      list.push(products[i].amount * products[i].priceForOne);
    }

    for (let i = 0; i < list.length; i += 1) {
      total += list[i];
    }

    return total;
  }

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
                  <input type="text" value={name} disabled={true} className="product-table-main__data" />
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

                <ProductTableFieldTotal amount={amount} price={priceForOne} />
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="product-table__divider" />

      <div className="product-table__total">{'Total: ' + countTotal()}</div>
    </div>
  );
}

export default ProductTable;
