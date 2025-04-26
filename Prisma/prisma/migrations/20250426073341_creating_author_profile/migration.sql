-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "authorEmail" TEXT NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_authorEmail_key" ON "Profile"("authorEmail");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_authorEmail_fkey" FOREIGN KEY ("authorEmail") REFERENCES "author"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
