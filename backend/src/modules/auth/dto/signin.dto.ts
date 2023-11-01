import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SigninDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
