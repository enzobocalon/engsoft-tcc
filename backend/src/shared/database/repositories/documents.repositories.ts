import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class DocumentsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.DocumentCreateArgs) {
    return this.prismaService.document.create(createDto);
  }

  findMany(findMany: Prisma.DocumentFindManyArgs) {
    return this.prismaService.document.findMany(findMany);
  }

  count(count: Prisma.DocumentCountArgs) {
    return this.prismaService.document.count(count);
  }
}
