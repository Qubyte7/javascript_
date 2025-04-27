/*
  Warnings:

  - You are about to drop the column `tpye` on the `product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "product" DROP COLUMN "tpye",
ADD COLUMN     "type" TEXT;
