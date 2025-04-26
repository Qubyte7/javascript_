/*
  Warnings:

  - A unique constraint covering the columns `[github]` on the table `profile` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "profile" ADD COLUMN     "github" TEXT,
ADD COLUMN     "instagram" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "profile_github_key" ON "profile"("github");
