import { useState } from "react";
import jsonData from "../data.json";
import React from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [inputSearch, setinputSearch] = useState({
    search: "",
    isInStock: false,
  });

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar inputSearch={inputSearch} setinputSearch={setinputSearch} />
      <ProductTable products={products} inputSearch={inputSearch} />
    </div>
  );
}

export default ProductsPage;
