import React from "react";
import Price from "./Price";
import { Link } from "react-router-dom";
//import { useCart } from "../store/cart-context";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart-slice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="w-88 rounded-md mx-auto border border-gray-300 dark:border-gray-400 shadow-md overflow-hidden flex flex-col bg-white dark:bg-gray-800 hover:border-primary dark:hover:border-lighter transition">
      <Link
        to={`/products/${product.productId}`}
        state={{ product }}
        className="relative w-full h-72 border-b border-gray-300 dark:border-gray-400"
      >
        <img
          src={product.imageUrl}
          alt={product.productName}
          className="w-full h-full object-fill transition-transform duration-500 ease-in-out hover:scale-110"
        />
      </Link>
      <div className="relative h-48 p-8 flex flex-col font-primary">
        <Link to={`/products/${product.productId}`} state={{ product }}>
          <h2 className="text-xl font-semibold text-primary dark:text-lighter mb-2 hover:underline">
            {product.productName}
          </h2>
        </Link>
        <p className="text-base text-gray-600 dark:text-light mb-4">
          {product.productDescription}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <div className="bg-lighter text-primary font-medium text-sm py-2 px-4 rounded">
            <Price currency="$" price={product.productPrice} />
          </div>
          <button
            className="bg-primary dark:bg-light text-white dark:text-primary font-medium text-sm py-2 px-4 rounded-md hover:cursor-pointer"
            onClick={() => dispatch(addToCart({ product, quantity: 1 }))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
