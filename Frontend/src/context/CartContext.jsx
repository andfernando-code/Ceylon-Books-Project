// src/context/CartContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthProvider";
import {
  addToCart,
  removeFromCart,
  updateCartItemQuantity,
  fetchCartItems,
} from "../api"; // Import API functions
import toast from "react-hot-toast";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [authUser] = useAuth();

  useEffect(() => {
    if (authUser && authUser._id) {
      fetchCartItemsFromAPI();
    } else {
      setCartItems([]);
      setCartCount(0);
    }
  }, [authUser]);

  const fetchCartItemsFromAPI = async () => {
    console.log("Fetching for user ID:", authUser._id); // Check if user ID is valid
    setLoading(true);
    try {
      const response = await fetchCartItems(authUser._id);
      console.log("API Response:", response);
      setCartItems(response.data);
      updateCartCount(response.data);
    } catch (error) {
      console.error("Error:", error); // Log the error for debugging
      toast.error("Error fetching cart items");
    } finally {
      setLoading(false);
    }
  };

  const updateCartCount = (items) => {
    const count = items.reduce((total, item) => total + item.quantity, 0);
    setCartCount(count);
  };

  const addToCartHandler = async (item) => {
    if (!authUser) {
      toast.error("Please login to add items to cart");
      return;
    }

    try {
      setLoading(true);
      const response = await addToCart({
        userId: authUser._id,
        bookId: item._id,
        quantity: item.quantity,
        price: item.price,
        name: item.name,
        image: item.image,
      });

      setCartItems(response.data.cart);
      updateCartCount(response.data.cart);
      toast.success("Added to cart!");
    } catch (error) {
      toast.error("Error adding to cart");
    } finally {
      setLoading(false);
    }
  };

  const removeFromCartHandler = async (itemId) => {
    try {
      setLoading(true);
      const response = await removeFromCart(itemId, authUser._id);
      setCartItems(response.data.cart);
      updateCartCount(response.data.cart);
      toast.success("Item removed from cart");
    } catch (error) {
      toast.error("Error removing item");
    } finally {
      setLoading(false);
    }
  };

  const updateQuantityHandler = async (itemId, newQuantity) => {
    try {
      setLoading(true);
      const response = await updateCartItemQuantity(
        itemId,
        authUser._id,
        newQuantity
      );
      setCartItems(response.data.cart);
      updateCartCount(response.data.cart);
    } catch (error) {
      toast.error("Error updating quantity");
    } finally {
      setLoading(false);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        loading,
        addToCart: addToCartHandler,
        removeFromCart: removeFromCartHandler,
        updateQuantity: updateQuantityHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
