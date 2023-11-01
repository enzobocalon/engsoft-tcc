import { Controller, Get, Post, Query } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { IsPublic } from 'src/shared/decorators/IsPublic';

@Controller('documents')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @IsPublic()
  @Get()
  async listDocument(
    @Query('keywords') keywords: string[],
    @Query('author') author: string[],
  ) {
    return this.documentsService.getByFilter(keywords, author);
  }
}
