import {
  BadRequestException,
  Body,
  Controller,
  FileTypeValidator,
  Get,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { IsPublic } from 'src/shared/decorators/IsPublic';
import { FileInterceptor } from '@nestjs/platform-express';
import { DocumentDto } from './dto/document.dto';
import { diskStorage } from 'multer';
import { getFilename } from 'src/shared/utils/getFilename';
import { ActiveUserId } from 'src/shared/decorators/ActiveUserId';

@Controller('documents')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: 'public/documents',
        filename: (req, file, cb) =>
          cb(null, `${getFilename(file.originalname)}`),
      }),
      fileFilter: (req, file, cb) => {
        if (!file.originalname.match(/\.(pdf)$/)) {
          return cb(new Error('Somente arquivos PDF são aceitos.'), false);
        }
        cb(null, true);
      },
    }),
  )
  async createDocument(
    @ActiveUserId() userId: string,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new FileTypeValidator({ fileType: '.(pdf)' }),
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 5 }),
        ],
        errorHttpStatusCode: 400,
      }),
    )
    file: Express.Multer.File,
    @Body() data: DocumentDto,
  ) {
    return this.documentsService.create(userId, file, data);
  }

  @IsPublic()
  @Get()
  async listDocument(
    @Query('keywords') keywords: string[],
    @Query('author') author: string,
    @Query('page') page?: string,
  ) {
    const keywordArray = keywords
      ? Array.isArray(keywords)
        ? keywords.map((key) => key.toLowerCase())
        : [(keywords as string).toLowerCase()]
      : [];
    return this.documentsService.getByFilter(keywordArray, author, page);
  }

  @IsPublic()
  @Get('/keywords')
  async listKeywords(@Query('q') q?: string) {
    if (!q) throw new BadRequestException('Nenhuma query informada.');
    return this.documentsService.getKeywords(q);
  }
}
