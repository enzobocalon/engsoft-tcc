import {
  Injectable,
  OnModuleInit,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SigninDto } from './dto/signin.dto';
import { hash, compare } from 'bcryptjs';
import { UsersRepository } from 'src/shared/database/repositories/users.repositories';

@Injectable()
export class AuthService implements OnModuleInit {
  constructor(
    private readonly usersRepo: UsersRepository,
    private readonly jwtService: JwtService,
  ) {}
  async onModuleInit() {
    const hasUser = await this.usersRepo.count();
    if (!hasUser) {
      const hashedPassword = await hash('admin_unifev2023', 12);
      await this.usersRepo.create({
        data: {
          name: 'admin',
          password: hashedPassword,
        },
      });
    }
  }

  async signin(signinDto: SigninDto) {
    const { name, password } = signinDto;

    const user = await this.usersRepo.findUnique({
      where: {
        name,
      },
    });

    const isPasswordValid = await compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const accessToken = await this.generateToken(user.id);

    return {
      accessToken,
    };
  }

  private generateToken(userId: string) {
    return this.jwtService.signAsync({
      sub: userId,
    });
  }
}
