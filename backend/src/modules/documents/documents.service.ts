import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DocumentsRepository } from 'src/shared/database/repositories/documents.repositories';
import { DocumentDto } from './dto/document.dto';
import { AuthorRepository } from 'src/shared/database/repositories/authors.repositories';
import { KeywordsRepository } from 'src/shared/database/repositories/keywords.repositories';
import { KeywordsDocumentsRepository } from 'src/shared/database/repositories/keywords_documents.repositories';
import { KeywordedDocument } from './types/KeywordedDocument';

const PAGE_SIZE = 10;
@Injectable()
export class DocumentsService {
  constructor(
    private readonly documentsRepo: DocumentsRepository,
    private readonly keywordsDocumentsRepo: KeywordsDocumentsRepository,
    private readonly authorsRepo: AuthorRepository,
    private readonly keywordsRepo: KeywordsRepository,
  ) {}

  async getByFilter(keywords?: string[], author?: string, page?: string) {
    if (!keywords && !author) {
      throw new BadRequestException('Nenhum filtro informado.');
    }

    const skip = page ? (parseInt(page) - 1) * PAGE_SIZE : 0;
    const filterOptions: Prisma.DocumentWhereInput = {};

    if (keywords && keywords.length > 0) {
      filterOptions.KeywordsDocuments = {
        some: {
          keyword: {
            OR: keywords.map((kw) => ({
              name: {
                contains: kw,
                mode: 'insensitive',
              },
            })),
          },
        },
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

    try {
      const documents = (await this.documentsRepo.findMany({
        take: PAGE_SIZE,
        skip,
        where: filterOptions,
        include: {
          author: true,
          KeywordsDocuments: {
            select: {
              keyword: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
      })) as KeywordedDocument[];
      for (const document of documents) {
        document.keywords = document.KeywordsDocuments.map(
          (kw) => kw.keyword.name,
        );

        delete document.KeywordsDocuments;
      }

      const totalCount = await this.documentsRepo.count({
        where: filterOptions,
      });

      return {
        documents,
        pages: {
          total: totalCount,
          hasNext: skip + PAGE_SIZE < totalCount,
        },
      };
    } catch {
      throw new NotFoundException('Nenhum documento encontrado');
    }
  }

  async create(userId: string, file: Express.Multer.File, data: DocumentDto) {
    const { author, keywords, title } = data;

    const keywordsArray: string[] = JSON.parse(keywords);
    const authors: string[] = JSON.parse(author);

    const document = await this.documentsRepo.create({
      data: {
        userId,
        title,
        path: file.filename,
      },
    });
    await this.handleKeywords(keywordsArray, document);
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

  async getKeywords(keywordName: string) {
    return this.keywordsRepo.findMany({
      where: {
        name: {
          contains: keywordName,
          mode: 'insensitive',
        },
      },
    });
  }

  private isUUID(keyword: string): boolean {
    return /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(
      keyword,
    );
  }

  private async getExistingKeywords(
    keywordList: string[],
  ): Promise<Map<string, string>> {
    const existingKeywords = await this.keywordsRepo.findMany({
      where: {
        name: {
          in: keywordList,
          mode: 'insensitive',
        },
      },
      select: {
        name: true,
        id: true,
      },
    });

    const keywordMap = new Map<string, string>();
    existingKeywords.forEach((keyword) => {
      keywordMap.set(keyword.name.toLowerCase(), keyword.id);
    });

    return keywordMap;
  }

  private async createKeyword(keyword: string): Promise<string> {
    const createdKeyword = await this.keywordsRepo.create({
      data: {
        name: keyword,
      },
    });
    return createdKeyword.id;
  }

  private async handleKeywords(keywords: string[], document: { id: string }) {
    const keywordsIds: string[] = [];

    const existingKeywordMap = await this.getExistingKeywords(keywords);

    for (const keyword of keywords) {
      const lowerCaseKeyword = keyword.toLowerCase();

      if (this.isUUID(keyword)) {
        keywordsIds.push(keyword);
      } else if (existingKeywordMap.has(lowerCaseKeyword)) {
        keywordsIds.push(existingKeywordMap.get(lowerCaseKeyword)!);
      } else {
        const createdKeywordId = await this.createKeyword(keyword);
        keywordsIds.push(createdKeywordId);
      }
    }

    const keywordDocumentRelations = keywordsIds.map((keywordId) => ({
      keywordId,
      documentId: document.id,
    }));

    await this.keywordsDocumentsRepo.createMany({
      data: keywordDocumentRelations,
    });
  }
}
