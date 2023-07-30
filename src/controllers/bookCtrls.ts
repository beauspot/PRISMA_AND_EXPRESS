import { Request, Response } from "express";
import { BookService } from "../services/bookServices";

const bookService = new BookService();

// getting all books
export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const allbooks = await bookService.getAllBooks();
    return res.status(200).json({ books: allbooks });
  } catch (error) {
    res.status(500).json({ error: "Failed to get resources" });
  }
};

// creating a book
export const createBook = async (req: Request, res: Response) => {
  const { title, isFiction, dataPublished, id } = req.body;
  try {
    const createbook = await bookService.createBook(
      title,
      isFiction,
      dataPublished,
      id
    );
    return res.status(201).json({ create_book_data: createbook });
  } catch (error) {
    return res.status(500).json({ error: "Unable to create book" });
  }
};

// Get a single book
export const getSingleBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const book = await bookService.getabookbyID(parseInt(id));
    if (!book)
      return res.status(404).json({ error: `Book With ID: ${id} not found` });
    else return res.status(200).json({ book_data: book });
  } catch (error) {
    return res.status(500).json({ error: "Something went wrong" });
  }
};

// Update a book
export const updateBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, isFiction, dataPublished } = req.body;
  try {
    const book = await bookService.updateBook(
      parseInt(id),
      title,
      isFiction,
      dataPublished
    );
    return res.status(201).json({ book_data: book });
  } catch (error) {
    return res.status(500).json({ error: "Something went wrong" });
  }
};

// Delete a Book.
export const deleteBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await bookService.deleteBook(parseInt(id));
    return res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {}
};
