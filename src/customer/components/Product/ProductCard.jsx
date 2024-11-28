import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  // Calculate the discount percentage
  const discountPercent = (
    ((product.price - product.discountedPrice) / product.price) *
    100
  ).toFixed(0); // Round to 0 decimal places

  return (
    <div onClick={() => navigate(`/product/${product._id}`)} className="product-card w-[15rem] m-3  transition-all cursor-pointer ">
      <div className="h-[20rem]">
        <img
          className="h-full w-full object-cover object-lrft-top"
          src={product.imageUrl}
          alt=""
        />
      </div>

      <div className="text-Part bg-white p-3">
        <div>
          <p className="font-bold opacity-60">{product.brand}</p>
          <p>{product.title}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold">{product.discountedPrice}</p>
          <p className="line-through opacity-50">{product.price}</p>
          <p className="text-green-600 font-semibold">{discountPercent} % off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
