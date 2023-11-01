import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersRepository } from './repositories/user.repositories';

@Global()
@Module({
  providers: [PrismaService, UsersRepository],
  exports: [UsersRepository],
})
export class DatabaseModule {}
