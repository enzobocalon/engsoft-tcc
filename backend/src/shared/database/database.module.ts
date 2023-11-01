import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersRepository } from './repositories/user.repositories';
import { DocumentsRepository } from './repositories/documents.repositories';
import { AuthorRepository } from './repositories/author.repositories';

@Global()
@Module({
  providers: [
    PrismaService,
    UsersRepository,
    DocumentsRepository,
    AuthorRepository,
  ],
  exports: [UsersRepository, DocumentsRepository, AuthorRepository],
})
export class DatabaseModule {}
