-- CreateTable
CREATE TABLE "MetaData" (
    "id" SERIAL NOT NULL,
    "CDN" TEXT NOT NULL,
    "Type" TEXT NOT NULL,
    "Title" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "Details" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "Time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MetaData_pkey" PRIMARY KEY ("id")
);
