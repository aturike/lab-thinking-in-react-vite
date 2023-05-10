import React from "react";
import ProductRow from "./ProductRow";

function ProductTable({ products, inputSearch }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products
          .map((product) => (
            <ProductRow
              key={product.id}
              price={product.price}
              name={product.name}
              onStock={product.inStock}
            />
          ))
          .filter((product) =>
            product.props.name
              .toLowerCase()
              .includes(inputSearch.search.toLowerCase())
          )
          .filter((product) => {
            if (inputSearch.isInStock) {
              return product.props.onStock;
            } else {
              return true;
            }
          })}
      </tbody>
    </table>
  );
}

export default ProductTable;
