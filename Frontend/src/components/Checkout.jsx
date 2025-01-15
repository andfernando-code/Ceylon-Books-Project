import React from "react";
import { useLocation } from "react-router-dom";

function Checkout() {
  const location = useLocation();
  const { item } = location.state || {};

  if (!item) {
    return <p>No item selected for checkout.</p>;
  }

  return (
    <div className="checkout-container p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="checkout-card bg-base-100 shadow-lg rounded p-4 dark:bg-slate-900 dark:text-white">
        <figure>
          <img src={item.image} alt={item.name} className="w-1/3 mx-auto" />
        </figure>
        <h2 className="text-xl font-semibold mt-4">{item.name}</h2>
        <p className="text-gray-500 my-2">{item.title}</p>
        <p className="text-lg font-bold">${item.price}</p>
        <button className="mt-4 w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600">
          Confirm Purchase
        </button>
      </div>
    </div>
  );
}

export default Checkout;
