import Cart from "../model/cart.model.js"; // Import the Cart model

// Add item to cart
export const addToCart = async (req, res) => {
    const { userId, bookId, quantity, price, name, image } = req.body;

    try {
        let cart = await Cart.findOne({ userId });

        if (!cart) {
            // If no cart exists for the user, create a new one
            cart = new Cart({
                userId,
                items: [{ bookId, quantity, price, name, image }],
            });
        } else {
            // If cart exists, check if the item is already in the cart
            const existingItemIndex = cart.items.findIndex(item => item.bookId.toString() === bookId);

            if (existingItemIndex > -1) {
                // If item exists, update the quantity
                cart.items[existingItemIndex].quantity += quantity;
            } else {
                // If item does not exist, add it to the cart
                cart.items.push({ bookId, quantity, price, name, image });
            }
        }

        await cart.save();
        res.status(200).json({ message: "Item added to cart", cart: cart.items });
    } catch (error) {
        console.error("Error adding to cart:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Remove item from cart
export const removeFromCart = async (req, res) => {
    const { userId } = req.query;
    const { itemId } = req.params;

    try {
        const cart = await Cart.findOne({ userId });

        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        cart.items = cart.items.filter(item => item._id.toString() !== itemId);
        await cart.save();

        res.status(200).json({ message: "Item removed from cart", cart: cart.items });
    } catch (error) {
        console.error("Error removing from cart:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Update item quantity in cart
export const updateCartItemQuantity = async (req, res) => {
    const { userId } = req.body;
    const { itemId } = req.params;
    const { quantity } = req.body;

    try {
        const cart = await Cart.findOne({ userId });

        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        const item = cart.items.find(item => item._id.toString() === itemId);
        if (item) {
            item.quantity = quantity;
            await cart.save();
            res.status(200).json({ message: "Quantity updated", cart: cart.items });
        } else {
            res.status(404).json({ message: "Item not found in cart" });
        }
    } catch (error) {
        console.error("Error updating cart item quantity:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Fetch cart items
export const getCartItems = async (req, res) => {
    const { userId } = req.query;

    try {
        const cart = await Cart.findOne({ userId }).populate('items.bookId');
        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        res.status(200).json(cart.items);
    } catch (error) {
        console.error("Error fetching cart items:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};