import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cards({ item }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    addToCart({ ...item, quantity }); // Use addToCart from context
    setQuantity(1);
  };

  if (!item) return null;

  return (
    <div className="p-4">
      <div className="card bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
      <Link to={`/book/${item._id}`}>
          {" "}
          {/* Link to the book's detail page */}
          <figure className="relative w-full h-[300px]">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[300px] object-cover"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/300x400?text=Book+Cover";
              }}
            />
          </figure>
        </Link>
        <div className="card-body p-4">
          <h2 className="card-title text-lg font-semibold">{item.name}</h2>
          <div className="badge badge-secondary">{item.category}</div>
          <p className="my-2">
            <span className="text-gray-400">Author:</span>
            <br />
            {item.title}
          </p>
          <div className="badge badge-outline">${item.price}</div>
          <div className="card-actions justify-between items-center mt-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center border rounded-lg">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="px-2 py-1 border-r hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  -
                </button>
                <span className="px-3">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="px-2 py-1 border-l hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="cursor-pointer px-3 py-1 rounded-full border-2 hover:bg-pink-500 hover:text-white duration-200"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
