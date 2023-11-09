import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class KeywordsDocumentsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findMany(findMany: Prisma.KeywordsDocumentsFindManyArgs) {
    return this.prismaService.keywordsDocuments.findMany(findMany);
  }

  create(create: Prisma.KeywordsDocumentsCreateArgs) {
    return this.prismaService.keywordsDocuments.create(create);
  }

  createMany(createMany: Prisma.KeywordsDocumentsCreateManyArgs) {
    return this.prismaService.keywordsDocuments.createMany(createMany);
  }
}
