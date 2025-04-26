-- CreateTable
CREATE TABLE "category" (
    "id" SERIAL NOT NULL,
    "categoryname" TEXT NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category_on_book" (
    "bookCategoryId" INTEGER NOT NULL,
    "categoryname" TEXT NOT NULL,
    "bookId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "category_on_book_pkey" PRIMARY KEY ("bookCategoryId","bookId")
);

-- CreateIndex
CREATE UNIQUE INDEX "category_categoryname_key" ON "category"("categoryname");

-- AddForeignKey
ALTER TABLE "category_on_book" ADD CONSTRAINT "category_on_book_bookCategoryId_fkey" FOREIGN KEY ("bookCategoryId") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "category_on_book" ADD CONSTRAINT "category_on_book_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
