-- DropForeignKey
ALTER TABLE "authors" DROP CONSTRAINT "authors_documentId_fkey";

-- AddForeignKey
ALTER TABLE "authors" ADD CONSTRAINT "authors_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "documents"("id") ON DELETE CASCADE ON UPDATE CASCADE;
