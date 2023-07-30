import { PrismaClient, Author } from "@prisma/client";

const prisma = (global as any).__db || new PrismaClient();

export class AuthorService {
  // getting all the authors from the database.
  async getAllAuthors(): Promise<Author[]> {
    return prisma.author.findMany();
  }

  // creating an author
  async createAuthor(firstName: string, lastName: string): Promise<Author> {
    return prisma.author.create({
      data: {
        firstName,
        lastName,
      },
    });
  }

  //getting an author by ID
  async getAuthorbyID(id: number): Promise<Author | null> {
    return prisma.author.findUnique({ where: { id } });
  }

  // Updating an Author by the ID
  async updateAuthor(
    id: number,
    firstName: string,
    lastName: string
  ): Promise<Author | null> {
    return prisma.author.update({
      where: { id },
      data: {
        firstName,
        lastName,
      },
    });
  }

  // delete an Author by the ID
  async deleteAuthor(id: number): Promise<Author | null> {
    return prisma.author.delete({
      where: { id },
    });
  }
}
