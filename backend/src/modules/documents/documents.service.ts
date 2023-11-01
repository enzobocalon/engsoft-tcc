import { Injectable, BadRequestException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DocumentsRepository } from 'src/shared/database/repositories/documents.repositories';

@Injectable()
export class DocumentsService {
  constructor(private readonly documentsRepo: DocumentsRepository) {}

  async getByFilter(keywords?: string[], author?: string[]) {
    if (!keywords && !author)
      throw new BadRequestException('No filter provided');

    const filterOptions: Prisma.DocumentWhereInput = {};

    if (keywords && keywords.length > 0) {
      filterOptions.keywords = {
        hasSome: keywords,
      };
    }

    if (author && author.length > 0) {
      filterOptions.author = {
        hasSome: author,
      };
    }

    const documents = await this.documentsRepo.findMany({
      where: filterOptions,
    });

    return documents;
  }
}
