import express from "express";
import {
  getAllBooks,
  createBook,
  getSingleBook,
  updateBook,
  deleteBook,
} from "../controllers/bookCtrls";

const router = express.Router();

router.get("/books", getAllBooks);
router.post("/books", createBook);
router.get("/books/:bookId", getSingleBook);
router.put("/books/:bookId", updateBook);
router.delete("/books/:bookId", deleteBook);

export default router;
