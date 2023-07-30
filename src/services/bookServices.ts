import { PrismaClient, Book } from "@prisma/client";

const prisma = (global as any).__db || new PrismaClient();

export class BookService {
  // Get all books
  async getAllBooks(): Promise<Book[]> {
    return prisma.book.findMany();
  }

  // create a new book
  async createBook(
    title: string,
    isFiction: boolean,
    dataPublished: Date,
    authorId: number
  ): Promise<Book> {
    return prisma.book.create({
      data: {
        title,
        isFiction,
        dataPublished,
        authorId,
      },
    });
  }

  // get book by ID
  async getabookbyID(id: number): Promise<Book | null> {
    return prisma.book.findUnique({ where: { id } });
  }

  async updateBook(
    id: number,
    title: string,
    isFiction: boolean,
    dataPublished: Date
  ): Promise<Book | null> {
    return prisma.book.update({
      where: { id },
      data: {
        title,
        isFiction,
        dataPublished,
      },
    });
  }

  // Delete a book
  async deleteBook(id: number): Promise<Book | null> {
    return prisma.book.delete({ where: { id } });
  }
}
