// Define Prisma Client
// We Use Prisma Client to interact with our database via prisma

import { PrismaClient } from "@prisma/client";

let db: PrismaClient;

declare global {
  var __db: PrismaClient | undefined;
}

if (!global.__db) {
  global.__db = new PrismaClient();
} else {
  db = global.__db;
  console.log("connection extablished via PrismaClient");
}

export { db };
