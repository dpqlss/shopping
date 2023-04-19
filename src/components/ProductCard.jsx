import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({
  product,
  product: { id, image, title, category, price },
}) => {
  const navigate = useNavigate();

  return (
    <li
      onClick={() => {
        navigate(`/products/${id}`, { state: { product } });
      }}
      className="overflow-hidden transition-all rounded-lg shadow-md cursor-pointe hover:scale-105"
    >
      <img className="w-full" src={image} alt={title} />
      <div className="flex justify-between px-2 mt-2 text-lg item-center">
        <h3 className="trumcate">{title}</h3>
        <p>{`₩${price}`}</p>
      </div>
      <p className="px-2 mb-2 text-gray-600">{category}</p>
    </li>
  );
};

export default ProductCard;
