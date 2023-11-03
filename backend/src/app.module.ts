import 'dotenv/config';

import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { DatabaseModule } from './shared/database/database.module';
import { DocumentsModule } from './modules/documents/documents.module';
import { join } from 'path';
import { UsersModule } from './modules/users/users.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './modules/auth/auth.guard';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public', 'documents'),
      serveStaticOptions: {
        index: false,
      },
      serveRoot: '/public/documents',
    }),
    AuthModule,
    DatabaseModule,
    DocumentsModule,
    UsersModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
