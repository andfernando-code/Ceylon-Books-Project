import Book from "../model/book.model.js";

// Get all books
export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    
    if (!books || books.length === 0) {
      return res.status(404).json({ message: "No books found" });
    }
    
    res.status(200).json(books);
  } catch (error) {
    console.log("Error fetching books: ", error);
    res.status(500).json({ message: "Error fetching books", error: error.message });
  }
};

// Get single book by ID
export const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    
    res.status(200).json(book);
  } catch (error) {
    console.log("Error fetching book by ID: ", error);
    if (error.name === 'CastError') {
      return res.status(400).json({ message: "Invalid book ID format" });
    }
    res.status(500).json({ message: "Error fetching book", error: error.message });
  }
};