import { Injectable, BadRequestException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DocumentsRepository } from 'src/shared/database/repositories/documents.repositories';
import { DocumentDto } from './dto/document.dto';
import { AuthorRepository } from 'src/shared/database/repositories/authors.repositories';

@Injectable()
export class DocumentsService {
  constructor(
    private readonly documentsRepo: DocumentsRepository,
    private readonly authorsRepo: AuthorRepository,
  ) {}

  async getByFilter(keywords?: string[], author?: string) {
    if (!keywords && !author) {
      throw new BadRequestException('No filter provided');
    }

    const filterOptions: Prisma.DocumentWhereInput = {};

    if (keywords && keywords.length > 0) {
      filterOptions.keywords = {
        hasEvery: keywords,
      };
    }

    if (author) {
      filterOptions.author = {
        some: {
          name: {
            contains: author,
            mode: 'insensitive',
          },
        },
      };
    }

    const documents = await this.documentsRepo.findMany({
      where: filterOptions,
      include: {
        author: true,
      },
    });

    return documents;
  }

  async create(userId: string, file: Express.Multer.File, data: DocumentDto) {
    const { author, keywords, title } = data;

    const keywordsArray: string[] = JSON.parse(keywords);
    const authors: string[] = JSON.parse(author);

    const document = await this.documentsRepo.create({
      data: {
        keywords: keywordsArray.map((key) => key.toLowerCase()),
        title,
        path: file.filename,
      },
    });

    for (const currentAuthor of authors) {
      await this.authorsRepo.create({
        data: {
          name: currentAuthor,
          documentId: document.id,
        },
      });
    }

    return document;
  }
}
