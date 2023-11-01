import { IsNotEmpty, IsString } from 'class-validator';

export class DocumentDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty({ each: true })
  keywords: string;

  @IsString()
  @IsNotEmpty({ each: true })
  author: string;
}
