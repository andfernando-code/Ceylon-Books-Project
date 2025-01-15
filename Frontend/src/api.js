// src/api.js
import axios from "axios";

const API_URL = "http://localhost:4003"; // Update this if your backend is hosted elsewhere

const api = axios.create({
  baseURL: API_URL,
});

// User API
export const signup = async (userData) => {
  return await api.post("/user/signup", userData);
};

export const login = async (userData) => {
  return await api.post("/user/login", userData);
};

// Book API
export const fetchBooks = async () => {
  return await api.get("/book");
};

// Cart API
export const addToCart = async (cartData) => {
  return await api.post("/cart/add", cartData);
};

export const removeFromCart = async (itemId, userId) => {
  return await api.delete(`/cart/remove/${itemId}`, { params: { userId } });
};

export const updateCartItemQuantity = async (itemId, userId, quantity) => {
  return await api.put(`/cart/update/${itemId}`, { userId, quantity });
};

export const fetchCartItems = async (userId) => {
  return await api.get("/cart", { params: { userId } });
};
