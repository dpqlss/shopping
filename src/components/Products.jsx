import React from "react";
import ProductCard from "./ProductCard";
import useProducts from "../hooks/useProducts";

const Products = () => {
  const {
    ProductsQuery: { isLoading, error, data: products },
  } = useProducts();

  return (
    <>
      {isLoading && <p>Loing...</p>}
      {error && <p>{error}</p>}
      <ul className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3 lg-grid-cols-4">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </>
  );
};

export default Products;
