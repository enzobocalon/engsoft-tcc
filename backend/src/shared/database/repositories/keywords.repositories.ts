import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class KeywordsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findMany(findMany: Prisma.KeywordsFindManyArgs) {
    return this.prismaService.keywords.findMany(findMany);
  }

  create(create: Prisma.KeywordsCreateArgs) {
    return this.prismaService.keywords.create(create);
  }

  findFirst(findFirst: Prisma.KeywordsFindFirstArgs) {
    return this.prismaService.keywords.findFirst(findFirst);
  }
}
