import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class DocumentDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsArray()
  @IsString()
  @IsNotEmpty({ each: true })
  keywords: string[];

  @IsArray()
  @IsString()
  @IsNotEmpty({ each: true })
  author: string[];
}
