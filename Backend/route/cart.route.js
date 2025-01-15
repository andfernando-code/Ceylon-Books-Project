import express from "express";
import {
    addToCart,
    removeFromCart,
    updateCartItemQuantity,
    getCartItems
} from "../controller/cart.controller.js";

const router = express.Router();

// Add item to cart
router.post("/add", addToCart);

// Remove item from cart
router.delete("/remove/:itemId", removeFromCart);

// Update item quantity in cart
router.put("/update/:itemId", updateCartItemQuantity);

// Get cart items
router.get("/", getCartItems);

export default router;