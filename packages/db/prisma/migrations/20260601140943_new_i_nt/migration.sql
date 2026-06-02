/*
  Warnings:

  - A unique constraint covering the columns `[Title]` on the table `MetaData` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "MetaData_Title_key" ON "MetaData"("Title");
