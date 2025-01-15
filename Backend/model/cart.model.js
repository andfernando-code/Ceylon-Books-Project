import mongoose from "mongoose";

const cartItemSchema = mongoose.Schema({
    bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book", required: true },
    quantity: { type: Number, required: true, default: 1 },
    price: { type: Number, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
});

const cartSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User ", required: true },
    items: [cartItemSchema],
});

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;