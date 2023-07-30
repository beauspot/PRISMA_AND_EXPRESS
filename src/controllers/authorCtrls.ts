import { Request, Response } from "express";
import { AuthorService } from "../services/authorServices";

const authorService = new AuthorService();

// Getting all authors
export const getAllAuthors = async (req: Request, res: Response) => {
  try {
    const authors = await authorService.getAllAuthors();
    res.status(200).json({ author_data: authors });
  } catch (error) {
    res.status(400).json({ error: "Failed to get Resources" });
  }
};

// Create an Author
export const createAuthor = async (req: Request, res: Response) => {
  const { firstName, lastName } = req.body;
  try {
    const createauthor = await authorService.createAuthor(firstName, lastName);
    res.status(201).json({ created_author_data: createauthor });
  } catch (error) {
    res.status(304).json({ error: "Unable to create author : " + error });
  }
};

// Get a single author
export const getSingleAuthor = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const author = await authorService.getAuthorbyID(parseInt(id));
    if (!author)
      return res
        .status(404)
        .json({ error: "could not find author with the ID " + id });
    else return res.status(200).json({ author_data: author });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

// Update an author
export const updateAuthor = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { firstName, lastName } = req.body;
  try {
    const author = await authorService.updateAuthor(
      parseInt(id),
      firstName,
      lastName
    );
    return res.json({author_data:author});
  } catch (error) {
    return res.status(500).json({ error: "Something went wrong" });
  }
};


// Delete an Author 
export const deleteAuthor = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        await authorService.deleteAuthor(parseInt(id));
        return res.json({message: "Author deleted successfully"})
    } catch (err) {
        return res.status(500).json({error: "Something went wrong"})
    }
}