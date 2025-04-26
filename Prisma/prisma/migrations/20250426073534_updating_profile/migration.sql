/*
  Warnings:

  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_authorEmail_fkey";

-- DropTable
DROP TABLE "Profile";

-- CreateTable
CREATE TABLE "profile" (
    "id" SERIAL NOT NULL,
    "authorEmail" TEXT NOT NULL,

    CONSTRAINT "profile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "profile_authorEmail_key" ON "profile"("authorEmail");

-- AddForeignKey
ALTER TABLE "profile" ADD CONSTRAINT "profile_authorEmail_fkey" FOREIGN KEY ("authorEmail") REFERENCES "author"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
