/*
  Warnings:

  - You are about to drop the column `Description` on the `MetaData` table. All the data in the column will be lost.
  - You are about to drop the column `Details` on the `MetaData` table. All the data in the column will be lost.
  - You are about to drop the column `key` on the `MetaData` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[keys]` on the table `MetaData` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `TechnicalDetails` to the `MetaData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `overview` to the `MetaData` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "MetaData_key_key";

-- AlterTable
ALTER TABLE "MetaData" DROP COLUMN "Description",
DROP COLUMN "Details",
DROP COLUMN "key",
ADD COLUMN     "ProjectFacts" TEXT[],
ADD COLUMN     "TechnicalDetails" TEXT NOT NULL,
ADD COLUMN     "keys" TEXT[],
ADD COLUMN     "overview" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "MetaData_keys_key" ON "MetaData"("keys");
