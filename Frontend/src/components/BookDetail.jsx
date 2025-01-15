import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Navbar from "./Navbar";
import Footer from "./Footer";

function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`http://localhost:4003/book/${id}`);
        if (!response.ok) {
          throw new Error("Book not found");
        }
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error("Error fetching book:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [id]);

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    addToCart({ ...book, quantity });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-center">
        <div className="bg-red-50 text-red-800 p-4 rounded-lg">
          <h2 className="text-lg font-semibold">Error</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!book) return null;

  return (
    <div className="container mx-auto p-4 mt-[100px]">
      <Navbar />
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left side - Image */}
        <div className="md:w-1/2">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src={book.image}
              alt={book.name}
              className="w-full object-contain h-[500px]"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/400x600?text=Book+Cover";
              }}
            />
          </div>
        </div>

        {/* Right side - Details */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{book.name}</h1>
          
          {/* Author */}
          <p className="text-lg text-gray-600 mb-4">{book.title}</p>
          
          {/* Rating placeholder */}
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400">
              {"★★★★★".split("").map((star, i) => (
                <span key={i}>{star}</span>
              ))}
            </div>
            <a href="#reviews" className="ml-2 text-blue-600 hover:underline">
              Write a review
            </a>
          </div>

          {/* Price */}
          <div className="mb-6">
            <p className="text-sm text-gray-500">OUR PRICE</p>
            <p className="text-3xl font-bold text-orange-500">
              $.{book.price.toFixed(2)}
            </p>
            <p className="text-sm text-gray-500">Price subject to change</p>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center">
              <span className="text-gray-600 mr-2">QUANTITY:</span>
              <div className="flex items-center border rounded-lg">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="px-3 py-1 border-r hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-4">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="px-3 py-1 border-l hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={handleAddToCart}
              className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
            >
              Add To Cart
            </button>
            <button className="px-6 py-2 bg-orange-600 text-white rounded hover:bg-orange-700">
              Buy Now
            </button>
          </div>

          {/* Additional Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-gray-600">Category:</span>
              <span className="font-medium">{book.category}</span>
            </div>
            
            {/* Delivery Estimate */}
            <div className="text-sm text-gray-600">
              Estimated delivery on {new Date().toLocaleDateString()}
            </div>
            
            {/* Shipping Status */}
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-green-500">In Stock</span>
            </div>
          </div>
        </div>
      </div>

      {/* Description Tabs */}
      <div className="mt-12">
        <div className="border-b mb-4">
          <button className="px-6 py-2 bg-orange-500 text-white rounded-t-lg">
            Description
          </button>
        </div>
        <div className="prose max-w-none">
          <p className="text-gray-700">{book.description}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BookDetail;