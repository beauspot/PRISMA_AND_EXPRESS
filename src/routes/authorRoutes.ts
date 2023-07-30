import express from "express";

import {
  getAllAuthors,
  createAuthor,
  getSingleAuthor,
  updateAuthor,
  deleteAuthor,
} from "../controllers/authorCtrls";

const router = express.Router();

router.get("/authors", getAllAuthors);
router.post("/authors", createAuthor);
router.get("/authors/:id", getSingleAuthor);
router.put("/authors/:id", updateAuthor);
router.delete("/authors/:id", deleteAuthor);

export default router;
