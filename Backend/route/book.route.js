import express from "express";
import { getBooks, getBookById } from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getBooks);  // Get all books - /book
router.get("/:id", getBookById);  // Get single book - /book/:id

export default router;