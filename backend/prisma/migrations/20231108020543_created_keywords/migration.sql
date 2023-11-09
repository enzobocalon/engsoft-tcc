/*
  Warnings:

  - You are about to drop the column `keywords` on the `documents` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "documents" DROP COLUMN "keywords";

-- CreateTable
CREATE TABLE "keywords" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "keywords_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "keywords_documents" (
    "documentId" UUID NOT NULL,
    "keywordId" UUID NOT NULL,

    CONSTRAINT "keywords_documents_pkey" PRIMARY KEY ("documentId","keywordId")
);

-- AddForeignKey
ALTER TABLE "keywords_documents" ADD CONSTRAINT "keywords_documents_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "documents"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "keywords_documents" ADD CONSTRAINT "keywords_documents_keywordId_fkey" FOREIGN KEY ("keywordId") REFERENCES "keywords"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
