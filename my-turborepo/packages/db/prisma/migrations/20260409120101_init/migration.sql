/*
  Warnings:

  - A unique constraint covering the columns `[key]` on the table `MetaData` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "MetaData_key_key" ON "MetaData"("key");
