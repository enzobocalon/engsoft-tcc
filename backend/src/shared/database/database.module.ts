import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersRepository } from './repositories/users.repositories';
import { DocumentsRepository } from './repositories/documents.repositories';
import { AuthorRepository } from './repositories/authors.repositories';
import { KeywordsRepository } from './repositories/keywords.repositories';
import { KeywordsDocumentsRepository } from './repositories/keywords_documents.repositories';

@Global()
@Module({
  providers: [
    PrismaService,
    UsersRepository,
    DocumentsRepository,
    AuthorRepository,
    KeywordsRepository,
    KeywordsDocumentsRepository,
  ],
  exports: [
    UsersRepository,
    DocumentsRepository,
    AuthorRepository,
    KeywordsRepository,
    KeywordsDocumentsRepository,
  ],
})
export class DatabaseModule {}
