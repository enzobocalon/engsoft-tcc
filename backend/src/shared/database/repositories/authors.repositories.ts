import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class AuthorRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.AuthorCreateArgs) {
    return this.prismaService.author.create(createDto);
  }
}
