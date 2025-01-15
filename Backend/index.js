import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import cartRoute from "./route/cart.route.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4003;
const URI = process.env.MongoDBURI;

// Connect to MongoDB
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((error) => {
    console.log("MongoDB Connection Error: ", error);
});

// Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/cart", cartRoute);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        error: true, 
        message: "Internal Server Error",
        details: err.message 
    });
});

// Handle 404 - Keep this as the last route
app.use((req, res) => {
    res.status(404).json({ 
        error: true, 
        message: "Not Found" 
    });
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});