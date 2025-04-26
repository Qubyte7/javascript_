/*
  Warnings:

  - You are about to drop the column `bookuserId` on the `Book` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_bookuserId_fkey";

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "bookuserId",
ADD COLUMN     "authorId" INTEGER;

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
